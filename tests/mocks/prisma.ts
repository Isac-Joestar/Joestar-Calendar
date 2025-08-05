export const mockPrisma = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    findFirst: jest.fn(),
  },
  $disconnect: jest.fn().mockResolvedValue(undefined),
}

export const resetMocks = () => {
  Object.values(mockPrisma.user).forEach((mock) => mock.mockReset())
}
