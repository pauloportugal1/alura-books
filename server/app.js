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
        nome: "Design Thinking na Prática",
        autor: "Claudio Lins",
        preco: "R$ 49,90",
        src: "/images/livro.png",
        categoria: "design"
    },
    {
        id: 2,
        nome: "JavaScript Moderno ES6+",
        autor: "Gabriel Leite",
        preco: "R$ 59,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 3,
        nome: "Arquitetura de Software",
        autor: "Flávio Almeida",
        preco: "R$ 55,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 4,
        nome: "Spring Boot Essencial",
        autor: "Rodrigo Turini",
        preco: "R$ 52,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 5,
        nome: "React Router e Context",
        autor: "André Luiz",
        preco: "R$ 67,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 6,
        nome: "Express.js Completo",
        autor: "Carlos Silva",
        preco: "R$ 64,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 7,
        nome: "Django Rest Framework",
        autor: "Maria Santos",
        preco: "R$ 45,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 8,
        nome: "Vue.js Essencial",
        autor: "Pedro Costa",
        preco: "R$ 58,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 9,
        nome: "Angular Material Design",
        autor: "Ana Paula",
        preco: "R$ 62,90",
        src: "/images/livro.png",
        categoria: "programacao"
    },
    {
        id: 10,
        nome: "TypeScript Definitivo",
        autor: "João Silva",
        preco: "R$ 69,90",
        src: "/images/livro.png",
        categoria: "programacao"
    }
];

const maisVendidos = [
    {
        id: 1,
        nome: "JavaScript Assertivo",
        autor: "Gabriel Leite",
        preco: "R$ 59,90",
        src: "/images/livro.png",
        vendas: "2.854",
        categoria: "programacao"
    },
    {
        id: 2,
        nome: "Liderança em Design",
        autor: "Claudio Lins",
        preco: "R$ 49,90",
        src: "/images/livro.png",
        vendas: "2.341",
        categoria: "design"
    },
    {
        id: 3,
        nome: "Cangaceiro em JavaScript",
        autor: "Flávio Almeida",
        preco: "R$ 55,90",
        src: "/images/livro.png",
        vendas: "1.987",
        categoria: "programacao"
    },
    {
        id: 4,
        nome: "React Hooks na Prática",
        autor: "André Luiz",
        preco: "R$ 67,90",
        src: "/images/livro.png",
        vendas: "1.756",
        categoria: "programacao"
    },
    {
        id: 5,
        nome: "Aventureiros do Java",
        autor: "Rodrigo Turini",
        preco: "R$ 52,90",
        src: "/images/livro.png",
        vendas: "1.543",
        categoria: "programacao"
    },
    {
        id: 6,
        nome: "Node.js Avançado",
        autor: "Carlos Silva",
        preco: "R$ 64,90",
        src: "/images/livro.png",
        vendas: "1.332",
        categoria: "programacao"
    },
    {
        id: 7,
        nome: "Python para Iniciantes",
        autor: "Maria Santos",
        preco: "R$ 45,90",
        src: "/images/livro.png",
        vendas: "1.198",
        categoria: "programacao"
    },
    {
        id: 8,
        nome: "Vue.js Moderno",
        autor: "João Pedro",
        preco: "R$ 58,90",
        src: "/images/livro.png",
        vendas: "1.087",
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