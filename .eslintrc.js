module.exports = {
  extends: ["airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // temporary fixes:
    "@typescript-eslint/camelcase": "off",
    "object-curly-newline": "off",
    "linebreak-style": 0,
    // Typescript overrides
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
    "@typescript-eslint/quotes": ["error", "double"],

    // React overrides
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "react/jsx-one-expression-per-line": "off",

    // should be disabled on typescript
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",

    // Genertal Overrides
    "implicit-arrow-linebreak": "off",
    "consistent-return": "off",
    quotes: ["error", "double"],
    "space-unary-ops": ["error", { words: true, nonwords: true }],
    "class-methods-use-this": "off",

    // Keep this from standardjs
    "no-negated-in-lhs": "error",
    semi: ["error", "never"],

    // Custom overrides
    "no-console": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [["builtin", "external", "internal"]],
      },
    ],
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "max-lines": [
      "warn",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-depth": ["warn", 4],
  },
}

// module.exports = {
//   extends: ['@prismx', '@prismx/eslint-config/react', '@prismx/eslint-config/typescript'],
//   globals: {
//     HTMLImageElement: 'readonly',
//   },
//   settings: {
//     'import/resolver': {
//       alias: Object.entries(aliases),
//     },
//   },
// }
