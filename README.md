# composable-reviews

Review a set of inter-related pull requests as a **graph of optional
capabilities** rather than a wall of pull requests or a linear stack.

A reviewer picks capabilities; the tool shows what that selection drags in,
whether the combination is proven to compose, and which pull requests to merge.

Status: early development. Nothing here is usable yet.

## Development

Requires Node 22.

```sh
npm ci
npx playwright install chromium
npm run check
```

`npm run check` runs the type checker, the linter and every test.
