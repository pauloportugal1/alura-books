import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: ${props => props.fontSize || '30px'};
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  p {
    color: ${props => props.textColor || '#282c34'};
    white-space: nowrap;
    margin-left: ${props => props.marginLeft || '10px'};
    user-select: none;
  }
`;

const LogoImage = styled.img`
  width: ${props => props.imageWidth || 'auto'};
  height: ${props => props.imageHeight || 'auto'};
  user-select: none;
`;

function Logo({ 
  imageSrc = logo,
  altText = "logo",
  fontSize = "30px",
  textColor = "#282c34",
  marginLeft = "10px",
  imageWidth = "auto",
  imageHeight = "auto",
  nomeEmpresa = "PAUL",
  tipoNegocio = "BOOKS",
  onLogoClick
}) {
    const handleClick = () => {
      if (onLogoClick) {
        onLogoClick();
      }
    };

    return (
        <LogoContainer 
          fontSize={fontSize}
          textColor={textColor}
          marginLeft={marginLeft}
          onClick={handleClick}
        >
          <LogoImage 
            src={imageSrc} 
            className='App-logo' 
            alt={altText}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          />
          <p><strong>{nomeEmpresa}</strong> {tipoNegocio}</p>
        </LogoContainer>
    )
}

export default Logo