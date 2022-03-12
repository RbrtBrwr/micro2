import React from "react";
import './MovieCard.css';

function MovieCard(props){
    return(
        <div className="movieCard">
            <h1 className='movie__title' id='movie__title'>
                {props.movieList.original_title}
            </h1>
            <img className='poster' id='poster' 
                src={`http://image.tmdb.org/t/p/w500${props.movieList.poster_path}`} 
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://scontent.fccs4-2.fna.fbcdn.net/v/t31.18172-8/13119892_1121146867942340_251269463858833498_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ck800vAnD6MAX9D5az4&_nc_ht=scontent.fccs4-2.fna&oh=00_AT-ZJyRBfkwzXCOTWpSVfrmN2h1e2j-pxTnQRzleuVIQ1g&oe=625096DF";
                  }}
                alt='Movie Poster'>
            </img>
            <p className='language' id='language'>Idioma Original: {props.movieList.original_language}</p>
            <p className='rating' id='rating'>Rating: {props.movieList.popularity}</p>
            <p className='date' id='date'>Fecha de estreno: {props.movieList.release_date}</p>
        </div>
    );
}

export { MovieCard };
