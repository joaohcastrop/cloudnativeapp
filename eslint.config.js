// eslint.config.js
import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier/eslint-plugin-prettier.js';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Equivalente a "env": { "node": true }
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'prettier/prettier': ['error', { 'singleQuote': true }],
    },
  },
];