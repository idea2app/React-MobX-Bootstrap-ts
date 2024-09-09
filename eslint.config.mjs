import globals from 'globals';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import tseslint from 'typescript-eslint';

import react from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    // import sort
    {
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': 'error'
        }
    },
    // typescript
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin
        }
    },
    // js
    {
        name: 'eslint/js',
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
        plugins: { js },
        rules: {
            'consistent-return': 'error'
        }
    },
    // react
    {
        name: 'react-jsx',
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: { react },
        rules: {
            'react/jsx-no-target-blank': 'warn',
            'react/jsx-sort-props': [
                'error',
                {
                    reservedFirst: true,
                    shorthandLast: true,
                    callbacksLast: true,
                    noSortAlphabetically: true
                }
            ]
        }
    },
    // JSON files
    {
        name: 'eslint/json',
        files: ['**/*.json', '.c8rc'],
        ignores: ['**/package-lock.json'],
        language: 'json/json',
        plugins: { json }
    },
    // markdown
    {
        files: ['**/*.md'],
        language: 'markdown/gfm',
        plugins: { markdown }
    },
    eslintConfigPrettier
];
