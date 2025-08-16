# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-08-16

### Added

- Initial release of enhanced-is-array
- Basic array validation with `isArray()` function (backwards compatible with is-array)
- Enhanced array validation functions:
  - `isNonEmptyArray()` - validates non-empty arrays
  - `isEmptyArray()` - validates empty arrays
  - `isArrayOf()` - generic type-safe array validation
  - `isStringArray()` - validates string arrays
  - `isNumberArray()` - validates number arrays (excludes NaN)
  - `isBooleanArray()` - validates boolean arrays
  - `isObjectArray()` - validates object arrays
  - `isArrayWithLength()` - validates arrays with specific length
  - `isArrayWithMinLength()` - validates arrays with minimum length
  - `isArrayWithMaxLength()` - validates arrays with maximum length
  - `validateArray()` - comprehensive validation with multiple criteria
- Full TypeScript support with proper type guards
- Comprehensive test suite with 100% coverage
- Modern build system with Rollup
- Support for CommonJS, ESM, and TypeScript declarations
- ESLint and Prettier configuration
- Jest testing setup
- MIT License
