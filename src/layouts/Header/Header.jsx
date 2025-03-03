import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"
import { Navbar } from "../Navbar/Navbar"
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
        <h1>Introduccion a React</h1>
        <Navbar>
          <ul>
            <ItemNavbar content='Inicio' route='/' />
            <ItemNavbar content='Clase 1' route='/Class1' />
            <ItemNavbar content='Clase 2' route='/Class2' />
            <ItemNavbar content='Clase 3' route='/NotFound' />
          </ul>
        </Navbar>
    </header>
  )
}
