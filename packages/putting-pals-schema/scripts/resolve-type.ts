import * as crypto from "node:crypto";
import * as path from "node:path";
import * as ts from "typescript";

/**
 * Recursively serializes a TypeScript type to a canonical string,
 * fully expanding all type aliases and references.
 */
function serializeType(
  type: ts.Type,
  checker: ts.TypeChecker,
  visited: Set<ts.Type> = new Set(),
  depth = 0,
): string {
  // Prevent infinite recursion for circular types
  if (depth > 50) return "...";
  if (visited.has(type)) return "circular";

  // Handle union types
  if (type.isUnion()) {
    const parts = type.types.map((t) =>
      serializeType(t, checker, visited, depth + 1),
    );
    return parts.join(" | ");
  }

  // Handle intersection types
  if (type.isIntersection()) {
    const parts = type.types.map((t) =>
      serializeType(t, checker, visited, depth + 1),
    );
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

  // Handle arrays and tuples
  if (checker.isArrayType(type)) {
    const typeArgs = checker.getTypeArguments(type as ts.TypeReference);
    if (typeArgs.length > 0) {
      return `Array<${serializeType(typeArgs[0]!, checker, visited, depth + 1)}>`;
    }
    return "Array<unknown>";
  }

  if (checker.isTupleType(type)) {
    const typeArgs = checker.getTypeArguments(type as ts.TypeReference);
    const parts = typeArgs.map((t) =>
      serializeType(t, checker, visited, depth + 1),
    );
    return `[${parts.join(", ")}]`;
  }

  // Handle object types (including interfaces and type aliases)
  if (type.flags & ts.TypeFlags.Object) {
    const objectType = type as ts.ObjectType;

    // Check for readonly array (ReadonlyArray<T>)
    const symbol = type.getSymbol();
    if (symbol?.getName() === "ReadonlyArray") {
      const typeArgs = checker.getTypeArguments(type as ts.TypeReference);
      if (typeArgs.length > 0) {
        return `ReadonlyArray<${serializeType(typeArgs[0]!, checker, visited, depth + 1)}>`;
      }
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
          return `${p.getName()}: ${serializeType(paramType, checker, visited, depth + 1)}`;
        });
        const returnType = checker.getReturnTypeOfSignature(sig);
        return `(${params.join(", ")}) => ${serializeType(returnType, checker, visited, depth + 1)}`;
      }
      return "{}";
    }

    visited.add(type);

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
      return `${readonly}${prop.getName()}${optional}: ${serializeType(propType, checker, visited, depth + 1)}`;
    });

    return `{ ${propStrings.join("; ")} }`;
  }

  // Fallback to checker's typeToString for anything else
  return checker.typeToString(type);
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

