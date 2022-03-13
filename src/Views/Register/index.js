import React from 'react';
import './Register.css';
import { XForm } from '../../components/xForm';
import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase-config';

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-form-container">
                <p className='register-info'>¡Regístrate para poder disfrutar de tus películas favoritas!</p>
                <XForm view={'register'} />
            </div>
        </div>
    )
}

export { Register };