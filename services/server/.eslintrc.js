module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', "import"],
    rules: {
      '@typescript-eslint/no-var-requires': 0,
    },
    overrides: [],
  };
  
