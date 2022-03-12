import React from 'react';
import './xForm.css'; 

const XForm = ({ view }) => {
    return(
    <form className='form-container'>
        <input type="email" className='input Email-input' placeholder='Correo Electrónico' />
        <input type="password" className='input Password-input' placeholder='Contraseña' />
        <button type="button">
            {view === "register" ? "Registrar" : "Ingresar"}
            </button>
    </form>
    )
}

export { XForm };