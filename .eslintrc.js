const path = require("path");

module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "react-hooks", "jest", "jest-dom"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".tsx", ".jsx", "spec.js"] },
    ],
    "react/function-component-definition": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.tsx",
          "**/*.@(spec|test).@(js|ts)?(x)",
          "**/testUtils.tsx",
          "**/jest.setup.ts",
          "**/.storybook/*.@(js|ts)?(x)",
          "**/webpack.*.js",
          "**/script/*.js",
          "**/mocks/**/*.@(js|ts)?(x)",
          "**/cypress.config.js",
        ],
      },
    ],
  },
  overrides: [
    // {
    //   files: ["**/*.spec.ts?(x)"],
    //   rules: {
    //     "@typescript-eslint/unbound-method": "off",
    //     "jest/unbound-method": "error",
    //   },
    // },
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          { variables: false },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
      },
      parserOptions: {
        project: ["./tsconfig.json", "./package/**/tsconfig.json"],
      },
    },
    {
      files: [
        "packages/hooks/src/**/*.ts?(x)",
        "packages/hooks/src/**/*.js?(x)",
      ],
      settings: {
        "import/resolver": {
          typescript: {
            project: path.resolve(`${__dirname}/packages/hooks/tsconfig.json`),
          },
        },
      },
    },
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", "spec.js"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
  },
};
