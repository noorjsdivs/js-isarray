# Enhanced Is-Array

A modern TypeScript utility library for robust array validation with enhanced features. This package provides a comprehensive set of type-safe array validation functions that go far beyond the basic `Array.isArray()` check.

[![npm version](https://badge.fury.io/js/enhanced-is-array.svg)](https://badge.fury.io/js/enhanced-is-array)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## Features

- 🚀 **Modern TypeScript**: Full TypeScript support with proper type guards
- 🔍 **Enhanced Validation**: Beyond basic array checking
- 📦 **Multiple Formats**: CommonJS, ESM, and TypeScript declarations
- 🎯 **Type Safety**: Comprehensive type guards for better type inference
- 🧪 **Well Tested**: 100% test coverage
- 📘 **Zero Dependencies**: Lightweight and fast
- 🔧 **Node & Browser**: Works everywhere JavaScript runs

## Installation

```bash
npm install enhanced-is-array
```

```bash
yarn add enhanced-is-array
```

```bash
pnpm add enhanced-is-array
```

## Quick Start

```typescript
import { isArray, isStringArray, validateArray } from "enhanced-is-array";

// Basic array checking (backwards compatible)
isArray([1, 2, 3]); // true
isArray("not array"); // false

// Type-specific validation
isStringArray(["hello", "world"]); // true
isStringArray(["hello", 123]); // false

// Advanced validation
validateArray([1, 2, 3], {
  minLength: 2,
  maxLength: 5,
  elementType: "number",
}); // true
```

## API Reference

### Basic Array Validation

#### `isArray<T>(value: unknown): value is T[]`

Basic array type guard, equivalent to `Array.isArray()` but with TypeScript support.

```typescript
import { isArray } from "enhanced-is-array";

isArray([]); // true
isArray([1, 2, 3]); // true
isArray("string"); // false
isArray(null); // false
```

#### `isNonEmptyArray<T>(value: unknown): value is [T, ...T[]]`

Checks if a value is a non-empty array.

```typescript
isNonEmptyArray([1, 2, 3]); // true
isNonEmptyArray([]); // false
isNonEmptyArray("string"); // false
```

#### `isEmptyArray(value: unknown): value is []`

Checks if a value is an empty array.

```typescript
isEmptyArray([]); // true
isEmptyArray([1]); // false
isEmptyArray(null); // false
```

### Type-Specific Validation

#### `isStringArray(value: unknown): value is string[]`

Validates that a value is an array of strings.

```typescript
isStringArray(["hello", "world"]); // true
isStringArray(["hello", 123]); // false
isStringArray([]); // true (empty arrays pass)
```

#### `isNumberArray(value: unknown): value is number[]`

Validates that a value is an array of numbers (excludes NaN).

```typescript
isNumberArray([1, 2, 3.14]); // true
isNumberArray([1, NaN, 3]); // false
isNumberArray(["1", 2]); // false
```

#### `isBooleanArray(value: unknown): value is boolean[]`

Validates that a value is an array of booleans.

```typescript
isBooleanArray([true, false, true]); // true
isBooleanArray([true, 1, false]); // false
```

#### `isObjectArray(value: unknown): value is Record<string, unknown>[]`

Validates that a value is an array of objects (excluding null and arrays).

```typescript
isObjectArray([{}, { name: "John" }]); // true
isObjectArray([{}, null]); // false
isObjectArray([{}, []]); // false
```

### Length-Based Validation

#### `isArrayWithLength<T>(value: unknown, length: number): value is T[]`

Validates that a value is an array with a specific length.

```typescript
isArrayWithLength([1, 2, 3], 3); // true
isArrayWithLength([1, 2], 3); // false
```

#### `isArrayWithMinLength<T>(value: unknown, minLength: number): value is T[]`

Validates that a value is an array with at least the specified minimum length.

```typescript
isArrayWithMinLength([1, 2, 3], 2); // true
isArrayWithMinLength([1], 2); // false
```

#### `isArrayWithMaxLength<T>(value: unknown, maxLength: number): value is T[]`

Validates that a value is an array with at most the specified maximum length.

```typescript
isArrayWithMaxLength([1, 2], 3); // true
isArrayWithMaxLength([1, 2, 3, 4], 3); // false
```

### Advanced Validation

#### `isArrayOf<T>(value: unknown, typeGuard: (item: unknown) => item is T): value is T[]`

Generic function to validate arrays with custom type guards.

```typescript
const isPositiveNumber = (x: unknown): x is number =>
  typeof x === "number" && x > 0;

isArrayOf([1, 2, 3], isPositiveNumber); // true
isArrayOf([1, -2, 3], isPositiveNumber); // false
```

#### `validateArray(value: unknown, options?: ArrayValidationOptions): boolean`

Comprehensive array validation with multiple criteria.

```typescript
interface ArrayValidationOptions {
  allowEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
  elementType?: "string" | "number" | "boolean" | "object";
}

validateArray(["hello", "world"], {
  allowEmpty: false,
  minLength: 2,
  maxLength: 10,
  elementType: "string",
}); // true
```

## Usage Examples

### Basic Type Checking

```typescript
import { isArray, isStringArray, isNumberArray } from "enhanced-is-array";

function processData(data: unknown) {
  if (isStringArray(data)) {
    // TypeScript knows data is string[]
    return data.map((str) => str.toUpperCase());
  }

  if (isNumberArray(data)) {
    // TypeScript knows data is number[]
    return data.reduce((sum, num) => sum + num, 0);
  }

  throw new Error("Invalid data format");
}
```

### Form Validation

```typescript
import { validateArray } from "enhanced-is-array";

function validateFormTags(tags: unknown): boolean {
  return validateArray(tags, {
    allowEmpty: false,
    minLength: 1,
    maxLength: 5,
    elementType: "string",
  });
}

// Usage
validateFormTags(["javascript", "typescript"]); // true
validateFormTags([]); // false (empty not allowed)
validateFormTags(["js", "ts", "react", "vue", "angular", "svelte"]); // false (too many)
```

### API Response Validation

```typescript
import { isObjectArray, isStringArray } from "enhanced-is-array";

interface User {
  id: string;
  name: string;
  tags: string[];
}

function validateApiResponse(response: unknown): response is User[] {
  if (!isObjectArray(response)) {
    return false;
  }

  return response.every(
    (user) =>
      typeof user.id === "string" &&
      typeof user.name === "string" &&
      isStringArray(user.tags)
  );
}
```

### Configuration Validation

```typescript
import { isArrayOf } from "enhanced-is-array";

interface Config {
  ports: number[];
  hosts: string[];
}

const isValidPort = (value: unknown): value is number =>
  typeof value === "number" && value >= 1 && value <= 65535;

function validateConfig(config: unknown): config is Config {
  return (
    typeof config === "object" &&
    config !== null &&
    isArrayOf((config as any).ports, isValidPort) &&
    isStringArray((config as any).hosts)
  );
}
```

## Backwards Compatibility

This package is designed to be a drop-in replacement for the original `is-array` package:

```typescript
// Original is-array usage
import isArray from "enhanced-is-array";

isArray([]); // true
isArray("string"); // false
```

## TypeScript Support

Full TypeScript support with proper type guards:

```typescript
function example(value: unknown) {
  if (isStringArray(value)) {
    // TypeScript automatically infers value as string[]
    value.forEach((str) => console.log(str.toUpperCase()));
  }
}
```

## Browser Support

This package works in all modern browsers and Node.js environments:

- Node.js 14+
- All modern browsers
- ES2020+ environments

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Your Name](LICENSE)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for details about changes in each version.

---

Made with ❤️ and TypeScript
