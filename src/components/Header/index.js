// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="nav-menu-list">
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/about" className="nav-link">
        About
      </Link>
    </li>
  </ul>
)

export default Header
