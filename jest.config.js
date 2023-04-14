/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    // testEnvironment: 'node', // to use node environment in tests add /** @jest-environment node */ at top of file
    testEnvironment: 'jsdom', // by default, jsdom is used in the test environment
    verbose: true,
};