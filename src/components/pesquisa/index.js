

import styled from 'styled-components';
import Input from '../input';
import { useState } from 'react';
import { books as book } from './searchData'; // Importing the book data


const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
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
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  margin-top: 4px;
  border: 1px solid #e0e0e0;
`;

const SuggestionItem = styled.li`
  padding: 12px 16px;
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.15s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: #f8f9fa;
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
    background-color: #e8f0fe;
  }

  img {
    width: 40px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .book-title {
    font-weight: 500;
    color: #202124;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  max-width: 800px;
  position: relative;
  z-index: 50;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

function Pesquisa() {

    const [searchedBooks, setSearchedBooks] = useState([]); 
    const [inputText, setInputText] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante</Subtitle>
            
            <DropdownContainer>
                <Input 
                    placeholder="Escreva sua próxima leitura"
                    value={inputText}
                    onChange = {event => {
                        const typedText = event.target.value;
                        setInputText(typedText);
                        setSelectedBook(null); // Limpa a seleção quando o usuário digita
                        
                        if (typedText.length > 0) {
                            const filteredBooks = book.filter(book => 
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
                    <SuggestionsList>
                        {searchedBooks.map((bookItem) => (
                            <SuggestionItem 
                                key={bookItem.id}
                                onMouseDown={(e) => {
                                    // Previne o onBlur do input
                                    e.preventDefault();
                                }}
                                onClick={() => {
                                    setInputText(bookItem.nome);
                                    setShowSuggestions(false);
                                    setSelectedBook(bookItem); // Define o livro selecionado
                                    setSearchedBooks([]); // Limpa os resultados da busca
                                }}
                            >
                                <img src={bookItem.src} alt={bookItem.nome} />
                                <div className="book-info">
                                    <span className="book-title">{bookItem.nome}</span>
                                </div>
                            </SuggestionItem>
                        ))}
                    </SuggestionsList>
                )}
            </DropdownContainer>
            
            {/* Cards dos livros embaixo */}
            {selectedBook ? (
                // Mostra apenas o livro selecionado
                <ResultsContainer>
                    <BookCard key={`selected-${selectedBook.id}`}>
                        <img src={selectedBook.src} alt={selectedBook.nome} />
                        <p>{selectedBook.nome}</p>
                    </BookCard>
                </ResultsContainer>
            ) : (
                // Mostra os resultados da busca quando não há seleção
                searchedBooks.length > 0 && (
                    <ResultsContainer>
                        {searchedBooks.map((bookItem) => (
                            <BookCard key={`card-${bookItem.id}`}>
                                <img src={bookItem.src} alt={bookItem.nome} />
                                <p>{bookItem.nome}</p>
                            </BookCard>
                        ))}
                    </ResultsContainer>
                )
            )}
        </SearchContainer>
    )
}

export default Pesquisa;