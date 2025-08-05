// Setup file for tests - this will be imported in each test file
import { resetMocks } from './prisma'

// Reset all mocks before each test
beforeEach(() => {
  resetMocks()
})

// Global test setup
global.console = {
  ...console,
  // Suppress console.error in tests if needed
  error: jest.fn(),
  log: jest.fn(),
}
