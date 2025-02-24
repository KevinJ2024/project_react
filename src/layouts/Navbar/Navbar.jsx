import './Navbar.css'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';

export const Navbar = () => {
  return (
    <nav>
        <ItemNavbar content="Home" i=""/>
        <ItemNavbar content="Clase" i="1"/>
        <ItemNavbar content="Clase" i="2"/>
    </nav>
  )
}
