# Publishing Guide

This guide will help you publish the enhanced-is-array package to npm.

## Prerequisites

1. Create an npm account at [npmjs.com](https://www.npmjs.com/signup)
2. Install npm CLI and login:
   ```bash
   npm login
   ```

## Before Publishing

1. **Update package.json**: Make sure to update the author, repository URLs, and other metadata to match your information.

2. **Test the package**:

   ```bash
   npm test
   npm run build
   ```

3. **Choose a unique package name**: The name `enhanced-is-array` might be taken. Consider alternatives like:

   - `@yourusername/enhanced-is-array`
   - `modern-is-array`
   - `typescript-is-array`
   - `super-is-array`

4. **Update package name** in package.json if needed:
   ```json
   {
     "name": "@yourusername/enhanced-is-array",
     "version": "1.0.0"
   }
   ```

## Publishing Steps

1. **Dry run** to see what will be published:

   ```bash
   npm publish --dry-run
   ```

2. **Publish to npm**:

   ```bash
   npm publish
   ```

   For scoped packages (starting with @):

   ```bash
   npm publish --access public
   ```

3. **Verify the package** was published:
   ```bash
   npm view enhanced-is-array
   ```

## Post-Publishing

1. **Create a GitHub repository** and push your code
2. **Add badges** to README.md for npm version, downloads, etc.
3. **Set up automated testing** with GitHub Actions
4. **Consider semantic versioning** for future releases

## Example GitHub Actions for Automated Publishing

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          registry-url: "https://registry.npmjs.org"
      - run: npm ci
      - run: npm test
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Tips

- Always test your package locally before publishing
- Use semantic versioning (major.minor.patch)
- Keep your README.md updated
- Consider using `npm version` to bump versions automatically
- Use `npm deprecate` to deprecate old versions if needed
