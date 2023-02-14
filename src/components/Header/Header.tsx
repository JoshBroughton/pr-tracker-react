import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return(
        <div className="Header">
            <h1>PR Tracker</h1>
            <div className="headerNav">
                <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    >Home</NavLink>
                <NavLink 
                    to='/login'
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    >Login</NavLink>
                <NavLink 
                to='/register'
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                >Register</NavLink>
            </div>
        </div>
    )
}

export default Header;