import './style.css';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg'

const textOptions = ['categorias', 'minha estante', 'favoritos'];
const icons = [perfil, sacola];

function Menubar() {
    return (
        <div className='App-menubar'>
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
        </div>
    )
}


export default Menubar;