import React, { useState, useEffect } from "react";
import './MovieList.css';
import { SearchBar } from "../../components/SearchBar";

const MovieList = () => {

    //States
    const [movieList, setMovieList] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');


    //Api URL
    const apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=f26dc163b9c303160b360fa5d7cf9d6f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

    //Fetch API data and store in movieList
    useEffect(() => {
        fetch(apiURL)
        .then(res => res.json())    
        .then(
                (data) => {
                    setIsLoaded(true);
                    setMovieList(data.results);
                })
    }, [])

    //Dinamic search functionality
    let searchedMovies = [];

    if(!searchValue.length >= 1){
        searchedMovies = movieList;
    } else{
        searchedMovies = movieList.filter(movie => {
        const movieText = movie.original_title.toLowerCase();
        const searchText = searchValue.toLowerCase();
        
        return movieText.includes(searchText);
    });
    }

    //Render
        if(!isLoaded){
            return <div>Loading...</div>;
        } else{
    return (
        <React.Fragment>
        <SearchBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />     
        <ul>
            {searchedMovies.map(movieList => (
            <li key={movieList.id}>
                {movieList.original_title} 
            </li>
            ))}
        </ul>
        </React.Fragment>
    );}
}

export { MovieList };
