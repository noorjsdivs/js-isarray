# js-isarray

> A modern TypeScript-first array validation library with 12+ powerful validators and zero dependencies.

[![npm version](https://badge.fury.io/js/js-isarray.svg)](https://badge.fury.io/js/js-isarray)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Buy Me A Coffee](https://img.shields.io/badge/☕-Buy%20me%20a%20coffee-orange.svg?style=flat&logo=buy-me-a-coffee)](https://buymeacoffee.com/reactbd)

**Why js-isarray?**

- 🚀 **Drop-in replacement** for the classic `is-array` package
- 🎯 **TypeScript-first** with proper type guards
- � **12+ validators** beyond basic `isArray()`
- 📦 **Tiny footprint** - only 8.9KB, zero dependencies
- ✨ **Modern tooling** - ESM, CommonJS, and full TypeScript support

## 🚀 Quick Start

```bash
npm install js-isarray
```

```typescript
import { isArray, isStringArray, validateArray } from "js-isarray";

// Basic (backwards compatible with is-array)
isArray([1, 2, 3]); // true

// Type-specific validation
isStringArray(["hello", "world"]); // true
isStringArray(["hello", 123]); // false

// Complex validation
validateArray([1, 2, 3], {
  minLength: 2,
  maxLength: 5,
  elementType: "number",
}); // true
```

## ✨ Features

- 🔧 **12+ validators** - `isStringArray`, `isNumberArray`, `validateArray`, etc.
- 🎯 **TypeScript-first** - Built-in type guards, no `@types` needed
- 📦 **Universal** - Works in Node.js, browsers, React, Vue, Angular
- ⚡ **Lightweight** - 8.9KB gzipped, zero dependencies
- 🔄 **Compatible** - Drop-in replacement for `is-array`

## 🔄 Migration from is-array

```bash
# Replace this
npm uninstall is-array
npm install js-isarray

# No code changes needed - fully compatible!
import isArray from 'js-isarray';  // Works exactly the same
```

**Bonus**: You also get 11 additional validators and TypeScript support! 🎉

```typescript
// Your existing code works exactly the same
isArray([1, 2, 3]); // true
isArray("string"); // false

// Plus you get these new validators:
isStringArray(["hello", "world"]); // true
isNumberArray([1, 2, 3]); // true
validateArray([1, 2], { minLength: 2, elementType: "number" }); // true
```

### Migration Benefits

When you upgrade from `is-array` to `js-isarray`, you get:

## Features

- ✅ **Same API** - Zero breaking changes from original is-array
- ✅ **Better TypeScript** - Built-in type guards (no more `@types/is-array`)
- ✅ **Enhanced Features** - 12+ additional validation functions
- ✅ **Modern Build** - ESM + CommonJS + TypeScript declarations
- ✅ **Active Maintenance** - Regular updates and bug fixes
- 🔧 **Zero Dependencies** - Lightweight and fast
- 🧪 **Well Tested** - 100% test coverage

## Installation

```bash
npm install js-isarray
```

```bash
yarn add js-isarray
```

```bash
pnpm add js-isarray
```

## Quick Start

```typescript
import { isArray, isStringArray, validateArray } from "js-isarray";

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

### 🔍 Basic Array Validation

#### `isArray<T>(value: unknown): value is T[]`

**The classic array checker** - Works exactly like `Array.isArray()` but with TypeScript support.

```typescript
import { isArray } from "js-isarray";

// Basic usage
isArray([]); // true
isArray([1, 2, 3]); // true
isArray("string"); // false
isArray(null); // false

// TypeScript type narrowing
function processArray(data: unknown) {
  if (isArray(data)) {
    // TypeScript now knows 'data' is an array
    return data.length; // ✅ No TypeScript errors
  }
}
```

#### `isNonEmptyArray<T>(value: unknown): value is [T, ...T[]]`

**Ensures array has at least one element** - Perfect for validation where empty arrays aren't allowed.

```typescript
import { isNonEmptyArray } from "js-isarray";

// Validation examples
isNonEmptyArray([1, 2, 3]); // true
isNonEmptyArray(["hello"]); // true
isNonEmptyArray([]); // false

// Real-world usage
function getFirstItem(list: unknown) {
  if (isNonEmptyArray(list)) {
    return list[0]; // ✅ Safe - TypeScript knows it exists
  }
  throw new Error("List cannot be empty");
}
```

#### `isEmptyArray(value: unknown): value is []`

**Checks for empty arrays** - Useful for initialization checks.

```typescript
import { isEmptyArray } from "js-isarray";

isEmptyArray([]); // true
isEmptyArray([1]); // false
isEmptyArray(null); // false

// Usage example
function initializeIfEmpty(data: unknown) {
  if (isEmptyArray(data)) {
    return ["default", "values"];
  }
  return data;
}
```

### 🎯 Type-Specific Validation

#### `isStringArray(value: unknown): value is string[]`

**Validates arrays of strings** - Perfect for form data, user inputs, or configuration.

```typescript
import { isStringArray } from "js-isarray";

// Basic validation
isStringArray(["hello", "world"]); // true
isStringArray(["hello", 123]); // false
isStringArray([]); // true (empty arrays pass)

// Real-world example: Form validation
function validateTags(input: unknown): string[] {
  if (isStringArray(input) && input.every((tag) => tag.length > 0)) {
    return input; // ✅ TypeScript knows this is string[]
  }
  throw new Error("Tags must be an array of non-empty strings");
}
```

#### `isNumberArray(value: unknown): value is number[]`

**Validates arrays of numbers** - Excludes NaN values for data integrity.

```typescript
import { isNumberArray } from "js-isarray";

// Basic validation
isNumberArray([1, 2, 3.14]); // true
isNumberArray([1, NaN, 3]); // false (NaN is excluded!)
isNumberArray(["1", 2]); // false

// Real-world example: Coordinates validation
function processCoordinates(coords: unknown) {
  if (isNumberArray(coords) && coords.length === 2) {
    const [x, y] = coords; // ✅ TypeScript knows these are numbers
    return { x, y };
  }
  throw new Error("Coordinates must be [x, y] numbers");
}
```

#### `isBooleanArray(value: unknown): value is boolean[]`

**Validates arrays of booleans** - Great for feature flags or checkbox states.

```typescript
import { isBooleanArray } from "js-isarray";

isBooleanArray([true, false, true]); // true
isBooleanArray([true, 1, false]); // false
isBooleanArray([]); // true

// Real-world example: Feature flags
function applyFeatureFlags(flags: unknown) {
  if (isBooleanArray(flags)) {
    return flags.map((enabled, index) => ({
      [`feature_${index}`]: enabled,
    }));
  }
  return {};
}
```

#### `isObjectArray(value: unknown): value is Record<string, unknown>[]`

**Validates arrays of objects** - Excludes null and nested arrays.

```typescript
import { isObjectArray } from "js-isarray";

isObjectArray([{}, { name: "John" }]); // true
isObjectArray([{}, null]); // false
isObjectArray([{}, []]); // false

// Real-world example: API response validation
interface User {
  id: string;
  name: string;
}

function validateUsers(response: unknown): User[] {
  if (isObjectArray(response)) {
    return response.filter(
      (user): user is User =>
        typeof user.id === "string" && typeof user.name === "string"
    );
  }
  return [];
}
```

### 📏 Length-Based Validation

#### `isArrayWithLength<T>(value: unknown, length: number): value is T[]`

**Validates exact array length** - Perfect for fixed-size data structures.

```typescript
import { isArrayWithLength } from "js-isarray";

isArrayWithLength([1, 2, 3], 3); // true
isArrayWithLength([1, 2], 3); // false

// Real-world example: RGB color validation
function validateRGBColor(color: unknown): [number, number, number] {
  if (isArrayWithLength(color, 3) && isNumberArray(color)) {
    const [r, g, b] = color;
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      return color as [number, number, number];
    }
  }
  throw new Error("RGB color must be [r, g, b] with values 0-255");
}
```

#### `isArrayWithMinLength<T>(value: unknown, minLength: number): value is T[]`

**Validates minimum array length** - Ensures you have enough data to work with.

```typescript
import { isArrayWithMinLength } from "js-isarray";

isArrayWithMinLength([1, 2, 3], 2); // true
isArrayWithMinLength([1], 2); // false

// Real-world example: Pagination validation
function paginateResults(data: unknown, pageSize: number = 10) {
  if (isArrayWithMinLength(data, 1)) {
    // ✅ TypeScript knows data is a non-empty array
    const pages = [];
    for (let i = 0; i < data.length; i += pageSize) {
      pages.push(data.slice(i, i + pageSize));
    }
    return pages;
  }
  return [];
}
```

#### `isArrayWithMaxLength<T>(value: unknown, maxLength: number): value is T[]`

**Validates maximum array length** - Prevents processing oversized data.

```typescript
import { isArrayWithMaxLength } from "js-isarray";

isArrayWithMaxLength([1, 2], 3); // true
isArrayWithMaxLength([1, 2, 3, 4], 3); // false

// Real-world example: Form validation
function validateChoices(selections: unknown, maxChoices: number) {
  if (
    isArrayWithMaxLength(selections, maxChoices) &&
    isStringArray(selections)
  ) {
    return selections; // ✅ Valid selections
  }
  throw new Error(`Please select at most ${maxChoices} options`);
}
```

### 🔧 Advanced Validation

#### `isArrayOf<T>(value: unknown, typeGuard: (item: unknown) => item is T): value is T[]`

**The most powerful validator** - Create custom type guards for complex validation.

```typescript
import { isArrayOf } from "js-isarray";

// Custom type guards
const isPositiveNumber = (x: unknown): x is number =>
  typeof x === "number" && x > 0;

const isEmail = (x: unknown): x is string =>
  typeof x === "string" && /\S+@\S+\.\S+/.test(x);

// Usage examples
isArrayOf([1, 2, 3], isPositiveNumber); // true
isArrayOf([1, -2, 3], isPositiveNumber); // false

isArrayOf(["user@example.com", "admin@site.org"], isEmail); // true
isArrayOf(["not-an-email", "user@example.com"], isEmail); // false

// Real-world example: API validation
interface Product {
  id: number;
  name: string;
  price: number;
}

const isProduct = (item: unknown): item is Product => {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof (item as any).id === "number" &&
    typeof (item as any).name === "string" &&
    typeof (item as any).price === "number" &&
    (item as any).price >= 0
  );
};

