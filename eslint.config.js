import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import LinguiPlugin from 'eslint-plugin-lingui'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unicornPlugin from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  prettierPlugin,
  unicornPlugin.configs.recommended,
  LinguiPlugin.configs['flat/recommended'],
  globalIgnores([
    'dist',
    'node_modules',
    'src/routeTree.gen.ts',
    'src/locales',
  ]),

  {
    // Unicorn rules that conflict with React conventions or this stack
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [
            String.raw`^\[.+\]`, // [id].tsx, [slug].tsx
            String.raw`^\+`, // +page.tsx, +layout.tsx
          ],
        },
      ],
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },

  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'separate-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'warn',

      'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      'import/no-anonymous-default-export': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.{ts,tsx}',
            '**/*.spec.{ts,tsx}',
            '**/vitest.config.*',
            '**/vite.config.*',
          ],
          optionalDependencies: false,
          packageDir: './',
        },
      ],
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },

  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-enums': ['error'],
      'perfectionist/sort-exports': ['error', { newlinesBetween: 0 }],
      'perfectionist/sort-imports': [
        'error',
        { internalPattern: ['^@/.+'], newlinesBetween: 0 },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^get.+',
              groupName: 'getters',
            },
            {
              elementNamePattern: '^set.+',
              groupName: 'setters',
            },
            {
              elementNamePattern: '^on.+',
              groupName: 'callbacks',
            },
          ],
          groups: [
            'member',
            'optional-member',
            'method',
            'optional-method',
            'getters',
            'setters',
            'callbacks',
          ],
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^get.+',
              groupName: 'getters',
            },
            {
              elementNamePattern: '^set.+',
              groupName: 'setters',
            },
            {
              elementNamePattern: '^on.+',
              groupName: 'callbacks',
            },
          ],
          groups: [
            'unknown',
            'shorthand-prop',
            'multiline-prop',
            'getters',
            'setters',
            'callbacks',
          ],
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-exports': ['error'],
      'perfectionist/sort-named-imports': ['error'],
      'perfectionist/sort-object-types': [
        'error',
        { groups: ['member', 'method'], type: 'natural' },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^xs$',
              groupName: 'xs',
            },
            {
              elementNamePattern: '^sm$',
              groupName: 'sm',
            },
            {
              elementNamePattern: '^md$',
              groupName: 'md',
            },
            {
              elementNamePattern: '^lg$',
              groupName: 'lg',
            },
            {
              elementNamePattern: '^xl$',
              groupName: 'xl',
            },
          ],
          groups: ['xs', 'sm', 'md', 'lg', 'xl'],
          useConfigurationIf: {
            allNamesMatchPattern: '^xs|sm|md|lg|xl$',
          },
        },
        {
          customGroups: [
            {
              elementNamePattern: '^get.+',
              groupName: 'getters',
            },
            {
              elementNamePattern: '^set.+',
              groupName: 'setters',
            },
            {
              elementNamePattern: '^on.+',
              groupName: 'callbacks',
            },
          ],
          groups: ['member', 'method', 'getters', 'setters', 'callbacks'],
          type: 'natural',
        },
      ],
      'perfectionist/sort-union-types': ['error'],
      'perfectionist/sort-variable-declarations': ['error'],
    },
  },
])
