import * as crypto from "node:crypto";
import * as path from "node:path";
import * as ts from "typescript";

// Internal type ID accessor (stable across TypeScript versions)
function getTypeId(type: ts.Type): number {
  // @ts-expect-error - id is internal but stable
  return type.id;
}

/**
 * Recursively serializes a TypeScript type to a canonical string,
 * fully expanding all type aliases and references.
 */
function serializeType(
  type: ts.Type,
  checker: ts.TypeChecker,
  visited: Set<number> = new Set(),
  cache: Map<number, string> = new Map(),
  depth = 0,
): string {
  const typeId = getTypeId(type);

  // Prevent infinite recursion for circular types
  if (depth > 50) return "...";
  if (visited.has(typeId)) return "circular";

  // Check memoization cache
  if (cache.has(typeId)) {
    return cache.get(typeId)!;
  }

  const result = serializeTypeInner(type, checker, visited, cache, depth);
  cache.set(typeId, result);
  return result;
}

function serializeTypeInner(
  type: ts.Type,
  checker: ts.TypeChecker,
  visited: Set<number>,
  cache: Map<number, string>,
  depth: number,
): string {
  // Handle union types (sort for canonical output)
  if (type.isUnion()) {
    const parts = type.types
      .map((t) => serializeType(t, checker, visited, cache, depth + 1))
      .sort();
    return parts.join(" | ");
  }

  // Handle intersection types (sort for canonical output)
  if (type.isIntersection()) {
    const parts = type.types
      .map((t) => serializeType(t, checker, visited, cache, depth + 1))
      .sort();
    return parts.join(" & ");
  }

  // Handle literal types
  if (type.isStringLiteral()) return `"${type.value}"`;
  if (type.isNumberLiteral()) return `${type.value}`;
  if (type.flags & ts.TypeFlags.BooleanLiteral) {
    // @ts-expect-error - intrinsicName exists on boolean literal types
    return type.intrinsicName === "true" ? "true" : "false";
  }

  // Handle primitives
  if (type.flags & ts.TypeFlags.String) return "string";
  if (type.flags & ts.TypeFlags.Number) return "number";
  if (type.flags & ts.TypeFlags.Boolean) return "boolean";
  if (type.flags & ts.TypeFlags.Null) return "null";
  if (type.flags & ts.TypeFlags.Undefined) return "undefined";
  if (type.flags & ts.TypeFlags.Void) return "void";
  if (type.flags & ts.TypeFlags.Never) return "never";
  if (type.flags & ts.TypeFlags.Any) return "any";
  if (type.flags & ts.TypeFlags.Unknown) return "unknown";

  // Handle indexed access types (e.g., Foo["bar"])
  if (type.flags & ts.TypeFlags.IndexedAccess) {
    const indexedType = type as ts.IndexedAccessType;
    const objectPart = serializeType(indexedType.objectType, checker, visited, cache, depth + 1);
    const indexPart = serializeType(indexedType.indexType, checker, visited, cache, depth + 1);
    return `${objectPart}[${indexPart}]`;
  }

  // Handle conditional types (e.g., T extends U ? X : Y)
  if (type.flags & ts.TypeFlags.Conditional) {
    const conditionalType = type as ts.ConditionalType;
    const checkType = serializeType(conditionalType.checkType, checker, visited, cache, depth + 1);
    const extendsType = serializeType(conditionalType.extendsType, checker, visited, cache, depth + 1);
    // For resolved conditional types, get the resolved result
    const resolved = checker.getBaseConstraintOfType(type);
    if (resolved && resolved !== type) {
      return serializeType(resolved, checker, visited, cache, depth + 1);
    }
    // Fallback to string representation
    return checker.typeToString(type, undefined, ts.TypeFormatFlags.NoTruncation);
  }

  // Handle arrays and tuples
  if (checker.isArrayType(type)) {
    const typeArgs = checker.getTypeArguments(type as ts.TypeReference);
    if (typeArgs.length > 0) {
      return `Array<${serializeType(typeArgs[0]!, checker, visited, cache, depth + 1)}>`;
    }
    return "Array<unknown>";
  }

  if (checker.isTupleType(type)) {
    const typeArgs = checker.getTypeArguments(type as ts.TypeReference);
    const parts = typeArgs.map((t) =>
      serializeType(t, checker, visited, cache, depth + 1),
    );
    return `[${parts.join(", ")}]`;
  }

  // Handle object types (including interfaces and type aliases)
  if (type.flags & ts.TypeFlags.Object) {
    const objectType = type as ts.ObjectType;

    // Handle mapped types (e.g., { [K in keyof T]: T[K] })
    if (objectType.objectFlags & ts.ObjectFlags.Mapped) {
      // For mapped types, get the resolved properties instead of the template
      const properties = checker.getPropertiesOfType(type);
      if (properties.length > 0) {
        // Fall through to property serialization below
      } else {
        // Empty mapped type or unresolved - use checker's representation
        return checker.typeToString(type, undefined, ts.TypeFormatFlags.NoTruncation);
      }
    }

    // Handle type references with type arguments (generics like Promise<T>, Map<K,V>)
    if (objectType.objectFlags & ts.ObjectFlags.Reference) {
      const typeRef = type as ts.TypeReference;
      const target = typeRef.target;
      const typeArgs = checker.getTypeArguments(typeRef);

      // Check for special built-in types
      const symbol = target.getSymbol();
      const symbolName = symbol?.getName();

      // Handle ReadonlyArray specially
      if (symbolName === "ReadonlyArray" && typeArgs.length > 0) {
        return `ReadonlyArray<${serializeType(typeArgs[0]!, checker, visited, cache, depth + 1)}>`;
      }

      // Handle Promise, Map, Set, etc. - expand their structure
      if (symbolName && ["Promise", "Map", "Set", "WeakMap", "WeakSet"].includes(symbolName)) {
        const argStrings = typeArgs.map((t) =>
          serializeType(t, checker, visited, cache, depth + 1),
        );
        return `${symbolName}<${argStrings.join(", ")}>`;
      }

      // For other type references, expand to their full structure
      // Continue to property serialization
    }

    // Get properties of the object type
    const properties = checker.getPropertiesOfType(type);

    if (properties.length === 0) {
      // Could be a function type or empty object
      const callSignatures = type.getCallSignatures();
      if (callSignatures.length > 0) {
        const sig = callSignatures[0]!;
        const params = sig.getParameters().map((p) => {
          const paramType = checker.getTypeOfSymbol(p);
          return `${p.getName()}: ${serializeType(paramType, checker, visited, cache, depth + 1)}`;
        });
        const returnType = checker.getReturnTypeOfSignature(sig);
        return `(${params.join(", ")}) => ${serializeType(returnType, checker, visited, cache, depth + 1)}`;
      }

      // Check for index signatures
      const indexInfos = checker.getIndexInfosOfType(type);
      if (indexInfos.length > 0) {
        const indexParts = indexInfos.map((info) => {
          const keyType = serializeType(info.keyType, checker, visited, cache, depth + 1);
          const valueType = serializeType(info.type, checker, visited, cache, depth + 1);
          return `[key: ${keyType}]: ${valueType}`;
        });
        return `{ ${indexParts.join("; ")} }`;
      }

      return "{}";
    }

    const typeId = getTypeId(type);
    visited.add(typeId);

    // Sort properties for consistent output
    const sortedProps = [...properties].sort((a, b) =>
      a.getName().localeCompare(b.getName()),
    );

    const propStrings = sortedProps.map((prop) => {
      const propType = checker.getTypeOfSymbol(prop);
      const optional = prop.flags & ts.SymbolFlags.Optional ? "?" : "";
      const readonly =
        prop.declarations?.[0] &&
        ts.getCombinedModifierFlags(prop.declarations[0]) & ts.ModifierFlags.Readonly
          ? "readonly "
          : "";
      return `${readonly}${prop.getName()}${optional}: ${serializeType(propType, checker, visited, cache, depth + 1)}`;
    });

    // Handle index signatures alongside properties
    const indexInfos = checker.getIndexInfosOfType(type);
    const indexParts = indexInfos.map((info) => {
      const keyType = serializeType(info.keyType, checker, visited, cache, depth + 1);
      const valueType = serializeType(info.type, checker, visited, cache, depth + 1);
      return `[key: ${keyType}]: ${valueType}`;
    });

    const allParts = [...propStrings, ...indexParts];
    return `{ ${allParts.join("; ")} }`;
  }

  // Handle type parameters (generics like T, K, V)
  if (type.flags & ts.TypeFlags.TypeParameter) {
    const constraint = checker.getBaseConstraintOfType(type);
    if (constraint) {
      return serializeType(constraint, checker, visited, cache, depth + 1);
    }
    return checker.typeToString(type);
  }

  // Fallback to checker's typeToString for anything else
  return checker.typeToString(type, undefined, ts.TypeFormatFlags.NoTruncation);
}