function validateProducts(data: unknown): Product[] {
  if (isArrayOf(data, isProduct)) {
    return data; // ✅ TypeScript knows this is Product[]
  }
  throw new Error("Invalid product data");
}
```

#### `validateArray(value: unknown, options?: ArrayValidationOptions): boolean`

**All-in-one validator** - Combine multiple validation rules in one function.

```typescript
import { validateArray } from "js-isarray";

interface ArrayValidationOptions {
  allowEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
  elementType?: "string" | "number" | "boolean" | "object";
}

// Examples
validateArray(["hello", "world"], {
  allowEmpty: false,
  minLength: 2,
  maxLength: 10,
  elementType: "string",
}); // true

validateArray([], { allowEmpty: false }); // false
validateArray([1, 2, 3], { elementType: "number", maxLength: 5 }); // true

// Real-world example: Form field validation
function validateFormField(fieldName: string, value: unknown) {
  const validators = {
    tags: { elementType: "string" as const, minLength: 1, maxLength: 5 },
    scores: { elementType: "number" as const, allowEmpty: false },
    features: { elementType: "boolean" as const, maxLength: 10 },
  };

  const config = validators[fieldName as keyof typeof validators];
  if (!config) return false;

  return validateArray(value, config);
}
```

## 💡 Real-World Usage Examples

### 🌐 API Response Validation

```typescript
import { isObjectArray, isStringArray, isNumberArray } from "js-isarray";

