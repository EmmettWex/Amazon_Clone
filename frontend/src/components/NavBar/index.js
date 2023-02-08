import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/images/navbar_logo.png';
import location from '../../assets/images/navbar_location_marker.png';
import NavBarLinks from './NavBarLinks';

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-top">
                <img id="navbar-logo" src={logo}></img>
                <div className="navbar-location">
                    <img id="navbar-location-icon" src={location}></img>
                    <div className="navbar-location-textbox">
                        <span id="navbar-hello">Hello</span>
                        <br></br>
                        <span id="navbar-welcome">Welcome to Gielinor</span>
                    </div>
                </div>
            </div>
            <NavBarLinks />
            {/* navbar bottom is links, might be a separate component */}
        </div>
    )
}

export default NavBar;