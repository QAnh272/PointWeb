import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Welcome to G-Score</h1>
            <button onClick={() => navigateTo('/search')}>Go to Search Page</button>
            <button onClick={() => navigateTo('/import')}>Go to Import Page</button>
            <button onClick={() => navigateTo('/update')}>Go to Update Page</button>
            <button onClick={() => navigateTo('/upload')}>Go to Upload Page</button>
        </div>
    );
};

export default HomePage;
