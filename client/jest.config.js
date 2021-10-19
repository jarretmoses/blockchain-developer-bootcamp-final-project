
module.exports = {
  // The root of the source code, `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src/"],

  // The test environment that will be used for testing, jsdom for browser environment
  testEnvironment: "jsdom",

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": require.resolve('./config/jest/file-transform.js'),
    "^.+\\.css$": require.resolve('./config/jest/css-transform.js')
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Ignore cypress e2e test files
  testPathIgnorePatterns: [
    "<rootDir>/cypress/",
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],


  // Code coverage config
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "(.*).d.ts$"],

  // Important: order matters, specific rules should be defined first
  // See : https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1", // To resolve typescript path aliases
  },
};
