import styled from 'styled-components';
import Logo from '../logo';
import Menubar from '../menubar';
import Input from '../input';
import { useState } from 'react';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor || '#ffffff'};
  width: 100%;
  max-width: 100vw;
  z-index: 1000;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.padding || '15px 30px'};
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px 15px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    gap: 10px;
  }
`;

const LogoSection = styled.div`
  flex: 0 0 auto;
  min-width: 160px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 120px;
  }

  @media (max-width: 480px) {
    min-width: 100px;
  }
`;

const SearchSection = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    max-width: 100%;
  }
`;

const IconsSection = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 120px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    min-width: 80px;
  }

  @media (max-width: 480px) {
    min-width: 60px;
  }
`;

const MenuRow = styled.div`
  background-color: ${props => props.menuBackground || '#f8f9fa'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;

  & > div {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  max-height: 300px;
  overflow-y: auto;
  z-index: 2000;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SuggestionItem = styled.li`
  padding: 12px 16px;
  color: #333333;
  cursor: pointer;
  font-size: 14px;
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

function Header({ 
  backgroundColor = "#ffffff",
  padding = "15px 30px",
  logoProps = {},
  menubarProps = {},
  searchProps = {},
  onSearch = () => {},
  menuBackground = "#f8f9fa",
  livrosData = [],
  onLogoClick
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.trim() && livrosData.length > 0) {
            const filtered = livrosData.filter(book => 
                book.nome.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 8);
            setSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSearch = (term = searchTerm) => {
        if (term.trim()) {
            onSearch(term);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (bookName) => {
        setSearchTerm(bookName);
        setShowSuggestions(false);
        onSearch(bookName);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
      <HeaderContainer backgroundColor={backgroundColor}>
        <TopRow padding={padding}>
          <LogoSection>
            <Logo 
              {...logoProps}
              onLogoClick={onLogoClick}
            />
          </LogoSection>
          
          <SearchSection>
            <Input 
              placeholder="Pesquisar livros, autores..."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              maxWidth="100%"
              backgroundColor="rgba(255, 255, 255, 0.95)"
              borderColor="#ddd"
              focusBorderColor="#FF6B35"
              borderRadius="4px"
              iconSymbol="🔍"
              onIconClick={() => handleSearch()}
              {...searchProps}
            />
            
            {showSuggestions && (
              <SuggestionsList>
                {suggestions.map((book) => (
                  <SuggestionItem
                    key={book.id}
                    onClick={() => handleSuggestionClick(book.nome)}
                  >
                    {book.nome}
                  </SuggestionItem>
                ))}
              </SuggestionsList>
            )}
          </SearchSection>
          
          <IconsSection>
            <Menubar 
              showTextMenu={false}
              iconsOnly={true}
              {...menubarProps}
            />
          </IconsSection>
        </TopRow>
        
        <MenuRow menuBackground={menuBackground}>
          <Menubar 
            showIcons={false}
            textOnly={true}
            padding="12px 30px"
            menuGap="30px"
            {...menubarProps}
          />
        </MenuRow>
      </HeaderContainer>
    )
}

export default Header;