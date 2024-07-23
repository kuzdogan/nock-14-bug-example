# Nock 14.0.0-beta-8 Bug Reproduction

Following https://github.com/nock/nock/issues/2758 (after upgrading from beta-7) encountered this bug in beta-8:

```
Request with GET/HEAD method cannot have body.
```

To reproduce:

```
npm install
npx mocha test.js
```

If you remove the import line `const nock = require("nock");` from `test.js` and run the test again, you should see no errors.
