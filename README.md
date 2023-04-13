#  KeyMask frontend demo

Configured with:
- Webpack (build)
- ESLint (linting)
- Redux-bundler (state and app logic)
- Money-clip (local caching)
- Internal-nav-helper (routing)
- Jest (testing)

It also has Prettier installed, but removed usage (in lint config)

- // todo immer or sinks (updating immutable state objects and arrays) 
- // todo testing-library
- // todo cypress
- // redux-persist-middleware?
- // todo? milliseconds or moment etc
- // todo? query-string?
- // todo? feather-route-matcher (routing)


Alternatives:

- React-query/SWR
- React Router
- Parcel
- Babel


## Notes

Open dev tools to see output of debug bundle.

To understand the patterns used in the app, please take a look at the redux-bundler documentation and the book by Henrik Joreteg. :
 - https://read.reduxbook.com/
 - https://reduxbundler.com/

vercel.json is used if/when hosting the app with Vercel - it simply tells the 'web server' to redirect all URLs to the entry point for the SPA

using basic config of webpack - with no babel - may need to rethink this, but good if it can be avoided and kept simple


## Jest

https://jestjs.io/

Refer to Using Jest with TypeScript https://jestjs.io/docs/mock-function-api#typescript-usage

Tests are run by default in a browser-like environment using JSDOM (see jest config) but can be run in node (faster), by declaring environment in test file:

```
 /** @jest-environment node */
```