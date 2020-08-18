/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
