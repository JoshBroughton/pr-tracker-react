import React from "react";
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
        <header className="Header">
            <h1>PR Tracker</h1>
            <nav className="headerNav">
                { authButton }
            </nav>
            <button className='hamburger'></button>
        </header>
    )
}

export default Header;
