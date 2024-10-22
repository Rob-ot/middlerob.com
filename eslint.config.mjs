import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends('eslint:recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2018,
      // sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          modules: true,
          experimentalObjectRestSpread: true,
        },
      },
    },

    rules: {
      'linebreak-style': ['error', 'unix'],
      'prettier/prettier': 1,
      strict: 0,
      semi: [2, 'never'],
      curly: [2, 'multi-line'],

      indent: [
        1,
        2,
        {
          SwitchCase: 1,
        },
      ],

      quotes: [2, 'single', 'avoid-escape'],
      eqeqeq: [2, 'allow-null'],
      'no-underscore-dangle': 0,
      'eol-last': 0,
      'new-cap': 2,
      'no-console': 0,
      'no-trailing-spaces': 2,
      'block-scoped-var': 2,
      'dot-notation': 2,
      'no-array-constructor': 2,
      'no-use-before-define': 0,
      'no-dupe-keys': 2,
      'no-debugger': 1,
      'no-unused-vars': 0,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-implied-eval': 2,
      'no-label-var': 2,
      'no-lone-blocks': 2,
      'no-multi-spaces': 2,
      'no-multi-str': 2,
      'no-new': 2,
      'no-script-url': 2,
      'no-sequences': 2,
      'no-spaced-func': 2,
      'no-with': 2,
      'space-infix-ops': 2,
      'space-unary-ops': 2,
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      globals: {
        JSX: 'readonly',
      },
    },

    rules: {
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-extra-semi': 0,
      '@typescript-eslint/no-explicit-any': 1,
    },
  },
]
