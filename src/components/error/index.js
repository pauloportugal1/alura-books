import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '40px 20px'};
  gap: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 20px;
`;

const ErrorIcon = styled.div`
  font-size: ${props => props.iconSize || '48px'};
  color: ${props => props.iconColor || '#ff4757'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ErrorTitle = styled.h3`
  color: ${props => props.titleColor || '#ffffff'};
  font-size: ${props => props.titleSize || '20px'};
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: ${props => props.textColor || 'rgba(255, 255, 255, 0.9)'};
  font-size: ${props => props.fontSize || '16px'};
  margin: 0;
  text-align: center;
  max-width: 400px;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background: ${props => props.buttonColor || '#FF6B35'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${props => props.buttonHoverColor || '#E55A2B'};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

function ErrorDisplay({ 
  title = "Ops! Algo deu errado", 
  message = "Não foi possível carregar os dados. Tente novamente.",
  onRetry,
  showRetry = true,
  icon = "⚠️",
  iconSize = "48px",
  iconColor = "#ff4757",
  titleColor = "#ffffff",
  titleSize = "20px",
  textColor = "rgba(255, 255, 255, 0.9)",
  fontSize = "16px",
  buttonColor = "#FF6B35",
  buttonHoverColor = "#E55A2B",
  padding = "40px 20px"
}) {
  return (
    <ErrorContainer padding={padding}>
      <ErrorIcon iconSize={iconSize} iconColor={iconColor}>
        {icon}
      </ErrorIcon>
      <ErrorTitle titleColor={titleColor} titleSize={titleSize}>
        {title}
      </ErrorTitle>
      <ErrorMessage textColor={textColor} fontSize={fontSize}>
        {message}
      </ErrorMessage>
      {showRetry && onRetry && (
        <RetryButton 
          onClick={onRetry}
          buttonColor={buttonColor}
          buttonHoverColor={buttonHoverColor}
        >
          Tentar Novamente
        </RetryButton>
      )}
    </ErrorContainer>
  );
}

export default ErrorDisplay;
