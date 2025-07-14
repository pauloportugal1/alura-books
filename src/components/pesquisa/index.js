

import styled from 'styled-components';
import Input from '../input';
import { useState } from 'react';

const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '60px 20px'};
  text-align: center;
  gap: ${props => props.gap || '24px'};
`;

const Title = styled.h2`
  font-size: ${props => props.titleSize || '32px'};
  font-weight: 700;
  color: ${props => props.titleColor || '#ffffff'};
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
`;

const Subtitle = styled.h3`
  font-size: ${props => props.subtitleSize || '18px'};
  font-weight: 400;
  color: ${props => props.subtitleColor || '#ffffff'};
  margin: 0;
  max-width: 600px;
  line-height: 1.6;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.suggestionBg || '#ffffff'};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  max-height: ${props => props.maxHeight || '200px'};
  overflow-y: auto;
  z-index: 100;
  margin-top: 4px;
  border: 1px solid #e0e0e0;
`;

const SuggestionItem = styled.li`
  padding: ${props => props.itemPadding || '12px 16px'};
  color: ${props => props.itemColor || '#333333'};
  cursor: pointer;
  font-size: ${props => props.itemFontSize || '14px'};
  font-weight: 400;
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.15s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.hoverBg || '#f8f9fa'};
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:active {
    background-color: ${props => props.activeBg || '#e8f0fe'};
  }

  .book-title {
    font-weight: 500;
    color: #202124;
    width: 100%;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.cardGap || '20px'};
  margin-top: 60px;
  max-width: ${props => props.maxWidth || '800px'};
  position: relative;
  z-index: 50;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.cardBg || 'rgba(255, 255, 255, 0.1)'};
  padding: ${props => props.cardPadding || '20px'};
  border-radius: ${props => props.cardRadius || '12px'};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: ${props => props.cardImageWidth || '120px'};
    height: ${props => props.cardImageHeight || '180px'};
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.cardTextColor || '#ffffff'};
    font-size: ${props => props.cardTextSize || '14px'};
    font-weight: 500;
    text-align: center;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

function Pesquisa({
  titulo = "Já sabe por onde começar?",
  subtitulo = "Encontre seu livro em nossa estante",
  placeholder = "Escreva sua próxima leitura",
  livrosData = [],
  onSearch = null,
  estilosTitulo = {
    titleSize: "32px",
    titleColor: "#ffffff",
    subtitleSize: "18px", 
    subtitleColor: "#ffffff"
  },
  estilosContainer = {
    padding: "60px 20px",
    gap: "24px"
  },
  estilosSugestoes = {
    suggestionBg: "#ffffff",
    maxHeight: "200px",
    itemPadding: "12px 16px",
    itemColor: "#333333",
    itemFontSize: "14px",
    hoverBg: "#f8f9fa",
    activeBg: "#e8f0fe"
  },
  estilosResultados = {
    cardGap: "20px",
    maxWidth: "800px",
    cardBg: "rgba(255, 255, 255, 0.1)",
    cardPadding: "20px",
    cardRadius: "12px",
    cardImageWidth: "120px",
    cardImageHeight: "180px",
    cardTextColor: "#ffffff",
    cardTextSize: "14px"
  },
  inputProps = {},
  showResults = true
}) {

    const [searchedBooks, setSearchedBooks] = useState([]); 
    const [inputText, setInputText] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    
    const handleSearch = (term) => {
        if (term.trim() && onSearch) {
            onSearch(term.trim());
        }
    };

    const handleSuggestionClick = (bookItem) => {
        setInputText(bookItem.nome);
        setShowSuggestions(false);
        setSelectedBook(bookItem);
        setSearchedBooks([]);
        if (onSearch) {
            onSearch(bookItem.nome);
        }
    };
    
    return (
        <SearchContainer
          padding={estilosContainer.padding}
          gap={estilosContainer.gap}
        >
            <Title 
              titleSize={estilosTitulo.titleSize}
              titleColor={estilosTitulo.titleColor}
            >
              {titulo}
            </Title>
            <Subtitle
              subtitleSize={estilosTitulo.subtitleSize}
              subtitleColor={estilosTitulo.subtitleColor}
            >
              {subtitulo}
            </Subtitle>
            
            <DropdownContainer>
                <Input 
                    placeholder={placeholder}
                    value={inputText}
                    onIconClick={() => handleSearch(inputText)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(inputText);
                        }
                    }}
                    {...inputProps}
                    onChange = {event => {
                        const typedText = event.target.value;
                        setInputText(typedText);
                        setSelectedBook(null);
                        
                        if (typedText.length > 0) {
                            const filteredBooks = livrosData.filter(book => 
                                book.nome.toLowerCase().includes(typedText.toLowerCase()));
                            setSearchedBooks(filteredBooks);
                            setShowSuggestions(filteredBooks.length > 0);
                        } else {
                            setSearchedBooks([]);
                            setShowSuggestions(false);
                        }
                    }}
                />
                
                {showSuggestions && searchedBooks.length > 0 && (
                    <SuggestionsList {...estilosSugestoes}>
                        {searchedBooks.map((bookItem) => (
                            <SuggestionItem 
                                key={bookItem.id}
                                {...estilosSugestoes}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                }}
                                onClick={() => handleSuggestionClick(bookItem)}
                            >
                                <div className="book-title">{bookItem.nome}</div>
                            </SuggestionItem>
                        ))}
                    </SuggestionsList>
                )}
            </DropdownContainer>
            
            {/* Cards dos livros embaixo - só mostra se showResults for true */}
            {showResults && (
                <>
                    {selectedBook ? (
                        <ResultsContainer {...estilosResultados}>
                            <BookCard key={`selected-${selectedBook.id}`} {...estilosResultados}>
                                <img src={selectedBook.src} alt={selectedBook.nome} />
                                <p>{selectedBook.nome}</p>
                            </BookCard>
                        </ResultsContainer>
                    ) : (
                        searchedBooks.length > 0 && (
                            <ResultsContainer {...estilosResultados}>
                                {searchedBooks.map((bookItem) => (
                                    <BookCard key={`card-${bookItem.id}`} {...estilosResultados}>
                                        <img src={bookItem.src} alt={bookItem.nome} />
                                        <p>{bookItem.nome}</p>
                                    </BookCard>
                                ))}
                            </ResultsContainer>
                        )
                    )}
                </>
            )}
        </SearchContainer>
    )
}

export default Pesquisa;