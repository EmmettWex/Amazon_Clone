import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.css';

const Footer = () => {


    return (
        <div className="footer-wrapper">
            <div className="footer-section-1" onClick={e => {
                e.preventDefault();
                window.scrollTo(0,0);
            }}>
                <span className="back-to-top">Back to top</span>
            </div>
            <div className="footer-section-2">
                <div className="footer-section-2-content-wrapper">
                    <h1><a className="footer-personal-links" href="https://github.com/EmmettWex" target="_blank">Github</a></h1>
                </div>
                <div className="footer-section-2-content-divider"/>
                <div className="footer-section-2-content-wrapper">
                    <h1><a className="footer-personal-links" href="https://www.linkedin.com/in/emmett-wechsler-3477a9266/" target="_blank">LinkedIn</a></h1>
                </div>
                <div className="footer-section-2-content-divider" />
                <div className="footer-section-2-content-wrapper">
                    <h1><a className="footer-personal-links" href="https://wellfound.com/u/emmett-wechsler" target="_blank">Wellfound</a></h1>
                </div>
                <div className="footer-section-2-content-divider" />
                <div className="footer-section-2-content-wrapper">
                    <h1><a className="footer-personal-links" href="https://emmettw.dev/" target="_blank">Portfolio</a></h1>
                </div>
            </div>
            <div className="footer-section-3">
                <img className="footer-logo" src="https://amazonosrs-seeds.s3.amazonaws.com/OSRZon_white.png" />
            </div>
        </div>
    )
}

export default Footer;