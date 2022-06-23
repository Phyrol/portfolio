import React, { useState } from 'react';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <header className='nav_StyledHeader'>
            <nav className='nav_StyledNav'>
                <div className='nav_StyledLinks'>
                    <ol>
                        <li style={{transitionDelay: 0}}>
                            <a href='/#about'>About</a>
                        </li>
                        <li style={{transitionDelay: 100}}>
                            <a href='/#work'>Experience</a>
                        </li>
                        <li style={{transitionDelay: 200}}>
                            <a href='/#projects'>Projects</a>
                        </li>
                    </ol>
                    <div>
                        <a class='resume-button' href={`${process.env.PUBLIC_URL}/assets/files/resume/Bradley Potzka Resume.pdf`} target={"_blank"} rel='noreferrer'>Resume</a>
                    </div>
                </div>
                <div className='nav_StyledImages'>
                    <a href="mailto:bradleypotzka39@gmail.com" target={"_blank"} rel='noreferrer'>
                        <img className='header-image' src={`${process.env.PUBLIC_URL}/assets/images/socials/Mail/mail.png`} />
                    </a>
                    <a href="https://github.com/Phyrol" target={"_blank"} rel='noreferrer'>
                        <img className='header-image' src={`${process.env.PUBLIC_URL}/assets/images/socials/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png`} />
                    </a>
                    <a href="http://phyrol.itch.io/" target={"_blank"} rel='noreferrer'>
                        <img className='header-image' src={`${process.env.PUBLIC_URL}/assets/images/socials/Itchio/logos/itchio-logo-textless-white.png`} />
                    </a>
                    <a href="https://www.linkedin.com/in/bradleypotzka/" target={"_blank"} rel='noreferrer'>
                        <img className='header-image' src={`${process.env.PUBLIC_URL}/assets/images/socials/LinkedIn/linkedIn.png`} />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default HeaderBar;