import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='App'>
            <h1>Home Page</h1>
            <Link to="/about"> Click to go to about</Link>
        </div>
    );
}

export default Home;