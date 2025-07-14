# Paul Books - Loja de Livros Online

Uma loja de livros online moderna desenvolvida com React no frontend e Node.js no backend.

## 🚀 Funcionalidades

### Frontend (React)
- **Arquitetura baseada em Props**: Componentes reutilizáveis e customizáveis
- **Seções dinâmicas**: Mais Vendidos, Últimos Lançamentos, Busca
- **Sistema de busca**: Busca inteligente com sugestões em tempo real
- **Páginas individuais**: Cada livro possui sua própria página detalhada
- **Sistema de recomendações**: Recomendações baseadas em similaridade
- **Layout responsivo**: Design adaptável para todas as telas
- **Header estilo Amazon**: Navegação intuitiva e moderna

### Backend (Node.js + Express)
- **API RESTful**: Endpoints organizados para todas as funcionalidades
- **CORS configurado**: Permitindo comunicação com o frontend
- **Busca avançada**: Filtros por nome, autor e categoria
- **Sistema de recomendações**: Algoritmo baseado em categorias
- **Tratamento de erros**: Middleware para tratamento consistente

## 📁 Estrutura do Projeto

```
paul-books/
├── public/                 # Arquivos estáticos do React
├── src/                    # Código fonte do frontend
│   ├── components/         # Componentes React
│   │   ├── header/         # Header com busca
│   │   ├── footer/         # Footer estilo Amazon
│   │   ├── maisVendidos/   # Seção de mais vendidos
│   │   ├── ultimosLancamentos/  # Carousel de lançamentos
│   │   ├── paginaLivro/    # Páginas individuais
│   │   └── ...
│   ├── images/             # Imagens dos livros
│   └── App.js              # Componente principal
├── server/                 # Backend Node.js
│   ├── app.js              # Servidor Express
│   ├── package.json        # Dependências do servidor
│   └── node_modules/       # Módulos do Node.js
├── package.json            # Dependências do frontend
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/pauloportugal1/paul-books.git
cd paul-books
```

### 2. Instale as dependências do Frontend
```bash
npm install
```

### 3. Instale as dependências do Backend
```bash
cd server
npm install
cd ..
```

### 4. Execute o projeto

#### Opção 1: Executar separadamente
```bash
# Terminal 1 - Backend (porta 8000)
cd server
npm start

# Terminal 2 - Frontend (porta 3000)
npm start
```

## 🌐 Endpoints da API

### Livros
- `GET /api/books` - Lista todos os livros
- `GET /api/books/:id` - Busca livro por ID
- `GET /api/books/bestsellers` - Lista livros mais vendidos
- `GET /api/books/:id/recommendations` - Recomendações para um livro

### Busca
- `GET /api/search?q=termo` - Busca livros por termo

### Utilidade
- `GET /api/health` - Status do servidor

## 🎨 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Styled-components** - CSS-in-JS para estilização
- **React Hooks** - useState, useEffect para gerenciamento de estado

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web para Node.js
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 📝 Scripts Disponíveis

### Frontend

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
