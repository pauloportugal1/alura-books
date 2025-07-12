import styled from 'styled-components';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg'

const MenubarContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: fit-content;
  padding: 0 5%;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    gap: 50px;
  }

  nav ul li a {
    white-space: nowrap;
  }

  .App-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const textOptions = ['categorias', 'minha estante', 'favoritos'];
const icons = [perfil, sacola];

function Menubar() {
    return (
        <MenubarContainer>
            <nav className='App-menu'>
                <ul>
                  {textOptions.map((text) => (
                      <li><a href='qualquer url'>{text}</a></li>
                  ))}
                </ul>
                <ul className='App-icons'>
                  {icons.map((icon) => (
                      <li><a href='qualquer url'><img src={icon} alt='Icone' /></a></li>
                  ))}
                </ul>
            </nav>
        </MenubarContainer>
    )
}

export default Menubar;