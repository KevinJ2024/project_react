import './ItemNavbar.css'
import { NavLink} from 'react-router-dom'

export const ItemNavbar = ({content, route}) => {
  return (
    <li>
      <NavLink id="text" to={route}>{content}</NavLink>
    </li>
  )
}

