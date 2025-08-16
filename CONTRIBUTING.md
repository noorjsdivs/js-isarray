# Contributing to Enhanced Is-Array

We love your input! We want to make contributing to enhanced-is-array as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/yourusername/enhanced-is-array.git
cd enhanced-is-array

# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Check types
npm run type-check

# Lint code
npm run lint

# Build the package
npm run build
```

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/yourusername/enhanced-is-array/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourusername/enhanced-is-array/issues/new); it's that easy!

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Code Style

We use ESLint and Prettier to maintain code quality and consistency:

- Run `npm run lint` to check for style issues
- Run `npm run lint:fix` to automatically fix style issues
- Follow TypeScript best practices
- Write meaningful commit messages

## Testing

- Write tests for any new functionality
- Ensure all tests pass before submitting PR
- Aim for high test coverage
- Use descriptive test names

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
