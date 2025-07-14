import styled from 'styled-components';
import { useState, useEffect } from 'react';

const UltimosLancamentosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '60px 20px'};
  text-align: center;
  gap: 32px;
  background: ${props => props.background || 'transparent'};
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 40px 15px;
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 10px;
    gap: 20px;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.fontSize || '32px'};
  font-weight: 700;
  color: ${props => props.color || '#ffffff'};
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const CarouselContent = styled.div`
  overflow: hidden;
  flex: 1;
  border-radius: 12px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translateX}px);
  gap: ${props => props.gap || '20px'};
`;

const CarouselButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;

const BookCard = styled.div`
  flex: 0 0 auto;
  width: ${props => props.cardWidth || '200px'};
  background: ${props => props.cardBackground || 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  border-radius: ${props => props.borderRadius || '12px'};
  padding: ${props => props.padding || '16px'};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 160px;
    padding: 12px;
  }
  
  @media (max-width: 480px) {
    width: 140px;
    padding: 10px;
  }
`;

const BookImage = styled.img`
  width: 100%;
  max-width: ${props => props.imageWidth || '120px'};
  height: ${props => props.imageHeight || '160px'};
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 12px auto;
  display: block;
`;

const BookTitle = styled.h3`
  font-size: ${props => props.titleSize || '16px'};
  font-weight: 600;
  color: ${props => props.titleColor || '#ffffff'};
  margin: 0 0 6px 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  line-height: 1.2;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BookAuthor = styled.p`
  font-size: ${props => props.authorSize || '12px'};
  color: ${props => props.authorColor || '#ffffff'};
  opacity: 0.9;
  margin: 0 0 6px 0;
  text-align: center;
`;

const BookPrice = styled.p`
  font-size: ${props => props.priceSize || '14px'};
  font-weight: 700;
  color: ${props => props.priceColor || '#FFD700'};
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const BookBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${props => props.badgeColor || '#FF6B35'};
  color: ${props => props.badgeTextColor || 'white'};
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: ${props => props.showBadge ? 'block' : 'none'};
`;

const BookCardWrapper = styled.div`
  position: relative;
`;

function UltimosLancamentos({ 
  titulo = "Últimos Lançamentos",
  livros = [],
  mostrarBadge = true,
  textoBadge = "Novo",
  corBadge = "#FF6B35",
  corTextoTitulo = "#ffffff",
  tamanhoTitulo = "32px",
  onBookClick = () => {},
  configuracaoCarousel = {
    cardWidth: "200px",
    gap: "20px",
    maxWidth: "1200px",
    visibleCards: 5,
    autoPlay: true,
    autoPlayInterval: 3000
  },
  estilosCard = {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "16px"
  },
  estilosImagem = {
    width: "120px",
    height: "160px"
  },
  estilosTexto = {
    titleSize: "16px",
    titleColor: "#ffffff",
    authorSize: "12px", 
    authorColor: "#ffffff",
    priceSize: "14px",
    priceColor: "#FFD700"
  }
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Criando array infinito duplicando os livros
  const infiniteBooks = [...livros, ...livros, ...livros];
  
  const cardWidth = parseInt(configuracaoCarousel.cardWidth);
  const gap = parseInt(configuracaoCarousel.gap);
  const cardWithGap = cardWidth + gap;
  
  // Auto-play functionality
  useEffect(() => {
    if (configuracaoCarousel.autoPlay && livros.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, configuracaoCarousel.autoPlayInterval);
      
      return () => clearInterval(interval);
    }
  }, [configuracaoCarousel.autoPlay, configuracaoCarousel.autoPlayInterval, livros.length]);
  
  // Reset infinito quando chegar ao final
  useEffect(() => {
    if (currentIndex >= livros.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Aguarda a transição terminar
    } else if (currentIndex < 0) {
      setTimeout(() => {
        setCurrentIndex(livros.length - 1);
      }, 500);
    }
  }, [currentIndex, livros.length]);
  
  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };
  
  const translateX = -((currentIndex + livros.length) * cardWithGap);

  return (
    <UltimosLancamentosContainer>
      <Title 
        fontSize={tamanhoTitulo}
        color={corTextoTitulo}
      >
        {titulo}
      </Title>
      
      <CarouselContainer maxWidth={configuracaoCarousel.maxWidth}>
        <CarouselButton onClick={prevSlide}>
          ‹
        </CarouselButton>
        
        <CarouselContent>
          <CarouselWrapper
            translateX={translateX}
            gap={configuracaoCarousel.gap}
          >
            {infiniteBooks.map((book, index) => (
              <BookCardWrapper key={`${book.id}-${index}`}>
                <BookCard
                  cardWidth={configuracaoCarousel.cardWidth}
                  cardBackground={estilosCard.background}
                  borderRadius={estilosCard.borderRadius}
                  padding={estilosCard.padding}
                  onClick={() => onBookClick(book)}
                >
                  <BookBadge
                    showBadge={mostrarBadge}
                    badgeColor={corBadge}
                    badgeTextColor="white"
                  >
                    {textoBadge}
                  </BookBadge>
                  <BookImage 
                    src={book.src} 
                    alt={book.nome}
                    imageWidth={estilosImagem.width}
                    imageHeight={estilosImagem.height}
                  />
                  <BookTitle
                    titleSize={estilosTexto.titleSize}
                    titleColor={estilosTexto.titleColor}
                  >
                    {book.nome}
                  </BookTitle>
                  <BookAuthor
                    authorSize={estilosTexto.authorSize}
                    authorColor={estilosTexto.authorColor}
                  >
                    {book.autor}
                  </BookAuthor>
                  <BookPrice
                    priceSize={estilosTexto.priceSize}
                    priceColor={estilosTexto.priceColor}
                  >
                    {book.preco}
                  </BookPrice>
                </BookCard>
              </BookCardWrapper>
            ))}
          </CarouselWrapper>
        </CarouselContent>
        
        <CarouselButton onClick={nextSlide}>
          ›
        </CarouselButton>
      </CarouselContainer>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
