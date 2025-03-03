import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'
import { Navbar } from '../Navbar/Navbar'
import './Footer.css'
import { FaFacebook,FaWhatsapp,FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <h1>
          Desarrollado por <strong>Kevin Julian</strong>
        </h1>
      </div>
      <Navbar>
        <ul>
          <ItemNavbar content={<FaFacebook />} />
          <ItemNavbar content={<FaWhatsapp />} />
          <ItemNavbar content={<FaInstagram />} />
        </ul>
      </Navbar>
    </footer>
  )
}
