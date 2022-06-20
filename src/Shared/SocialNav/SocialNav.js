import React, { useState } from 'react';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import './SocialNav.css';

function SocialNav() {
    return (
        <div className='link_container'>
            <p>
                <span>
                    <a href='mailto:bradleypotzka39@gmail.com' className='text-decoration-none'>bradleypotzka39@gmail</a>
                    &nbsp;|&nbsp;
                    
                    (480) 440-5081
                    &nbsp;|&nbsp;
                    
                    <a href='https://github.com/Phyrol' className='text-decoration-none' target={"_blank"} rel='noreferrer'>GitHub</a>
                    &nbsp;|&nbsp;
                    
                    <a href='https://phyrol.itch.io/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>itch.io</a>
                    &nbsp;|&nbsp;
                    
                    <a href='https://www.linkedin.com/in/bradleypotzka/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>LinkedIn</a>
                </span>
            </p>
        </div>
    );
}

export default SocialNav;