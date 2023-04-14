#  KeyMask frontend demo

Configured with:
- Webpack (build)
- ESLint (linting)
- Redux-bundler (state and app logic)
- Money-clip (local caching)
- Internal-nav-helper (routing) // todo - replace with react-router
- Jest (testing)
- Testing-library (testing)

It also has Prettier installed, but removed usage (in lint config)

- // todo immer (easier immutable state updates)
- // todo cypress (e2e testing)
- // redux-persist-middleware? (think redux-bundler does this)
- // todo? milliseconds or moment etc
- // todo? query-string? feather-route-matcher (routing params)?


Alternatives:

- React-query/SWR
- Parcel / remix one? (build)
- Babel (transpiling)
- axios


## Notes

Open dev tools to see output of debug bundle.

To understand the patterns used in the app, please take a look at the redux-bundler documentation and the book by Henrik Joreteg. :
 - https://read.reduxbook.com/
 - https://reduxbundler.com/

vercel.json is used if/when hosting the app with Vercel - it simply tells the 'web server' to redirect all URLs to the entry point for the SPA

using basic config of webpack - with no babel - may need to rethink this, but good if it can be avoided and kept simple

### redux-bundler



### jest: testing framework [docs](https://jestjs.io/docs/getting-started)

#### installed libraries

> npm install --save-dev jest ts-jest jest-environment-jsdom eslint-plugin-jest-dom @jest/globals @types/jest

### testing-library: 'dom' testing library [docs](https://testing-library.com/docs/)

#### installed libraries

> npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event eslint-plugin-testing-library



### react router

#### installed libraries

> npm install --save-dev react-router-dom @types/react-router-dom



### Jest

https://jestjs.io/

Refer to Using Jest with TypeScript https://jestjs.io/docs/mock-function-api#typescript-usage

Tests are run by default in a browser-like environment using JSDOM (see jest config) but can be run in node (faster), by declaring environment in test file:

```
 /** @jest-environment node */
```