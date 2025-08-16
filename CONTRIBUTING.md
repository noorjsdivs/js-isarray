# Contributing to js-isarray

Thank you for your interest in contributing to js-isarray! 🎉

This project aims to provide a modern, TypeScript-first array validation library that's both powerful and easy to use. Every contribution helps make it better for the entire JavaScript/TypeScript community.

## 🚀 Ways to Contribute

- 🐛 **Report bugs** - Found something broken? Let us know!
- ✨ **Suggest features** - Have an idea for a new validation function?
- 📖 **Improve documentation** - Help make the docs clearer
- 🧪 **Write tests** - Help us maintain 100% coverage
- 💻 **Submit code** - Fix bugs or implement new features

## 🛠️ Development Setup

### Prerequisites

- Node.js 14+
- npm or yarn
- Git

### Getting Started

```bash
# 1. Fork and clone the repository
git clone https://github.com/noorjsdivs/js-isarray.git
cd js-isarray

# 2. Install dependencies
npm install

# 3. Run tests to make sure everything works
npm test

# 4. Start developing!
npm run dev  # Builds in watch mode
```

## 📁 Project Structure

```
js-isarray/
├── src/
│   ├── index.ts              # Main source code
│   └── __tests__/
│       └── index.test.ts     # Test suite
├── dist/                     # Built files (generated)
├── package.json
├── tsconfig.json             # TypeScript config
├── rollup.config.js          # Build config
├── jest.config.js            # Test config
└── README.md
```

## 🧪 Testing

We maintain **100% test coverage**. When adding new features:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Check coverage
npm run test:coverage

# Run linting
npm run lint
```

### Writing Tests

- Every new function needs tests
- Test both valid and invalid inputs
- Include edge cases
- Use descriptive test names

Example:

```typescript
describe("newValidationFunction", () => {
  it("should return true for valid input", () => {
    expect(newValidationFunction(validInput)).toBe(true);
  });

  it("should return false for invalid input", () => {
    expect(newValidationFunction(invalidInput)).toBe(false);
  });
});
```

## 💻 Code Guidelines

### TypeScript Standards

- Use **strict TypeScript** settings
- Provide proper type guards: `value is Type[]`
- Include JSDoc comments for all public functions
- Export functions using named exports

### Function Structure

```typescript
/**
 * Brief description of what the function does
 * @param value - The value to validate
 * @param additionalParam - Description if needed
 * @returns true if valid, false otherwise
 */
export function myValidator<T = unknown>(
  value: unknown,
  additionalParam?: SomeType
): value is T[] {
  // Implementation
  return Array.isArray(value) && /* additional checks */;
}
```

### Naming Conventions

- Use clear, descriptive names
- Start with `is` for boolean validators: `isStringArray`
- Use `validate` for complex validators: `validateArray`
- Use camelCase for function names

## 🔄 Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/my-new-validator
   ```

2. **Make your changes**

   - Write code following the guidelines
   - Add tests for new functionality
   - Update documentation if needed

3. **Test everything**

   ```bash
   npm test
   npm run lint
   npm run build
   ```

4. **Commit with clear messages**

   ```bash
   git commit -m "feat: add isEmailArray validator"
   # or
   git commit -m "fix: handle null values in isObjectArray"
   # or
   git commit -m "docs: improve API documentation"
   ```

5. **Push and create PR**

   ```bash
   git push origin feature/my-new-validator
   ```

6. **Fill out the PR template** with:
   - What changes you made
   - Why you made them
   - How to test them

## 🐛 Reporting Issues

When reporting bugs, please include:

- **Clear description** of the problem
- **Minimal reproduction** case
- **Expected vs actual** behavior
- **Environment info** (Node.js version, TypeScript version, etc.)

### Issue Template

```markdown
## Bug Description

Brief description of the issue

## Reproduction Steps

1. Step one
2. Step two
3. See error

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- js-isarray version: 1.0.0
- Node.js version: 18.x
- TypeScript version: 5.x
```

## 💡 Feature Requests

We're always open to new ideas! When suggesting features:

- **Explain the use case** - Why would this be useful?
- **Provide examples** - Show how it would work
- **Consider compatibility** - Will it work with existing code?

## 📖 Documentation

Help improve our documentation:

- Fix typos or unclear explanations
- Add more examples
- Improve API documentation
- Update the README

## 🤝 Community Guidelines

- **Be respectful** and inclusive
- **Help newcomers** learn and contribute
- **Focus on constructive** feedback
- **Assume good intentions**

## 🎯 Priorities

Current priorities:

- 🧪 Maintaining 100% test coverage
- 📖 Improving documentation with more examples
- 🔧 Performance optimizations
- ✨ Adding commonly requested validators

## 🙏 Recognition

All contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Special thanks in the README

## ❓ Questions?

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Use GitHub Issues for bugs
- 📧 **Direct contact**: For sensitive matters

## ☕ Support

If you find this project helpful, consider [buying me a coffee](https://buymeacoffee.com/reactbd)! ☕

---

**Happy coding!** 🚀

Thank you for helping make js-isarray better for everyone! 💝
