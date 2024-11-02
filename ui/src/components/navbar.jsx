import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo"><Link to="/">G-SCORE</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/api/search-student-scores">Search Data</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;