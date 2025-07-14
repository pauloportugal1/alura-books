const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Mock data
const books = [
    {
        id: 1,
        nome: "JavaScript: The Good Parts",
        autor: "Douglas Crockford",
        preco: "R$ 89,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 2,
        nome: "Clean Code",
        autor: "Robert C. Martin",
        preco: "R$ 79,90",
        src: "/images/livro2.png",
        categoria: "programacao"
    }
];

const maisVendidos = [
    {
        id: 4,
        nome: "Design Patterns",
        autor: "Gang of Four",
        preco: "R$ 99,90",
        src: "/images/livro2.png",
        vendas: "2.345 vendidos",
        categoria: "programacao"
    }
];

// Rotas da API
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Paul Books Server is running!' });
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/bestsellers', (req, res) => {
    res.json(maisVendidos);
});

app.get('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const allBooks = [...books, ...maisVendidos];
    const book = allBooks.find(b => b.id === parseInt(id));
    
    if (!book) {
        return res.status(404).json({ error: 'Livro não encontrado' });
    }
    
    res.json(book);
});

app.get('/api/search', (req, res) => {
    const { q } = req.query;
    
    if (!q) {
        return res.status(400).json({ error: 'Parâmetro de busca é obrigatório' });
    }
    
    const allBooks = [...books, ...maisVendidos];
    const results = allBooks.filter(book => 
        book.nome.toLowerCase().includes(q.toLowerCase()) ||
        book.autor.toLowerCase().includes(q.toLowerCase())
    );
    
    res.json(results);
});

app.listen(port, () => {
    console.log(`🚀 Paul Books Server rodando na porta ${port}`);
    console.log(`📚 API disponível em http://localhost:${port}/api`);
});