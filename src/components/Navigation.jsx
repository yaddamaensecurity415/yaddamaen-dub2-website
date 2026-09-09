import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">YADDAMAEN | DUB2</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">GALLERY</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link">TESTIMONIALS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </li>
          <li className="nav-item">
            <a href="https://instagram.com/yaddamaensecurity415" target="_blank" rel="noopener noreferrer" className="instagram-btn">
              Follow Us on Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
