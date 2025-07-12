import styled from 'styled-components';
import Logo from '../logo';
import Menubar from '../menubar';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100vw;
  max-width: 100vw;
  height: fit-content;
  padding: 10px 30px 10px 30px;
  z-index: 1;
  position: relative;
`;

function Header() {
    return (
      <HeaderContainer>
        <Logo></Logo>
        <Menubar></Menubar>  
      </HeaderContainer>
    )
}

export default Header;