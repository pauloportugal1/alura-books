import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.maxWidth || '500px'};
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${props => props.padding || '16px 48px 16px 20px'};
  font-size: ${props => props.fontSize || '16px'};
  font-weight: 400;
  color: ${props => props.textColor || '#282c34'};
  background-color: ${props => props.backgroundColor || 'rgba(255, 255, 255, 0.95)'};
  border: 2px solid ${props => props.borderColor || 'rgba(255, 255, 255, 0.3)'};
  border-radius: ${props => props.borderRadius || '12px'};
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &::placeholder {
    color: ${props => props.placeholderColor || '#666666'};
    font-weight: 300;
  }

  &:focus {
    border-color: ${props => props.focusBorderColor || 'rgba(255, 255, 255, 0.8)'};
    background-color: ${props => props.focusBackgroundColor || '#ffffff'};
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: ${props => props.hoverBorderColor || 'rgba(255, 255, 255, 0.5)'};
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.iconColor || '#666666'};
  font-size: ${props => props.iconSize || '18px'};
  pointer-events: ${props => props.clickable ? 'auto' : 'none'};
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: color 0.3s ease;

  ${StyledInput}:focus + & {
    color: ${props => props.focusIconColor || '#282c34'};
  }

  ${StyledInput}:hover + & {
    color: ${props => props.hoverIconColor || '#444444'};
  }

  &:hover {
    color: ${props => props.clickable ? (props.hoverIconColor || '#444444') : 'inherit'};
  }
`;

function Input({ 
  placeholder = "Digite aqui...",
  maxWidth = "500px",
  padding = "16px 48px 16px 20px",
  fontSize = "16px",
  textColor = "#282c34",
  backgroundColor = "rgba(255, 255, 255, 0.95)",
  borderColor = "rgba(255, 255, 255, 0.3)",
  borderRadius = "12px",
  placeholderColor = "#666666",
  focusBorderColor = "rgba(255, 255, 255, 0.8)",
  focusBackgroundColor = "#ffffff",
  hoverBorderColor = "rgba(255, 255, 255, 0.5)",
  iconColor = "#666666",
  iconSize = "18px",
  focusIconColor = "#282c34",
  hoverIconColor = "#444444",
  showIcon = true,
  iconSymbol = "🔍",
  onIconClick = null,
  onKeyPress = null,
  ...props 
}) {
    const isIconClickable = typeof onIconClick === 'function';

    return (
        <InputContainer maxWidth={maxWidth}>
            <StyledInput 
                placeholder={placeholder}
                padding={padding}
                fontSize={fontSize}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                borderRadius={borderRadius}
                placeholderColor={placeholderColor}
                focusBorderColor={focusBorderColor}
                focusBackgroundColor={focusBackgroundColor}
                hoverBorderColor={hoverBorderColor}
                onKeyPress={onKeyPress}
                {...props}
            />
            {showIcon && (
                <SearchIcon
                    iconColor={iconColor}
                    iconSize={iconSize}
                    focusIconColor={focusIconColor}
                    hoverIconColor={hoverIconColor}
                    clickable={isIconClickable}
                    onClick={isIconClickable ? onIconClick : undefined}
                >
                    {iconSymbol}
                </SearchIcon>
            )}
        </InputContainer>
    );
}

export default Input;
