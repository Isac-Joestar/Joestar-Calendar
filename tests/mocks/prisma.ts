// Create a proper mock for Prisma client
export const mockPrisma = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    findFirst: jest.fn(),
  },
  $disconnect: jest.fn().mockResolvedValue(undefined),
}

// Reset all mocks before each test
export const resetMocks = () => {
  Object.values(mockPrisma.user).forEach((mock) => mock.mockReset())
}
