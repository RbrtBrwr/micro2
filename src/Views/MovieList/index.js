import React, { useState, useEffect } from "react";
import { MovieCard } from "../../MovieCard";
import './MovieList.css';
import { SearchBar } from "../../components/SearchBar";
import { Movie } from "../../Movie";

const MovieList = () => {
    
    //States
    const [movieList, setMovieList] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);



    //Api URL
    let apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=f26dc163b9c303160b360fa5d7cf9d6f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`;
    let whatever = 0;

    //Fetch API data and store in movieList
    useEffect(() => {
        fetch(apiURL)
        .then(res => res.json())    
        .then(
                (data) => {
                    setIsLoaded(true);
                    setMovieList(data.results);
                })
    }, [currentPage]);

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


    //Change page +1
    const onClickRight = () => {
        setCurrentPage(currentPage + 1);

    }

    ////Change page -1
    const onClickLeft = () => {
        setCurrentPage(currentPage - 1);
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
        <div>
            {searchedMovies.map(searchedMovies => (
                <MovieCard 
                    movieList={searchedMovies}
                    key={searchedMovies.id}
                />
            ))}
        </div>
        <div className="paginator-wrapper">
            {currentPage === 1 ?
            <React.Fragment>
            <div className="page">{currentPage}</div>
            <button className="right-arrow" onClick={onClickRight}>→</button>
            </React.Fragment>
            : 
            <React.Fragment>
            <button className="left-arrow" onClick={onClickLeft}>←</button>
            <div className="page">{currentPage}</div>
            <button className="right-arrow" onClick={onClickRight}>→</button>
            </React.Fragment>
        }
        </div>

        </React.Fragment>
    );}
}

export { MovieList };
