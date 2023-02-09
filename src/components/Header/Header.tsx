import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return(
        <div className="Header">
            <h1>PR Tracker</h1>
            <div className="headerNav">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>
        </div>
    )
}

export default Header;