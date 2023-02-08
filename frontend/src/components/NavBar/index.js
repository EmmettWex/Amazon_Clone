import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/images/navbar_logo.png';
import location from '../../assets/images/navbar_location_marker.png';
import NavBarLinks from './NavBarLinks';
import SearchBar from '../SearchBar';

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-top">
                <img id="navbar-logo" src={logo}></img>
                <div className="navbar-location-display">
                    <img id="navbar-location-icon" src={location}></img>
                    <div id="navbar-location-textbox-wrapper">
                        <p id="navbar-hello">Hello</p>
                        <p id="navbar-welcome">Welcome to Gielinor</p>
                    </div>
                </div>
                <SearchBar />
            </div>
            <NavBarLinks />
        </div>
    )
}

export default NavBar;