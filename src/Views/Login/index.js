import React from 'react';
import './Login.css';
import { GoogleButton } from '../../components/googleButton';
import { XForm } from '../../components/xForm';

const Login = () => {
    return(
        <div className="login-container">
            <div className="login-form-container">
                <p className="login-info">¡Ingresa en tu cuenta y disfruta de las mejores películas!</p>
                <GoogleButton />
                <XForm view={'login'} />
            </div>
        </div>

)}

export { Login };