import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route 
        path=''
        element={
          <Login />
        }
      />
      <Route 
        path='dashboard'
        element={
          <Dashboard />
        }
      />
    </Routes>
  );
}

export default App;
