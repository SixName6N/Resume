import { useState } from "react";
import "./Navbar.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          SixName6N
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li className="mobile-download">
            <a href="/Resume.pdf"  className="download-btn" target="_blank" onClick={toggleMenu}>
              <MdOutlineFileDownload size={22} style={{color:"#fff"}} />
              <p style={{color:"#fff"}}>Download Resume</p>
            </a>
          </li>
        </ul>

        <a href="/Resume.pdf" className="download-btn desktop-download" target="_blank">
          <MdOutlineFileDownload size={22} />
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;