import { useState } from 'react';
import { FaEnvelope, FaFolderOpen, FaUser } from 'react-icons/fa'; // added FaEnvelope for Contact
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === 'Enter' || e.key === ' ') toggleMenu();
        }}
      >
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <FaUser className="nav-icon" />
            About Me
          </Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            <FaFolderOpen className="nav-icon" />
            Projects
          </Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
