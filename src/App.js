import Header from './components/header';  
import MaisVendidos from './components/maisVendidos';
import UltimosLancamentos from './components/ultimosLancamentos';
import ResultadosPesquisa from './components/resultadosPesquisa';
import PaginaLivro from './components/paginaLivro';
import Footer from './components/footer';
import { books } from './components/ultimosLancamentos/dadosUltimosLancamentos';
import { maisVendidos } from './components/maisVendidos/dadosMaisVendidos';
import { books as searchBooks } from './components/pesquisa/searchData';
import styled from 'styled-components';
import { useState } from 'react';
import './responsive.css';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background: linear-gradient(135deg, #FD8325 0%, #FF6B35 25%, #F7931E 50%, #E67E22 75%, #D35400 100%);
  z-index: 0;
  box-sizing: border-box;
`

const ContentContainer = styled.div`
  padding-top: 60px;
  box-sizing: border-box;
  gap: 60px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    gap: 40px;
    padding-top: 50px;
  }
`;

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'search', 'book'
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Combina todos os livros para pesquisa
  const allBooks = [...searchBooks, ...books, ...maisVendidos];

  const handleSearch = (term) => {
    if (term.trim()) {
      const results = allBooks.filter(book => 
        book.nome.toLowerCase().includes(term.toLowerCase()) ||
        (book.autor && book.autor.toLowerCase().includes(term.toLowerCase()))
      );
      setSearchResults(results);
      setSearchTerm(term);
      setCurrentView('search');
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setCurrentView('book');
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setSearchTerm('');
    setSearchResults([]);
    setSelectedBook(null);
  };

  const handleAddToCart = (book) => {
    // Implementar lógica do carrinho
    console.log('Adicionado ao carrinho:', book);
  };

  const handleBuyNow = (book) => {
    // Implementar lógica de compra
    console.log('Comprar agora:', book);
  };

  return (
    <AppContainer>
      <Header
        backgroundColor="#ffffff"
        padding="15px 30px"
        onSearch={handleSearch}
        onLogoClick={handleGoHome}
        livrosData={allBooks}
        logoProps={{
          fontSize: "24px",
          textColor: "#282c34",
          nomeEmpresa: "PAUL",
          tipoNegocio: "BOOKS"
        }}
        menubarProps={{
          opcoes: ['todas as categorias', 'minha estante', 'favoritos', 'ofertas'],
          menuGap: "25px",
          iconGap: "20px",
          iconSize: "24px",
          hoverColor: "#FF6B35"
        }}
        searchProps={{
          placeholder: "Pesquisar livros, autores...",
          backgroundColor: "#ffffff",
          borderColor: "#ddd",
          focusBorderColor: "#FF6B35"
        }}
      />
      
      {currentView === 'search' && (
        <div>
          <div style={{ 
            padding: '20px 30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <button 
              onClick={handleGoHome}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              ← Voltar à página inicial
            </button>
          </div>
          <ResultadosPesquisa
            termoPesquisa={searchTerm}
            resultados={searchResults}
            onBookClick={handleBookClick}
            estilosTitulo={{
              titleSize: "28px",
              titleColor: "#ffffff"
            }}
            configuracaoGrid={{
              minCardWidth: "220px",
              gap: "24px",
              maxWidth: "1400px"
            }}
            estilosCard={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "18px"
            }}
            estilosImagem={{
              width: "140px",
              height: "180px"
            }}
            estilosTexto={{
              titleSize: "16px",
              titleColor: "#ffffff",
              authorSize: "14px",
              authorColor: "#ffffff",
              priceSize: "16px",
              priceColor: "#FFD700"
            }}
          />
        </div>
      )}

      {currentView === 'book' && selectedBook && (
        <div>
          <div style={{ 
            marginBottom: '20px',
            padding: '20px 30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <button 
              onClick={handleGoHome}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                marginRight: '10px'
              }}
            >
              ← Voltar à página inicial
            </button>
            <button 
              onClick={() => setCurrentView('search')}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              ← Voltar aos resultados
            </button>
          </div>
          <PaginaLivro
            livro={selectedBook}
            onVoltar={handleGoHome}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            allBooks={allBooks}
            onBookClick={handleBookClick}
          />
        </div>
      )}

      {currentView === 'home' && (
        <ContentContainer>
          <MaisVendidos
            titulo="Mais Vendidos"
            mostrarBadge={true}
            textoBadge="Best Seller"
            corBadge="#E74C3C"
            tamanhoTitulo="34px"
            mostrarRanking={true}
            onBookClick={handleBookClick}
            configuracaoGrid={{
              minCardWidth: "240px",
              gap: "28px",
              maxWidth: "1300px"
            }}
            estilosCard={{
              background: "rgba(255, 255, 255, 0.15)",
              borderRadius: "14px",
              padding: "20px",
              showTopBorder: true
            }}
            estilosImagem={{
              width: "150px",
              height: "190px"
            }}
            estilosTexto={{
              titleSize: "18px",
              titleColor: "#ffffff",
              authorSize: "14px",
              authorColor: "#ffffff",
              priceSize: "16px",
              priceColor: "#FFD700",
              salesSize: "12px",
              salesColor: "#FFA500"
            }}
            estilosRanking={{
              rankingColor: "#FFD700",
              rankingTextColor: "#000"
            }}
          />
          
          <UltimosLancamentos
            titulo="Últimos Lançamentos"
            mostrarBadge={true}
            textoBadge="Novo"
            corBadge="#FF6B35"
            onBookClick={handleBookClick}
            configuracaoCarousel={{
              cardWidth: "180px",
              gap: "16px",
              maxWidth: "1200px",
              visibleCards: 5,
              autoPlay: true,
              autoPlayInterval: 4000
            }}
            estilosCard={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "14px"
            }}
            estilosImagem={{
              width: "100%",
              height: "140px"
            }}
            estilosTexto={{
              titleSize: "14px",
              titleColor: "#ffffff",
              authorSize: "11px",
              authorColor: "#ffffff",
              priceSize: "13px",
              priceColor: "#FFD700"
            }}
          />
        </ContentContainer>
      )}
      
      <Footer
        companyName="PAUL BOOKS"
        showBackToTop={true}
        footerLinks={{
          "Conheça-nos": [
            "Sobre a Paul Books",
            "Trabalhe conosco",
            "Imprensa",
            "Investidores",
            "Sustentabilidade"
          ],
          "Ganhe Dinheiro": [
            "Venda na Paul Books",
            "Programa de Afiliados",
            "Publique seus livros",
            "Seja um autor independente"
          ],
          "Formas de Pagamento": [
            "Cartão de crédito",
            "Cartão de débito",
            "PIX",
            "Boleto bancário",
            "Gift cards"
          ],
          "Precisa de Ajuda?": [
            "Central de atendimento",
            "Entrega e devoluções",
            "Política de privacidade",
            "Termos de uso",
            "FAQ - Perguntas frequentes"
          ]
        }}
        socialLinks={[
          { icon: "📘", url: "#facebook", name: "Facebook" },
          { icon: "📷", url: "#instagram", name: "Instagram" },
          { icon: "🐦", url: "#twitter", name: "Twitter" },
          { icon: "📺", url: "#youtube", name: "YouTube" },
          { icon: "📱", url: "#tiktok", name: "TikTok" }
        ]}
      />
    </AppContainer>
 
  );
}

export default App;
