// API Service - Centralizador de chamadas para o backend
const API_BASE_URL = 'http://localhost:8000/api';

class ApiService {
  // Método genérico para fazer requisições
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }

  // Verificar se o servidor está funcionando
  async healthCheck() {
    return this.request('/health');
  }

  // Buscar todos os livros
  async getAllBooks() {
    return this.request('/books');
  }

  // Buscar livros mais vendidos
  async getBestSellers() {
    return this.request('/books/bestsellers');
  }

  // Buscar livro por ID
  async getBookById(id) {
    return this.request(`/books/${id}`);
  }

  // Buscar livros por termo
  async searchBooks(query) {
    if (!query.trim()) {
      return [];
    }
    return this.request(`/search?q=${encodeURIComponent(query)}`);
  }
}

// Exportar instância única (Singleton)
const apiService = new ApiService();
export default apiService;
