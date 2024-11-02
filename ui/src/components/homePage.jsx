import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="center-container">
            <h1>Welcome to G-Score</h1>
            <button className="green-button" onClick={() => navigateTo('/api/search-student-scores')}>Go to Search Page</button>
        </div>
    );
};

export default HomePage;