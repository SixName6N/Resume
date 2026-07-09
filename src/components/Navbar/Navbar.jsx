import "./Navbar.css";
import { FaDownload } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          SixName<span>6</span><span>N</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="/Resume_Phromamorn573.pdf" className="download-btn" target="_blank">
          <MdOutlineFileDownload size={22} />
          Download Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;