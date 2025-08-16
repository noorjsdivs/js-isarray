/**
 * Enhanced array validation utilities
 * A modern TypeScript replacement for the is-array package with additional features
 */

/**
 * Type guard to check if a value is an array
 * @param value - The value to check
 * @returns true if the value is an array, false otherwise
 */
export function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value);
}

/**
 * Type guard to check if a value is a non-empty array
 * @param value - The value to check
 * @returns true if the value is a non-empty array, false otherwise
 */
export function isNonEmptyArray<T = unknown>(
  value: unknown
): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Type guard to check if a value is an empty array
 * @param value - The value to check
 * @returns true if the value is an empty array, false otherwise
 */
export function isEmptyArray(value: unknown): value is [] {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Type guard to check if a value is an array of a specific type
 * @param value - The value to check
 * @param typeGuard - A type guard function to check each element
 * @returns true if the value is an array and all elements match the type guard
 */
export function isArrayOf<T>(
  value: unknown,
  typeGuard: (item: unknown) => item is T
): value is T[] {
  return Array.isArray(value) && value.every(typeGuard);
}

/**
 * Type guard to check if a value is an array of strings
 * @param value - The value to check
 * @returns true if the value is an array of strings, false otherwise
 */
export function isStringArray(value: unknown): value is string[] {
  return isArrayOf(value, (item): item is string => typeof item === "string");
}

/**
 * Type guard to check if a value is an array of numbers
 * @param value - The value to check
 * @returns true if the value is an array of numbers, false otherwise
 */
export function isNumberArray(value: unknown): value is number[] {
  return isArrayOf(
    value,
    (item): item is number => typeof item === "number" && !isNaN(item)
  );
}

/**
 * Type guard to check if a value is an array of booleans
 * @param value - The value to check
 * @returns true if the value is an array of booleans, false otherwise
 */
export function isBooleanArray(value: unknown): value is boolean[] {
  return isArrayOf(value, (item): item is boolean => typeof item === "boolean");
}

/**
 * Type guard to check if a value is an array of objects (non-null)
 * @param value - The value to check
 * @returns true if the value is an array of objects, false otherwise
 */
export function isObjectArray(
  value: unknown
): value is Record<string, unknown>[] {
  return isArrayOf(
    value,
    (item): item is Record<string, unknown> =>
      typeof item === "object" && item !== null && !Array.isArray(item)
  );
}

/**
 * Type guard to check if a value is an array with a specific length
 * @param value - The value to check
 * @param length - The expected length
 * @returns true if the value is an array with the specified length
 */
export function isArrayWithLength<T = unknown>(
  value: unknown,
  length: number
): value is T[] {
  return Array.isArray(value) && value.length === length;
}

/**
 * Type guard to check if a value is an array with minimum length
 * @param value - The value to check
 * @param minLength - The minimum length
 * @returns true if the value is an array with at least the minimum length
 */
export function isArrayWithMinLength<T = unknown>(
  value: unknown,
  minLength: number
): value is T[] {
  return Array.isArray(value) && value.length >= minLength;
}

/**
 * Type guard to check if a value is an array with maximum length
 * @param value - The value to check
 * @param maxLength - The maximum length
 * @returns true if the value is an array with at most the maximum length
 */
export function isArrayWithMaxLength<T = unknown>(
  value: unknown,
  maxLength: number
): value is T[] {
  return Array.isArray(value) && value.length <= maxLength;
}

/**
 * Options for array validation
 */
export interface ArrayValidationOptions {
  allowEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
  elementType?: "string" | "number" | "boolean" | "object";
}

/**
 * Advanced array validation with multiple criteria
 * @param value - The value to check
 * @param options - Validation options
 * @returns true if the value passes all validation criteria
 */
export function validateArray(
  value: unknown,
  options: ArrayValidationOptions = {}
): boolean {
  if (!Array.isArray(value)) {
    return false;
  }

  const { allowEmpty = true, minLength, maxLength, elementType } = options;

  // Check empty array
  if (!allowEmpty && value.length === 0) {
    return false;
  }

  // Check minimum length
  if (minLength !== undefined && value.length < minLength) {
    return false;
  }

  // Check maximum length
  if (maxLength !== undefined && value.length > maxLength) {
    return false;
  }

  // Check element type
  if (elementType) {
    switch (elementType) {
      case "string":
        return isStringArray(value);
      case "number":
        return isNumberArray(value);
      case "boolean":
        return isBooleanArray(value);
      case "object":
        return isObjectArray(value);
    }
  }

  return true;
}

// Default export for backwards compatibility with is-array
export default isArray;
