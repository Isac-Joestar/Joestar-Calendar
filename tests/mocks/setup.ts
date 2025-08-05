import { resetMocks } from './prisma'

beforeEach(() => {
  resetMocks()
})

global.console = {
  ...console,
  error: jest.fn(),
  log: jest.fn(),
}
