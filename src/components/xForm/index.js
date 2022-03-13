import React from 'react';
import './xForm.css'; 
import { db, auth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const XForm = ({ view }) => {

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
        await auth.createUserWithEmailAndPassword(data.email, data.password);
        navigate("/movielist");
    }
    return(
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="email" className='input Email-input' placeholder='Correo Electrónico' />
        <input {...register("password")} type="password" className='input Password-input' placeholder='Contraseña' />
        <button type="submit">
            {view === "register" ? "Registrar" : "Ingresar"}
            </button>
    </form>
    )
}

export { XForm };