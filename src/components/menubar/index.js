import styled from 'styled-components';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg'

const MenubarContainer = styled.div`
  display: flex;
  justify-content: ${props => props.textOnly ? 'flex-start' : 'start'};
  width: ${props => props.textOnly ? 'auto' : '100%'};
  height: fit-content;
  padding: ${props => props.padding || '0 5%'};

  nav {
    display: flex;
    width: ${props => props.textOnly ? 'auto' : '100%'};
    justify-content: ${props => props.textOnly ? 'flex-start' : 'space-between'};
    align-items: center;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    gap: ${props => props.menuGap || '50px'};
  }

  nav ul li a {
    white-space: nowrap;
    color: ${props => props.linkColor || 'inherit'};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.hoverColor || '#FF6B35'};
    }
  }

  .App-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${props => props.iconGap || '15px'};
  }
  
  .App-icons img {
    width: ${props => props.iconSize || '24px'};
    height: ${props => props.iconSize || '24px'};
  }

  .text-menu {
    display: ${props => (props.showTextMenu === false || props.iconsOnly) ? 'none' : 'flex'};
  }

  .icons-menu {
    display: ${props => (props.showIcons === false || props.textOnly) ? 'none' : 'flex'};
  }
`;

function Menubar({ 
  opcoes = ['categorias', 'minha estante', 'favoritos'],
  icones = [perfil, sacola],
  padding = '0 5%',
  menuGap = '50px',
  iconGap = '15px',
  iconSize = '24px',
  linkColor = 'inherit',
  hoverColor = '#FF6B35',
  urlBase = '#',
  showTextMenu = true,
  showIcons = true,
  iconsOnly = false,
  textOnly = false
}) {
    return (
        <MenubarContainer
          padding={padding}
          menuGap={menuGap}
          iconGap={iconGap}
          iconSize={iconSize}
          linkColor={linkColor}
          hoverColor={hoverColor}
          textOnly={textOnly}
          showTextMenu={showTextMenu}
          showIcons={showIcons}
          iconsOnly={iconsOnly}
        >
            <nav className='App-menu'>
                <ul className="text-menu">
                  {opcoes.map((text, index) => (
                      <li key={index}>
                        <a href={`${urlBase}/${text.replace(' ', '-')}`}>
                          {text}
                        </a>
                      </li>
                  ))}
                </ul>
                <ul className='App-icons icons-menu'>
                  {icones.map((icon, index) => (
                      <li key={index}>
                        <a href={`${urlBase}/icon-${index}`}>
                          <img src={icon} alt={`Ícone ${index + 1}`} />
                        </a>
                      </li>
                  ))}
                </ul>
            </nav>
        </MenubarContainer>
    )
}

export default Menubar;