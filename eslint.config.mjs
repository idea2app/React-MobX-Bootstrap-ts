import typescriptPlugin from 'typescript-eslint';
import globals from 'globals';

import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    // import sort
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': 'error'
        }
    },
    // TypeScript
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': typescriptPlugin.plugin
        }
    },
    // JavaScript
    {
        name: 'eslint/js',
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
        plugins: { js },
        rules: {
            'consistent-return': 'error'
        }
    },
    // React
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
    // MarkDown
    {
        files: ['**/*.md'],
        language: 'markdown/gfm',
        plugins: { markdown }
    },
    eslintConfigPrettier
];
