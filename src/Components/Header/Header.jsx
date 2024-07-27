import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
        <Link to="/" ><img className='logoNet' src={logo} alt='logo' /></Link>

        <div>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/mylist">Classics</Link>
        </div>

    </nav>
  )
}

export default Header