import { Link } from 'gatsby'
import React from 'react'


export default function Navbar() {
  return (
    <header class="header">
    <nav class="nav grid">
        <div>
            <a href="#" class="nav__logo">Marlon</a>
        </div>

        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
                <li class="nav__item"><Link to="/home" class="nav__link active">Home</Link></li>
                <li class="nav__item"><Link to="/about" class="nav__link">About</Link></li>
                <li class="nav__item"><Link to="/skills" class="nav__link">Skills</Link></li>
                <li class="nav__item"><Link to="/work" class="nav__link">Work</Link></li>
                <li class="nav__item"><Link to="/contact" class="nav__link">Contact</Link></li>
            </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
        </div>
    </nav>
</header>
  )
}
