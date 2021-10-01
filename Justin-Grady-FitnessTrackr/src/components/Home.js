import React from 'react';
import App from '../index';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div>
        <h1>Welcome to Fitness.Trackr!</h1>
        <p>Returning user?<Link to="/login"> Login Here!</Link></p>
        <p>First time here?<Link to="/register"> Register Here!</Link></p>
    </div>
    )
}

export default Home;