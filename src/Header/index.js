import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from "../context/UserContext";
import { auth } from "../utils/firebase-config";

function Header(){
    const { user } = useContext(UserContext);

    const handleLogout = async () => {
        await auth.signOut();
    }

    return (
        <header className="header">
            <ul className="header__list">
                {!user ? 
                <React.Fragment>
                <Link to='/'><li className="clicky">Home</li></Link>
                <Link to='/login'><li className="clicky">Login</li></Link>
                <Link to='/register'><li className="clicky">Registrar</li></Link>
                </React.Fragment>
                 : 
                 <React.Fragment>
                    <Link to='/movielist'><li className="clicky">Lista de peliculas</li></Link>
                    <li>{user.name}</li>
                <Link to='/'><li className="clicky" onClick={handleLogout}>Logout</li></Link>
                </React.Fragment>
                }
            </ul>
        </header>
    )
}

export { Header };