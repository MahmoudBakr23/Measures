import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home;