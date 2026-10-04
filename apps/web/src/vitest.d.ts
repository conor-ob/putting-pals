import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import "vitest";

// @testing-library/jest-dom augments vitest's `Assertion<T>`, which no longer
// matches vitest 5's `Assertion<R, T>`, so register the matchers via `Matchers`
declare module "vitest" {
  interface Matchers<
    R extends void | Promise<void> = void | Promise<void>,
    T = unknown,
  > extends TestingLibraryMatchers<unknown, R> {}
}
