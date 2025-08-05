// Import test setup
import './tests/mocks/setup'

// Mock @prisma/client globally
jest.mock('@prisma/client', () => ({
  PrismaClient: jest
    .fn()
    .mockImplementation(() => require('./tests/mocks/prisma').mockPrisma),
}))

// Mock environment variables
process.env.JWT_SECRET = 'test-secret-key'
process.env.JWT_EXPIRES_IN = '1h'
