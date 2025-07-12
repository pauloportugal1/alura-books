import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 48px 16px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #282c34;
  background-color: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &::placeholder {
    color: #666666;
    font-weight: 300;
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.8);
    background-color: #ffffff;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666666;
  font-size: 18px;
  pointer-events: none;
  transition: color 0.3s ease;

  ${StyledInput}:focus + & {
    color: #282c34;
  }

  ${StyledInput}:hover + & {
    color: #444444;
  }
`;

function Input({ placeholder, ...props }) {
    return (
        <InputContainer>
            <StyledInput 
                placeholder={placeholder}
                {...props}
            />
            <SearchIcon>🔍</SearchIcon>
        </InputContainer>
    );
}

export default Input;
