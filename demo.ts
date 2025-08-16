// Example usage of enhanced-is-array package
// This file demonstrates how to use the package

import {
  isArray,
  isStringArray,
  isNumberArray,
  isNonEmptyArray,
  validateArray,
  isArrayOf,
} from "./src/index";

console.log("=== Enhanced Is-Array Demo ===\n");

// Basic array checking
console.log("Basic Array Checking:");
console.log("isArray([1, 2, 3]):", isArray([1, 2, 3])); // true
console.log('isArray("string"):', isArray("string")); // false
console.log("isArray(null):", isArray(null)); // false

// Type-specific validation
console.log("\nType-specific Validation:");
console.log('isStringArray(["a", "b"]):', isStringArray(["a", "b"])); // true
console.log('isStringArray(["a", 123]):', isStringArray(["a", 123])); // false
console.log("isNumberArray([1, 2, 3]):", isNumberArray([1, 2, 3])); // true
console.log("isNumberArray([1, NaN, 3]):", isNumberArray([1, NaN, 3])); // false

// Non-empty validation
console.log("\nNon-empty Validation:");
console.log("isNonEmptyArray([1]):", isNonEmptyArray([1])); // true
console.log("isNonEmptyArray([]):", isNonEmptyArray([])); // false

// Advanced validation with custom type guard
console.log("\nCustom Type Guard:");
const isPositiveNumber = (x: unknown): x is number =>
  typeof x === "number" && x > 0;

console.log(
  "isArrayOf([1, 2, 3], isPositiveNumber):",
  isArrayOf([1, 2, 3], isPositiveNumber)
); // true
console.log(
  "isArrayOf([1, -2, 3], isPositiveNumber):",
  isArrayOf([1, -2, 3], isPositiveNumber)
); // false

// Complex validation
console.log("\nComplex Validation:");
const validationOptions = {
  allowEmpty: false,
  minLength: 2,
  maxLength: 5,
  elementType: "string" as const,
};

console.log(
  'validateArray(["hello", "world"], options):',
  validateArray(["hello", "world"], validationOptions)
); // true
console.log(
  'validateArray(["hello"], options):',
  validateArray(["hello"], validationOptions)
); // false (too short)
console.log(
  "validateArray([], options):",
  validateArray([], validationOptions)
); // false (empty not allowed)

// Backwards compatibility test
console.log("\nBackwards Compatibility:");
import isArrayDefault from "./src/index";
console.log("Default export isArray([1, 2, 3]):", isArrayDefault([1, 2, 3])); // true
