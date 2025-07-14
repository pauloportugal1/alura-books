import styled from 'styled-components';
import React, { useState } from 'react';
import imagemLivro from '../../images/livro.png';
import imagemLivro2 from '../../images/livro2.png';

const BookPageContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  margin-top: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Breadcrumb = styled.nav`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
  
  a {
    color: #FF6B35;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 5px;
  }
`;

const BookContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 350px;
  gap: 40px;
  margin-bottom: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.active ? '#FF6B35' : 'transparent'};
  
  &:hover {
    border-color: #FF6B35;
  }
`;

const InfoSection = styled.div`
  padding: 0 20px;
`;

const BookTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px 0;
  line-height: 1.3;
`;

const AuthorInfo = styled.div`
  margin-bottom: 15px;
  
  .author-label {
    font-size: 14px;
    color: #666;
  }
  
  .author-name {
    font-size: 16px;
    color: #FF6B35;
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  
  .stars {
    color: #ffa500;
    font-size: 18px;
  }
  
  .rating-text {
    color: #FF6B35;
    text-decoration: underline;
    cursor: pointer;
  }
  
  .rating-count {
    color: #666;
  }
`;

const PriceSection = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const PriceInfo = styled.div`
  margin-bottom: 20px;
  
  .price-label {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
  
  .current-price {
    font-size: 28px;
    font-weight: 700;
    color: #B12704;
  }
  
  .original-price {
    font-size: 16px;
    color: #666;
    text-decoration: line-through;
    margin-left: 10px;
  }
  
  .discount {
    font-size: 14px;
    color: #B12704;
    font-weight: 500;
  }
`;

