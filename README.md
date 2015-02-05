gift-giving-analysis-es6
===

Playgroud for emerging client-side development with ES6 modules.

Setup
---

Requires `npm` and `jspm`.

```
$ npm install
$ jspm install
$ npm run build
```

To run under 6to5:

```
$ jspm -dl-loader --6to5
```

### Tests

Uses traceur to convert ES6 steps to CommonJS to be run under CucumberJS.

```
$ npm run test
```