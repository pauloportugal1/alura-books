import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '40px 20px'};
  gap: 16px;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid ${props => props.color || '#FF6B35'};
  border-radius: 50%;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: ${props => props.textColor || '#ffffff'};
  font-size: ${props => props.fontSize || '16px'};
  font-weight: 500;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

function Loading({ 
  text = "Carregando...", 
  size = "40px", 
  color = "#FF6B35",
  textColor = "#ffffff",
  fontSize = "16px",
  padding = "40px 20px"
}) {
  return (
    <LoadingContainer padding={padding}>
      <Spinner size={size} color={color} />
      <LoadingText textColor={textColor} fontSize={fontSize}>
        {text}
      </LoadingText>
    </LoadingContainer>
  );
}

export default Loading;
