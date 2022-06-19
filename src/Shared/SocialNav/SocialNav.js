import React, { useState } from 'react';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import './SocialNav.css';

function SocialNav() {
    return (
        <div className='link_container d-flex justify-content-center'>
            <a href='mailto:bradleypotzka39@gmail.com' className='text-decoration-none'>bradleypotzka39@gmail</a>
            <p>|</p>
            <p className='phone_number'>(480) 440-5081</p>
            <p>|</p>
            <a href='https://github.com/Phyrol' className='text-decoration-none' target={"_blank"} rel='noreferrer'>GitHub</a>
            <p>|</p>
            <a href='https://phyrol.itch.io/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>itch.io</a>
            <p>|</p>
            <a href='https://www.linkedin.com/in/bradleypotzka/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>LinkedIn</a>
        </div>
    );
}

export default SocialNav;