import React, { useState } from 'react';
import './SocialNav.css';

function SocialNav() {
    return (
        <div className='link_container d-flex justify-content-center'>
            <a href='https://www.linkedin.com/in/bradleypotzka/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>LinkedIn</a>
            <p>|</p>
            <a href='https://phyrol.itch.io/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>itch.io</a>
            <p>|</p>
            <a href='https://github.com/Phyrol' className='text-decoration-none' target={"_blank"} rel='noreferrer'>GitHub</a>
        </div>
    );
}

export default SocialNav;