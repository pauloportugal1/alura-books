import { useState, useEffect } from 'react';
import apiService from '../services/api';

// Hook para buscar todos os livros
export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getAllBooks();
        setBooks(data);
      } catch (err) {
        setError('Erro ao carregar livros');
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

// Hook para buscar livros mais vendidos
export const useBestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBestSellers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getBestSellers();
      setBestSellers(data);
    } catch (err) {
      setError('Erro ao carregar mais vendidos');
      console.error('Error fetching bestsellers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBestSellers();
  }, []);

  return { bestSellers, loading, error, refetch: fetchBestSellers };
};

// Hook para buscar um livro específico
export const useBook = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getBookById(id);
        setBook(data);
      } catch (err) {
        setError('Livro não encontrado');
        console.error('Error fetching book:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return { book, loading, error };
};

// Hook para busca de livros
export const useSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await apiService.searchBooks(query);
      setResults(data);
    } catch (err) {
      setError('Erro na busca');
      console.error('Error searching books:', err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
    setError(null);
  };

  return { results, loading, error, search, clearResults };
};
