import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [id, setId] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search-data?id=${id}`);
            setResult(response.data);
        } catch (err) {
            alert('No data found');
            console.error('Error searching data', err);
        }
    };

    return (
        <div>
            <h1>Search Page</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter ID"
            />
            <button onClick={handleSearch}>Search</button>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SearchPage;