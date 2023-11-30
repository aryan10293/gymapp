import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import SignupDisplay from './pages/SignupDisplay';
function App() {
  return (
        <Routes>
          <Route 
          path="/"
          element={ <SignupDisplay /> } />
    </Routes>
  );
}

export default App;
