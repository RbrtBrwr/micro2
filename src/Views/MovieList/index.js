import React, { useState, useEffect } from "react";
import { MovieCard } from "../../MovieCard";
import './MovieList.css';

const MovieList = () => {

    const [movieList, setMovieList] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=f26dc163b9c303160b360fa5d7cf9d6f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

    useEffect(() => {
        fetch(apiURL)
        .then(res => res.json())    
        .then(
                (data) => {
                    setIsLoaded(true);
                    setMovieList(data.results);
                })
    }, [])

        if(!isLoaded){
            return <div>Loading...</div>;
        } else{
    return (
        <div>
            {movieList.map(movieList => (
                <MovieCard 
                    movieList={movieList}
                    key={movieList.id}
                />
            ))}
        </div>
    );}
}

export { MovieList };
