import React from "react";
import './SearchBar.css';

const SearchBar = ({searchValue, setSearchValue}) => {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return[
        <input 
            className='search-bar' 
            placeholder='Busca una pelicula...' 
            // key={searchValue} // Si metemos esto se va el error pero no podemos escribir biens
            value={searchValue}
            onChange={onSearchValueChange} 
        />,

    ];
}

export { SearchBar };