module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
  'plugin:react/recommended',
  'google', 
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  overrides: [{ files: 'src/*.*' }],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'quotes': ['error', 'single'],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'object-curly-spacing': [0, 'never'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'comma-dangle': [2, 'never'],
    'max-len': [0],
    'quote-props': ['error', 'as-needed'],
    'linebreak-style': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'require-jsdoc': 'off',
    indent: ['error', 2, { SwitchCase: 1 }]
  }
};
