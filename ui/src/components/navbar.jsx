import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1><Link to="/"/>>G-SCORES</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search-data">Search Data</Link></li>
                <li><Link to="/import-data">Import Data</Link></li>
                <li><Link to="/update-data">Update Data</Link></li>
                <li><Link to="/upload-file">Upload File</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;