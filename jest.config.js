// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/']
}

// eslint-disable-next-line no-undef
module.exports = createJestConfig(customJestConfig)
