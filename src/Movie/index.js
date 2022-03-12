import './Movie.css';
import React from 'react';
import { List, Production } from '../List';
import { ListItem } from '../ListItem';
import { MovieList } from '../Views/MovieList';

function Movie(props){
    return(
        <div className='movie'>
            <h1 className='movie__title' id='movie__title'>
                {props.testJson.original_title}
            </h1>
            <img className='poster' id='poster' 
                src={`http://image.tmdb.org/t/p/w500${props.testJson.poster_path}`} 
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://scontent.fccs4-2.fna.fbcdn.net/v/t31.18172-8/13119892_1121146867942340_251269463858833498_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ck800vAnD6MAX9D5az4&_nc_ht=scontent.fccs4-2.fna&oh=00_AT-ZJyRBfkwzXCOTWpSVfrmN2h1e2j-pxTnQRzleuVIQ1g&oe=625096DF";
                  }}
                alt='Movie Poster'>
            </img>
            <h3>Generos: </h3>
            <List>
                {props.testJson.genres.map(genero => (
                    <ListItem
                        key={genero.name}
                        name={genero.name}
                    />
                )

                )}
            </List>
            <p className='language' id='language'>Idioma Original: {props.testJson.original_language}</p>
            <p className='budget' id='budget'>Presupuesto: {props.testJson.budget}</p>
            <h3>Overview: </h3>
            <p className='overview' id='overview'>{props.testJson.overview}</p>
            <p className='rating' id='rating'>Rating: {props.testJson.popularity}</p>
            <h3>Production companies:</h3>
            <List>
                {props.testJson.production_companies.map(genero => (
                    <ListItem
                        key={genero.name}
                        name={genero.name}
                    />
                )

                )}
            </List>

            <p className='date' id='date'>Fecha de estreno: {props.testJson.release_date}</p>
            <p className='status' id='status'>Status: {props.testJson.status}</p>

        </div>
        
    )
};

export { Movie };