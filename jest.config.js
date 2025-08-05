const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

const { createDefaultPreset } = require('ts-jest')
const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testMatch: ['**/tests/**/*.test.ts', '**/?(*.)+(test).ts'],

  // Fix the module mapping configuration
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    // Add specific mapping for __mocks__
    '^__mocks__/(.*)$': '<rootDir>/__mock__/$1',
  },
  // Opcional: mostra stack traces mais limpos
  clearMocks: true,
  verbose: true,
  // Increase timeout for tests
  testTimeout: 30000,
}
