import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import './Header.css';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    const { isAuthenticated } = useAuth0();
    let authButton;
    if (isAuthenticated) {
       authButton = <LogoutButton className="nav-link"/>
    } else {
        authButton = <LoginButton className="nav-link"/>
    }

    return(
        <div className="Header">
            <h1>PR Tracker</h1>
            <div className="headerNav">
                <NavLink 
                    to='/'
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    >Home</NavLink>
                { authButton }
            </div>
        </div>
    )
}

export default Header;