import React from 'react';
import './Home.css';
import rengoku from '../../assets/images/rengoku.jpg'

const Home = () => {
    return(
        <div className='home-wrapper'>
        <h3 className='home-title'>Ingresa o registrate para disfrutar de tus peliculas favoritas</h3>
        <figure>
            <img src={rengoku} alt="Rengoku" />
        </figure>
        </div>
        
    )
}

export { Home };