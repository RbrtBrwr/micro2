import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
function Header(){
    return (
        <header className="header">
            <ul className="header__list">
                <Link to='/'><li className="clicky">Home</li></Link>
                <Link to='/login'><li className="clicky">Login</li></Link>
                <Link to='/register'><li className="clicky">Registrar</li></Link>
            </ul>
        </header>
    )
}

export { Header };