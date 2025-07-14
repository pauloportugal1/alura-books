import styled from 'styled-components';

const MaisVendidosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '60px 20px'};
  text-align: center;
  gap: 32px;
  background: ${props => props.background || 'transparent'};
  
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

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minCardWidth || '220px'}, 1fr));
  gap: ${props => props.gap || '24px'};
  max-width: ${props => props.maxWidth || '1200px'};
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
`;

const BookCard = styled.div`
  background: ${props => props.cardBackground || 'rgba(255, 255, 255, 0.15)'};
  backdrop-filter: blur(10px);
  border-radius: ${props => props.borderRadius || '12px'};
  padding: ${props => props.padding || '18px'};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FFD700, #FFA500);
    opacity: ${props => props.showTopBorder ? '1' : '0'};
  }
`;

const BookImage = styled.img`
  width: 100%;
  max-width: ${props => props.imageWidth || '140px'};
  height: ${props => props.imageHeight || '180px'};
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 16px auto;
  display: block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const BookTitle = styled.h3`
  font-size: ${props => props.titleSize || '17px'};
  font-weight: 600;
  color: ${props => props.titleColor || '#ffffff'};
  margin: 0 0 8px 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  line-height: 1.3;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BookAuthor = styled.p`
  font-size: ${props => props.authorSize || '13px'};
  color: ${props => props.authorColor || '#ffffff'};
  opacity: 0.9;
  margin: 0 0 8px 0;
  text-align: center;
`;

const BookPrice = styled.p`
  font-size: ${props => props.priceSize || '15px'};
  font-weight: 700;
  color: ${props => props.priceColor || '#FFD700'};
  margin: 0 0 8px 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const BookRanking = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${props => props.rankingColor || '#FFD700'};
  color: ${props => props.rankingTextColor || '#000'};
  padding: 4px 8px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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

const SalesInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  
  span {
    font-size: ${props => props.salesSize || '11px'};
    color: ${props => props.salesColor || '#FFD700'};
    font-weight: 500;
  }
  
  .sales-icon {
    font-size: 12px;
  }
`;

const BookCardWrapper = styled.div`
  position: relative;
`;

function MaisVendidos({ 
  titulo = "Mais Vendidos",
  livros = [],
  mostrarBadge = true,
  textoBadge = "Best Seller",
  corBadge = "#FF6B35",
  corTextoTitulo = "#ffffff",
  tamanhoTitulo = "32px",
  mostrarRanking = true,
  onBookClick = () => {},
  configuracaoGrid = {
    minCardWidth: "220px",
    gap: "24px",
    maxWidth: "1200px"
  },
  estilosCard = {
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "12px",
    padding: "18px",
    showTopBorder: true
  },
  estilosImagem = {
    width: "140px",
    height: "180px"
  },
  estilosTexto = {
    titleSize: "17px",
    titleColor: "#ffffff",
    authorSize: "13px", 
    authorColor: "#ffffff",
    priceSize: "15px",
    priceColor: "#FFD700",
    salesSize: "11px",
    salesColor: "#FFD700"
  },
  estilosRanking = {
    rankingColor: "#FFD700",
    rankingTextColor: "#000"
  }
}) {
  return (
    <MaisVendidosContainer>
      <Title 
        fontSize={tamanhoTitulo}
        color={corTextoTitulo}
      >
        {titulo}
      </Title>
      
      <BooksGrid
        minCardWidth={configuracaoGrid.minCardWidth}
        gap={configuracaoGrid.gap}
        maxWidth={configuracaoGrid.maxWidth}
      >
        {livros.map((book, index) => (
          <BookCardWrapper key={book.id}>
            <BookCard
              cardBackground={estilosCard.background}
              borderRadius={estilosCard.borderRadius}
              padding={estilosCard.padding}
              showTopBorder={estilosCard.showTopBorder}
              onClick={() => onBookClick(book)}
            >
              {mostrarRanking && (
                <BookRanking
                  rankingColor={estilosRanking.rankingColor}
                  rankingTextColor={estilosRanking.rankingTextColor}
                >
                  {index + 1}
                </BookRanking>
              )}
              
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
              
              {book.vendas && (
                <SalesInfo
                  salesSize={estilosTexto.salesSize}
                  salesColor={estilosTexto.salesColor}
                >
                  <span className="sales-icon">🔥</span>
                  <span>{book.vendas} vendidos</span>
                </SalesInfo>
              )}
            </BookCard>
          </BookCardWrapper>
        ))}
      </BooksGrid>
    </MaisVendidosContainer>
  );
}

export default MaisVendidos;
