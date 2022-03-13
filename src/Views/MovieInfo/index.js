import React from "react";
import { Movie } from "../../Movie";

//States
const [movieList, setMovieList] = React.useState([]);
const [isLoaded, setIsLoaded] = React.useState(false);
const [currentPage, setCurrentPage] = React.useState(1);



//Api URL
let apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=f26dc163b9c303160b360fa5d7cf9d6f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`;


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


function MovieInfo(props) {
    const theMovie = movieList.filter(movie => 
        movie.id === props.id
    );

    return (
        <Movie info={theMovie} />
    );
}