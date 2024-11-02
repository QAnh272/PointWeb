import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const SearchPage = () => {
    const [id, setId] = useState('');
    const [result, setResult] = useState(null);
    const [alert, setAlert] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/search-student-scores', {
                params: { id }
            });
            console.log(response.data); // Log the response data
            setResult(response.data);
            setAlert('Student scores found');
        } catch (err) {
            console.error('Error searching data', err);
            setAlert('Error searching student scores');
        }
    };

    return (
        <div className="search-page">
            <h1>Search Student Scores</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter Student ID"
            />
            <button onClick={handleSearch}>Search</button>
            {alert && <p className="error">{alert}</p>}
            {result && (
                <div className="results">
                    <h2>Results:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SearchPage;