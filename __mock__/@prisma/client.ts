export const mockFindUnique = jest.fn()

export class PrismaClient {
  user = {
    findUnique: mockFindUnique,
    // Você pode adicionar outros métodos mockados que precisar
  }

  // Se usar outros modelos, adicione-os aqui da mesma forma
}
