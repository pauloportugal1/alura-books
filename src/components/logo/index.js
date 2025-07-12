import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;

  p {
    color: #282c34;
    white-space: nowrap;
    margin-left: 10px;
  }
`;

function Logo() {
    return (
        <LogoContainer>
          <img src={logo} className='App-logo' alt='logo' />
          <p><strong>PAUL</strong> BOOKS</p>
        </LogoContainer>
    )
}

export default Logo