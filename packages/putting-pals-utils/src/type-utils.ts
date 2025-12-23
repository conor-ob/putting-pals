export type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends object ? RecursivePartial<T[K]> : T[K];
};

export function assertNever(x?: never): never {
  throw new Error(`Unexpected object: ${x}`);
}
