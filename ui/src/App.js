import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import SearchPage from './components/searchPage';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api/search-student-scores" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;