interface User {
  id: number;
  name: string;
  tags: string[];
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("/api/users");
  const data = await response.json();

  // Validate the response structure
  if (!isObjectArray(data)) {
    throw new Error("Expected array of user objects");
  }

  return data.filter((user): user is User => {
    return (
      typeof user.id === "number" &&
      typeof user.name === "string" &&
      isStringArray(user.tags)
    );
  });
}
```

### 📝 Form Validation

```typescript
import { validateArray, isStringArray } from "js-isarray";

interface FormData {
  categories: string[];
  ratings: number[];
  preferences: boolean[];
}

function validateForm(formData: unknown): FormData | never {
  if (typeof formData !== "object" || formData === null) {
    throw new Error("Invalid form data");
  }

  const data = formData as any;

  // Validate categories (1-5 strings, non-empty)
  if (
    !validateArray(data.categories, {
      elementType: "string",
      minLength: 1,
      maxLength: 5,
      allowEmpty: false,
    })
  ) {
    throw new Error("Categories must be 1-5 non-empty strings");
  }

  // Validate ratings (numbers between 1-10)
  if (
    !isNumberArray(data.ratings) ||
    !data.ratings.every((r: number) => r >= 1 && r <= 10)
  ) {
    throw new Error("Ratings must be numbers between 1-10");
  }

  return data as FormData;
}
```

### ⚙️ Configuration Validation

```typescript
import { isArrayOf, isStringArray } from "js-isarray";

interface ServerConfig {
  hosts: string[];
  ports: number[];
  middleware: string[];
}

const isValidPort = (value: unknown): value is number =>
  typeof value === "number" && value >= 1 && value <= 65535;

const isValidHost = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

function validateConfig(config: unknown): ServerConfig {
  if (typeof config !== "object" || config === null) {
    throw new Error("Configuration must be an object");
  }

  const cfg = config as any;

  // Validate hosts
  if (!isArrayOf(cfg.hosts, isValidHost)) {
    throw new Error("Hosts must be array of non-empty strings");
  }

  // Validate ports
  if (!isArrayOf(cfg.ports, isValidPort)) {
    throw new Error("Ports must be array of valid port numbers (1-65535)");
  }

  // Validate middleware
  if (!isStringArray(cfg.middleware)) {
    throw new Error("Middleware must be array of strings");
  }

  return cfg as ServerConfig;
}
```

### 🎨 Data Processing

```typescript
import { isNonEmptyArray, isNumberArray, validateArray } from "js-isarray";

