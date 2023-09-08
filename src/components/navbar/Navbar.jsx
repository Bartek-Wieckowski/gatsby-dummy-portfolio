import { Link } from "gatsby";
import React, { useState } from "react";
import imagesPath from "../../images/images";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <nav className="nav grid">
        <div>
          <Link to="/" className="nav__logo">
            theBart
          </Link>
        </div>

        <div className={`nav__menu ${isOpen ? "show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/home" className="nav__link active">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className="nav__link">
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/work" className="nav__link">
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={() => handleClick()}>
          <img src={imagesPath.hamburger} alt="" className="hamburger" />
        </div>
      </nav>
    </header>
  );
}
