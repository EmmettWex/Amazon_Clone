import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../NavBar';
import ItemIndex from '../ItemIndex';
import * as itemsActions from '../../store/items';

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <NavBar />
            <ItemIndex />
        </div>
    )
}

export default HomePage;