import './style.css';
import Logo from '../logo';
import Menubar from '../menubar';
function Header() {
    return (
      <header className='App-header'>
        <Logo></Logo>
        <Menubar></Menubar>  
    </header>
    )
}

export default Header;