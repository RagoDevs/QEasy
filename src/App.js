import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route 
        path=''
        element={
          <Dashboard />
        }
      />
    </Routes>
  );
}

export default App;
