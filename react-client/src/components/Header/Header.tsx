import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
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
                <LoginButton className="nav-link"/>
                <LogoutButton className="nav-link"/>
                <NavLink 
                    to='/profile' 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    >Profile</NavLink>
            </div>
        </div>
    )
}

export default Header;