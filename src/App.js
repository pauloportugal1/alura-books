import Header from './components/header';  
import Pesquisa from './components/pesquisa';
import styled from 'styled-components';


const AppContainer = styled.div`
  display: relative;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  height: 100vh;
  background: linear-gradient(135deg, #FD8325 0%, #FF6B35 25%, #F7931E 50%, #E67E22 75%, #D35400 100%);
  z-index: 0;
`

function App() {
  return (
    <AppContainer>
    <Header/>
    <Pesquisa/>
    </AppContainer>
 
  );
}

export default App;
