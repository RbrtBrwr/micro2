import './Movie.css';
import React, { useEffect, useState} from 'react';
import { List, Production } from '../List';
import { ListItem } from '../ListItem';
import { useParams } from 'react-router-dom';

function Movie(){

    const apiKey = 'f26dc163b9c303160b360fa5d7cf9d6f';
    const id = useParams();
    const [movie, setMovie] = useState({
    title: '',
    genres: [],
    original_language: '',
    release_date: '',
    poster_path: '',
    budget: '',
    overview: '',
    popularity: 0,
    production_companies: [],
    status: '',
  });

  const getMovieID = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const movies = await fetch(url);
    const json = await movies.json();
  
    return json;
  };

  useEffect(async () => {
    await getMovieID(id.movieID).then((data) => {
      setMovie(data);
    });
  }, []);
    
    return(
        <div className='movie'>
            <h1 className='movie__title' id='movie__title'>
                {movie.title}
            </h1>
            <img className='poster' id='poster' 
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://scontent.fccs4-2.fna.fbcdn.net/v/t31.18172-8/13119892_1121146867942340_251269463858833498_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ck800vAnD6MAX9D5az4&_nc_ht=scontent.fccs4-2.fna&oh=00_AT-ZJyRBfkwzXCOTWpSVfrmN2h1e2j-pxTnQRzleuVIQ1g&oe=625096DF";
                  }}
                alt='Movie Poster'>
            </img>
            <h3>Generos: </h3>
            <List>
                {movie.genres.map(genero => (
                    <ListItem
                        key={genero.name}
                        name={genero.name}
                    />
                )

                )}
            </List>
            <p className='language' id='language'>Idioma Original: {movie.original_language}</p>
            <p className='budget' id='budget'>Presupuesto: {movie.budget}</p>
            <h3>Overview: </h3>
            <p className='overview' id='overview'>{movie.overview}</p>
            <p className='rating' id='rating'>Rating: {movie.popularity}</p>
            <h3>Production companies:</h3>
            <List>
                {movie.production_companies.map(genero => (
                    <ListItem
                        key={genero.name}
                        name={genero.name}
                    />
                )

                )}
            </List>

            <p className='date' id='date'>Fecha de estreno: {movie.release_date}</p>
            <p className='status' id='status'>Status: {movie.status}</p>

        </div>
        
    )
};

export { Movie };