# Algo Practice Repository

This repository is for practicing algorithm and data structure problems using **TypeScript**, **Vitest** for testing, **ESLint** for linting, and **Prettier** for consistent formatting.

It is designed for clean iterative development: write a function, write tests, run tests, lint/format, repeat.

---

## 📁 Folder Structure

- Each folder corresponds to a topic or pattern (e.g., `Sliding Window`).
- `.ts` files contain your implementation.
- `.test.ts` files contain Vitest tests.
- `.vscode/` contains editor settings for consistent formatting.

---

## 🛠 Commands

All commands are run from the project root.

### 1. Run all tests

```bash
npm test
```

### 2. Run a single test file

```ts
// Only runs tests in this describe block. Use for iterative development.
describe.only("longestSemiRepetitiveSubstring", () => {});
```

or

```bash
npx vitest run "src/Sliding Window/longestSemiRepetitiveSubstring.test.ts"
```

### 3. Run a single test by name

```bash
npx vitest -t "should be defined"
```

### 4. Watch mode (rerun tests on file changes)

```bash
npx vitest --watch
```

### 5. Lint your code

```bash
npm run lint
```

### 6. Auto-fix lint issues

```bash
npm run lint:fix
```

### 7. Format your code with Prettier

```bash
npm run format
```