// Process coordinate arrays
function calculateDistance(coordinates: unknown): number {
  if (!isNumberArray(coordinates) || coordinates.length !== 2) {
    throw new Error("Coordinates must be [x, y] numbers");
  }

  const [x, y] = coordinates;
  return Math.sqrt(x * x + y * y);
}

// Batch processing with validation
function processDataBatch(batches: unknown[]): any[] {
  return batches
    .filter((batch) => isNonEmptyArray(batch))
    .map((batch) => {
      // Process only valid batches
      return batch.map((item) => processItem(item));
    })
    .flat();
}

// Chart data validation
interface ChartData {
  labels: string[];
  datasets: number[][];
}

function validateChartData(data: unknown): ChartData {
  if (typeof data !== "object" || data === null) {
    throw new Error("Chart data must be an object");
  }

  const chart = data as any;

  if (
    !validateArray(chart.labels, {
      elementType: "string",
      minLength: 1,
    })
  ) {
    throw new Error("Chart must have string labels");
  }

  if (
    !Array.isArray(chart.datasets) ||
    !chart.datasets.every((dataset: unknown) => isNumberArray(dataset))
  ) {
    throw new Error("Datasets must be arrays of numbers");
  }

  return chart as ChartData;
}
```

## Backwards Compatibility

This package is designed to be a drop-in replacement for the original `is-array` package:

```typescript
// Original is-array usage
import isArray from "js-isarray";

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

## 🌍 Browser & Environment Support

This package works everywhere JavaScript runs:

- ✅ **Node.js** 14+
- ✅ **Modern Browsers** (Chrome, Firefox, Safari, Edge)
- ✅ **React** / **Vue** / **Angular** applications
- ✅ **React Native** applications
- ✅ **Electron** applications
- ✅ **Web Workers** and **Service Workers**
- ✅ **Deno** and **Bun** runtimes

### Module Formats

- 📦 **CommonJS** - `require('js-isarray')`
- 📦 **ES Modules** - `import { isArray } from 'js-isarray'`
- 📦 **TypeScript** - Full type definitions included

## 🔧 Troubleshooting

### Common Issues

**Q: TypeScript errors about missing types**

```bash
# ✅ Solution: Types are built-in, no @types package needed
# Just make sure you're importing correctly
import { isArray } from 'js-isarray';
```

**Q: "Module not found" errors**

```bash
# ✅ Solution: Check your import syntax
# Named import (recommended)
import { isArray, isStringArray } from 'js-isarray';

# Default import (backwards compatibility)
import isArray from 'js-isarray';
```

**Q: Issues with bundlers (Webpack, Vite, etc.)**

```javascript
// ✅ The package provides proper module exports
// Your bundler should automatically pick the right format
// No special configuration needed
```

### Performance Tips

- ✅ Import only what you need: `import { isArray } from 'js-isarray'`
- ✅ Use specific validators when possible: `isStringArray()` vs `validateArray()`
- ✅ Cache type guard functions for repeated use
- ✅ The package is lightweight (~8.9KB compressed) with zero dependencies
- ⚡ Tree-shaking friendly - only bundles what you import

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/noorjsdivs/js-isarray/blob/main/CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/noorjsdivs/js-isarray.git
cd js-isarray
npm install
npm test
```

## ☕ Support the Project

If this package has been helpful to you, consider supporting its continued development and maintenance!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/reactbd)

**[☕ Buy me a coffee](https://buymeacoffee.com/reactbd)** - Your support helps keep this project alive and enables me to:

- 🔧 Maintain and improve the package
- 🐛 Fix bugs and add new features
- 📚 Create better documentation
- 🆕 Develop more useful open-source tools

Every contribution, no matter how small, is greatly appreciated! 💝

---

## 📄 License

MIT © [noorjsdivs](https://github.com/noorjsdivs)

## 📊 Package Stats

- 📦 **Size**: ~8.9KB compressed, ~13.5KB unpacked
- 🔍 **Dependencies**: Zero
- 🧪 **Tests**: 28 tests, 100% coverage
- 📝 **TypeScript**: Full type definitions included
- 🏗️ **Build**: Modern tooling (Rollup + TypeScript)
- ⚡ **Performance**: Optimized with no source maps in production

---

**Made with ❤️ and TypeScript**

_If this package helped you, please consider giving it a ⭐ on [GitHub](https://github.com/noorjsdivs/js-isarray)!_

```

```
