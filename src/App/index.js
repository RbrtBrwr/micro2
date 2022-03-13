import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from '../Views/Register';
import { Login } from '../Views/Login';
import { Header } from '../Header';
import { Movie } from '../Movie';
import { MovieList } from '../Views/MovieList';
import { Home } from '../Views/Home';
import UserContextProvider from '../context/UserContext';

function App() {
  return (
    <BrowserRouter>
                <UserContextProvider>
        <Header/>
          <Routes>
          <Route path={'/'} element={<Home />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/login'} element={<Login />} />

            <Route path={'/movielist'} element={<MovieList/>} />

            <Route path={'/movielist/:movieID'} element={<Movie movie/>} />  
            {/* <Route path={'/'} element={<Movie testJson={testJson}/>} /> */}
          </Routes>
          </UserContextProvider>
    </BrowserRouter>

    
  )}


export { App };
