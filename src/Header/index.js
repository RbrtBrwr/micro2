import React from "react";
import './Header.css';
function Header(){
    return (
        <header className="header">
            <ul className="header__list">
                <li className="clicky">Solo</li>
                <li className="clicky">Un</li>
                <li className="clicky">Beso</li>
                <li className="clicky">Para</li>
                <li className="clicky">Ti</li>
            </ul>
        </header>
    )
}

export { Header };