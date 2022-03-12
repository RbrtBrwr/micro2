import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-form-container">
                <p className='register-info'>¡Regístrate para poder disfrutar de tus películas favoritas!</p>
                <Form view={'register'} />
            </div>
        </div>
    )
}

export { Register };