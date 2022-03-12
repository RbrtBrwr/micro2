import React from "react";
import './ListItem.css';

function ListItem(props){
    return (
        <li className="ListItem">
            <p>
                {props.name}
            </p>
        </li>
    );
}

export { ListItem };
