import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from '../Views/Register';
import { Login } from '../Views/Login';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path={'/register'} element={<Register />} />
            <Route path={'/login'} element={<Login />} />
          </Routes>
    </BrowserRouter>
    
  );
}

export { App };
