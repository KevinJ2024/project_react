import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
        <div>
        <input type='text' id='input-search'></input>
        <button id='btn-search'>search</button>
        </div>
        <ul>
            <li><a href="">Clase 1</a></li>
            <li><a href="">Clase 2</a></li>
            <li><a href="">Clase 3</a></li>
        </ul>
        <select id='select-option'>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
            <option value="">option 4</option>
        </select>
    </nav>
  )
}
