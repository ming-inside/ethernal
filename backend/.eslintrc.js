module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'no-bitwise': 0,
    'camelcase': 1,
    'no-script-url': 1,
    'no-param-reassign': 0,
    'no-console': 0,
    'prefer-template': 0,
    'no-else-return': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'max-classes-per-file': 0,
  },
  extends: ['airbnb-base', 'prettier'],
  settings: {},
};