/**
 * Resolves a TypeScript type to a canonical string representation,
 * recursively expanding all referenced types (including imported ones).
 */
export function resolveTypeToString(
  typeName: string,
  filePath: string,
): string | null {
  const absolutePath = path.resolve(filePath);
  const configPath = ts.findConfigFile(
    path.dirname(absolutePath),
    ts.sys.fileExists,
    "tsconfig.json",
  );

  const compilerOptions: ts.CompilerOptions = configPath
    ? ts.parseJsonConfigFileContent(
        ts.readConfigFile(configPath, ts.sys.readFile).config,
        ts.sys,
        path.dirname(configPath),
      ).options
    : { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.NodeNext };

  const program = ts.createProgram([absolutePath], compilerOptions);
  const sourceFile = program.getSourceFile(absolutePath);
  const checker = program.getTypeChecker();

  if (!sourceFile) {
    console.error(`Could not load source file: ${absolutePath}`);
    return null;
  }

  // Find the type alias declaration
  let typeNode: ts.TypeAliasDeclaration | undefined;
  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isTypeAliasDeclaration(node) &&
      node.name.getText(sourceFile) === typeName
    ) {
      typeNode = node;
    }
  });

  if (!typeNode) {
    console.error(`Could not find type: ${typeName}`);
    return null;
  }

  const type = checker.getTypeAtLocation(typeNode);

  // Use custom serializer that fully expands all type references
  return serializeType(type, checker);
}

/**
 * Computes a hash for a fully resolved TypeScript type.
 */
export function computeTypeHash(
  typeName: string,
  filePath: string,
): string | null {
  const resolvedType = resolveTypeToString(typeName, filePath);

  if (!resolvedType) {
    return null;
  }

  return crypto.createHash("sha256").update(resolvedType).digest("hex").slice(0, 8);
}

