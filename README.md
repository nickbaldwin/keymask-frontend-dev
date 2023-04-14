#  KeyMask frontend demo

Configured with:
- Webpack (build)
- ESLint (linting)
- Redux-bundler (state and app logic)
- Money-clip (local caching)
- Jest (testing)
- Testing-library (testing)

It also has Prettier installed, but removed usage (in lint config)

- // todo immer (easier immutable state updates)
- // todo cypress (e2e testing)
- // redux-persist-middleware? (think redux-bundler does this)
- // todo? milliseconds or moment etc
- // todo? query-string? feather-route-matcher (routing params)?

Alternatives:

- Remix / nextjs
- React-query/SWR
- Parcel / remix build tool
- Babel (transpiling)
- axios


## Libraries and tools used

### Redux-bundler: state-management, selectors, logic and more 
[docs](https://reduxbundler.com/)

To understand the patterns used in the app, please take a look at the redux-bundler documentation and the book by Henrik Joreteg. :
- https://read.reduxbook.com/
- https://reduxbundler.com/


Open dev tools to see output of debug bundle.

#### installed libraries

> npm install --save-dev redux-bundler 

### Money clip

Small, simple caching tool

#### installed libraries

> money-clip

### jest: testing framework 
[docs](https://jestjs.io/docs/getting-started)

Refer to Using Jest with TypeScript https://jestjs.io/docs/mock-function-api#typescript-usage

Tests are run by default in a browser-like environment using JSDOM (see jest config) but can be run in node (faster), by declaring environment in test file:

```
 /** @jest-environment node */
```


#### installed libraries

> npm install --save-dev jest ts-jest jest-environment-jsdom eslint-plugin-jest-dom @jest/globals @types/jest

### testing-library: 'dom' testing library 
[docs](https://testing-library.com/docs/)

#### installed libraries

> npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event eslint-plugin-testing-library



### React router

#### installed libraries

> npm install --save-dev react-router-dom @types/react-router-dom


### Webpack

using basic config of webpack - with no babel - may need to rethink this, but good if it can be avoided and kept simple

### Vercel

vercel.json is used if/when hosting the app with Vercel - it simply tells the 'web server' to redirect all URLs to the entry point for the SPA

### ESLint

