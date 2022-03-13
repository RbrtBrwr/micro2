import React from 'react';
import './googleButton.css';
import googleIcon from '../../assets/images/google-icon.png';
import { auth, googleProvider } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
    const navigate = useNavigate();
    const handleLoginWithGoogle = async () => {
        await auth.signInWithPopup(googleProvider);
        navigate("/movielist");

    }
    return (
        <div className="google-button-container" onClick={handleLoginWithGoogle}>
            <div className="google-button">
                <figure className='icon-container'>
                    <img src={googleIcon} alt="Google icon" />
                </figure>
            </div>
        </div>
    )
}

export { GoogleButton };