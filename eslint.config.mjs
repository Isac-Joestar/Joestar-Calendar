import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser, 
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, 
        },
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', 
    },
  },

  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    plugins: { '@typescript-eslint': tseslint },
  },

  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,json,md}'],
    extends: [eslintConfigPrettier],
  },
]);
