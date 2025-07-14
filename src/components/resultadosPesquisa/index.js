import styled from 'styled-components';

const ResultadosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '60px 20px'};
  min-height: 60vh;
`;

const Title = styled.h2`
  font-size: ${props => props.titleSize || '28px'};
  font-weight: 700;
  color: ${props => props.titleColor || '#ffffff'};
  margin: 0 0 32px 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  text-align: center;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minCardWidth || '200px'}, 1fr));
  gap: ${props => props.gap || '24px'};
  max-width: ${props => props.maxWidth || '1200px'};
  width: 100%;
`;

const BookCard = styled.div`
  background: ${props => props.cardBackground || 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  border-radius: ${props => props.borderRadius || '12px'};
  padding: ${props => props.padding || '20px'};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`;

const BookImage = styled.img`
  width: 100%;
  max-width: ${props => props.imageWidth || '120px'};
  height: ${props => props.imageHeight || '180px'};
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 16px auto;
  display: block;
`;

const BookTitle = styled.h3`
  font-size: ${props => props.titleSize || '16px'};
  font-weight: 600;
  color: ${props => props.titleColor || '#ffffff'};
  margin: 0 0 8px 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  line-height: 1.3;
`;

const BookAuthor = styled.p`
  font-size: ${props => props.authorSize || '14px'};
  color: ${props => props.authorColor || '#ffffff'};
  opacity: 0.9;
  margin: 0 0 8px 0;
`;

const BookPrice = styled.p`
  font-size: ${props => props.priceSize || '16px'};
  font-weight: 700;
  color: ${props => props.priceColor || '#FFD700'};
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
`;

const NoResults = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  margin-top: 40px;
`;

function ResultadosPesquisa({
  termoPesquisa = "",
  resultados = [],
  onBookClick,
  estilosTitulo = {
    titleSize: "28px",
    titleColor: "#ffffff"
  },
  estilosContainer = {
    padding: "60px 20px"
  },
  configuracaoGrid = {
    minCardWidth: "200px",
    gap: "24px",
    maxWidth: "1200px"
  },
  estilosCard = {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "20px"
  },
  estilosImagem = {
    width: "120px",
    height: "180px"
  },
  estilosTexto = {
    titleSize: "16px",
    titleColor: "#ffffff",
    authorSize: "14px",
    authorColor: "#ffffff",
    priceSize: "16px",
    priceColor: "#FFD700"
  }
}) {
  return (
    <ResultadosContainer padding={estilosContainer.padding}>
      <Title 
        titleSize={estilosTitulo.titleSize}
        titleColor={estilosTitulo.titleColor}
      >
        {resultados.length > 0 
          ? `Resultados para "${termoPesquisa}" (${resultados.length} ${resultados.length === 1 ? 'livro encontrado' : 'livros encontrados'})`
          : `Nenhum resultado encontrado para "${termoPesquisa}"`
        }
      </Title>
      
      {resultados.length > 0 ? (
        <ResultsGrid
          minCardWidth={configuracaoGrid.minCardWidth}
          gap={configuracaoGrid.gap}
          maxWidth={configuracaoGrid.maxWidth}
        >
          {resultados.map((book) => (
            <BookCard
              key={book.id}
              cardBackground={estilosCard.background}
              borderRadius={estilosCard.borderRadius}
              padding={estilosCard.padding}
              onClick={() => onBookClick && onBookClick(book)}
            >
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
              {book.autor && (
                <BookAuthor
                  authorSize={estilosTexto.authorSize}
                  authorColor={estilosTexto.authorColor}
                >
                  {book.autor}
                </BookAuthor>
              )}
              {book.preco && (
                <BookPrice
                  priceSize={estilosTexto.priceSize}
                  priceColor={estilosTexto.priceColor}
                >
                  {book.preco}
                </BookPrice>
              )}
            </BookCard>
          ))}
        </ResultsGrid>
      ) : (
        <NoResults>
          <p>Tente pesquisar por outro termo ou verifique a ortografia.</p>
        </NoResults>
      )}
    </ResultadosContainer>
  );
}

export default ResultadosPesquisa;
