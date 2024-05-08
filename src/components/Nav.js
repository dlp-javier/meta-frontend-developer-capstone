import React from 'react'
import logo from '../images/Logo .svg'

const Nav = () => {
  return (
    <nav>
        <a href="/">
            <img src={logo} alt='logo' />
        </a>
        {/* mobile navbar */}
        <div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        {/* nav items */}
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Services</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>

    </nav>
  )
}
export default Nav;