const DeliveryInfo = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(0, 123, 255, 0.05);
  border-radius: 6px;
  border-left: 4px solid #007bff;
  
  .delivery-title {
    font-weight: 600;
    color: #007bff;
    margin-bottom: 5px;
  }
  
  .delivery-text {
    font-size: 14px;
    color: #333;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: #FF6B35;
    color: white;
    
    &:hover {
      background: #E85A2B;
    }
  }
  
  &.secondary {
    background: #FFA500;
    color: white;
    
    &:hover {
      background: #E5940A;
    }
  }
  
  &.outline {
    background: white;
    color: #333;
    border: 1px solid #ddd;
    
    &:hover {
      background: #f8f9fa;
    }
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  
  label {
    font-size: 14px;
    font-weight: 500;
  }
  
  select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const BookDescription = styled.div`
  grid-column: 1 / -1;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e9ecef;
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
  }
  
  p {
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
  }
  
  .book-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
    
    .detail-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      
      .label {
        font-weight: 500;
        color: #333;
      }
      
      .value {
        color: #666;
      }
    }
  }
`;

const RecommendationsSection = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e9ecef;
  
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
  }
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const RecommendationCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  .book-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .book-title {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 5px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .book-author {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .book-price {
    font-size: 14px;
    font-weight: 600;
    color: #FF6B35;
  }
`;

const ContentImagesSection = styled.div`
  margin: 40px 0;
  padding: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const ContentImagesTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 20px;
  text-align: center;
`;

const ContentImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ContentImage = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 15px;
    font-size: 14px;
    font-weight: 500;
  }
`;

function PaginaLivro({ 
  livro,
  onVoltar,
  onAddToCart,
  onBuyNow,
  allBooks,
  onBookClick
}) {
  // Estado para controlar a imagem atual
  const [currentImage, setCurrentImage] = useState(0);
  const images = [imagemLivro, imagemLivro2, imagemLivro];

  if (!livro) return null;

  // Função para gerar recomendações baseadas no título
  const getRecommendations = (currentBook, allBooks) => {
    if (!allBooks || !currentBook) return [];
    
    // Palavras-chave do título atual
    const currentWords = currentBook.nome.toLowerCase()
      .split(' ')
      .filter(word => word.length > 2); // Ignora palavras muito pequenas
    
    // Filtra livros excluindo o atual
    const otherBooks = allBooks.filter(book => book.id !== currentBook.id);
    
    // Calcula pontuação de similaridade
    const booksWithScore = otherBooks.map(book => {
      const bookWords = book.nome.toLowerCase().split(' ');
      const authorWords = book.autor ? book.autor.toLowerCase().split(' ') : [];
      
      let score = 0;
      
      // Pontuação por palavras in comum no título
      currentWords.forEach(word => {
        if (bookWords.some(bookWord => bookWord.includes(word) || word.includes(bookWord))) {
          score += 3;
        }
      });
      
      // Pontuação por autor similar
      if (book.autor && currentBook.autor) {
        if (book.autor.toLowerCase() === currentBook.autor.toLowerCase()) {
          score += 5; // Mesmo autor = alta prioridade
        } else if (authorWords.some(authorWord => 
          currentBook.autor.toLowerCase().includes(authorWord))) {
          score += 2;
        }
      }
      
      // Pontuação por categoria/tema (baseado em palavras-chave comuns)
      const techWords = ['javascript', 'react', 'node', 'python', 'programming', 'code', 'web', 'desenvolvimento'];
      const currentHasTech = currentWords.some(word => techWords.includes(word));
      const bookHasTech = bookWords.some(word => techWords.includes(word));
      
      if (currentHasTech && bookHasTech) {
        score += 2;
      }
      
      return { ...book, score };
    });
    
    // Ordena por pontuação e retorna os top 6
    return booksWithScore
      .filter(book => book.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  };

  const recommendations = getRecommendations(livro, allBooks);

  // Mock data para demonstração
  const bookDetails = {
    rating: 4.5,
    reviewCount: 128,
    originalPrice: 'R$ 79,90',
    discount: '25% OFF',
    isbn: '978-85-1234-567-8',
    pages: 320,
    publisher: 'Editora Tech',
    language: 'Português',
    publishDate: '2024',
    format: 'Capa comum'
  };

  const description = `
    Este livro oferece uma abordagem prática e moderna para dominar as tecnologias mais relevantes do mercado. 
    Com exemplos reais e exercícios hands-on, você aprenderá desde os conceitos fundamentais até técnicas avançadas.
    
    O autor, reconhecido especialista na área, compartilha sua experiência de anos no desenvolvimento de soluções 
    escaláveis e eficientes. Cada capítulo é cuidadosamente estruturado para proporcionar um aprendizado gradual 
    e consistente.
    
    Ideal para desenvolvedores iniciantes e intermediários que desejam aprimorar suas habilidades e se destacar 
    no mercado de trabalho.
  `;

  return (
    <BookPageContainer>
      <Breadcrumb>
        <button onClick={onVoltar} style={{background: 'none', border: 'none', color: '#FF6B35', cursor: 'pointer', textDecoration: 'underline'}}>Livros</button>
        <span>›</span>
        <button onClick={onVoltar} style={{background: 'none', border: 'none', color: '#FF6B35', cursor: 'pointer', textDecoration: 'underline'}}>Programação</button>
        <span>›</span>
        <span>{livro.nome}</span>
      </Breadcrumb>

      <BookContent>
        <ImageSection>
          <BookImage src={images[currentImage]} alt={livro.nome} />
          <ThumbnailContainer>
            {images.map((image, index) => (
              <Thumbnail 
                key={index}
                src={image} 
                active={currentImage === index}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </ThumbnailContainer>
        </ImageSection>

        <InfoSection>
          <BookTitle>{livro.nome}</BookTitle>
          
          <AuthorInfo>
            <div className="author-label">por</div>
            <div className="author-name">{livro.autor}</div>
          </AuthorInfo>

          <Rating>
            <div className="stars">★★★★☆</div>
            <span className="rating-text">{bookDetails.rating} de 5 estrelas</span>
            <span className="rating-count">({bookDetails.reviewCount} avaliações)</span>
          </Rating>

          <BookDescription>
            <h3>Sobre este livro</h3>
            {description.split('\n').map((paragraph, index) => 
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            )}
            
            <div className="book-details">
              <div className="detail-item">
                <span className="label">ISBN:</span>
                <span className="value">{bookDetails.isbn}</span>
              </div>
              <div className="detail-item">
                <span className="label">Páginas:</span>
                <span className="value">{bookDetails.pages}</span>
              </div>
              <div className="detail-item">
                <span className="label">Editora:</span>
                <span className="value">{bookDetails.publisher}</span>
              </div>
              <div className="detail-item">
                <span className="label">Idioma:</span>
                <span className="value">{bookDetails.language}</span>
              </div>
              <div className="detail-item">
                <span className="label">Ano:</span>
                <span className="value">{bookDetails.publishDate}</span>
              </div>
              <div className="detail-item">
                <span className="label">Formato:</span>
                <span className="value">{bookDetails.format}</span>
              </div>
            </div>
          </BookDescription>
        </InfoSection>

        <PriceSection>
          <PriceInfo>
            <div className="price-label">Preço:</div>
            <div>
              <span className="current-price">{livro.preco}</span>
              <span className="original-price">{bookDetails.originalPrice}</span>
            </div>
            <div className="discount">{bookDetails.discount}</div>
          </PriceInfo>

          <DeliveryInfo>
            <div className="delivery-title">Entrega GRÁTIS</div>
            <div className="delivery-text">
              Para compras acima de R$ 49,90 em livros ou em qualquer pedido acima de R$ 129,90
            </div>
          </DeliveryInfo>

          <QuantitySelector>
            <label>Qtd:</label>
            <select defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </QuantitySelector>

          <ActionButtons>
            <Button className="secondary" onClick={() => onAddToCart && onAddToCart(livro)}>
              Adicionar ao carrinho
            </Button>
            <Button className="primary" onClick={() => onBuyNow && onBuyNow(livro)}>
              Comprar agora
            </Button>
            <Button className="outline">
              Adicionar à Lista de desejos
            </Button>
          </ActionButtons>
        </PriceSection>
      </BookContent>
      
      <ContentImagesSection>
        <ContentImagesTitle>Imagens do conteúdo</ContentImagesTitle>
        <ContentImagesGrid>
          <ContentImage>
            <img src={imagemLivro} alt="Conteúdo do livro" />
            <div className="overlay">Exemplo de código</div>
          </ContentImage>
          <ContentImage>
            <img src={imagemLivro2} alt="Conteúdo do livro" />
            <div className="overlay">Tabela de conteúdos</div>
          </ContentImage>
          <ContentImage>
            <img src={imagemLivro} alt="Conteúdo do livro" />
            <div className="overlay">Gráfico explicativo</div>
          </ContentImage>
          <ContentImage>
            <img src={imagemLivro2} alt="Conteúdo do livro" />
            <div className="overlay">Estudo de caso</div>
          </ContentImage>
        </ContentImagesGrid>
      </ContentImagesSection>
      
      {recommendations.length > 0 && (
        <RecommendationsSection>
          <h3>Recomendações para você</h3>
          <RecommendationsGrid>
            {recommendations.map(book => (
              <RecommendationCard 
                key={book.id} 
                onClick={() => onBookClick && onBookClick(book)}
              >
                <img 
                  src={imagemLivro} 
                  alt={book.nome}
                  className="book-image"
                />
                <div className="book-title">{book.nome}</div>
                <div className="book-author">{book.autor}</div>
                <div className="book-price">{book.preco}</div>
              </RecommendationCard>
            ))}
          </RecommendationsGrid>
        </RecommendationsSection>
      )}
    </BookPageContainer>
  );
}

export default PaginaLivro;
