import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../NavBar';

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <NavBar />
        </div>
    )
}

export default HomePage;