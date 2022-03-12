import React from 'react';
import './googleButton.css';
import googleIcon from '../../assets/images/google-icon.png';

const GoogleButton = () => {
    return (
        <div className="google-button-container">
            <div className="google-button">
                <figure className='icon-container'>
                    <img src={googleIcon} alt="Google icon" />
                </figure>
            </div>
        </div>
    )
}

export { GoogleButton };