import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import SignupDisplay from './pages/SignupDisplay';
import HomeDisplay from './pages/HomeDisplay';
import LoginDisplay from './pages/LoginDisplay';
function App() {
  return (
    <Routes>
          <Route 
          path="/signup"
          element={ <SignupDisplay /> } />

          <Route 
          path="/login"
          element={ <LoginDisplay /> } />

          <Route 
          path="/"
          element={ <HomeDisplay /> } />
    </Routes>
  );
}

export default App;
