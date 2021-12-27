import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import LoanApplication from './LoanApplication';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/apply-loan" element={<LoanApplication/>}/>
      </Routes>
    </Router>
  );
}

export default App;
