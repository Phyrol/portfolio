import React, { useState } from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <h2>About Me</h2>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <p>I am a passionate programmer with a focus on systems engineering. 
                    I have experience with Unreal Engine 4 and Unity game engine working on a variety of projects ranging in different designs. 
                    As a team lead for those different projects, I enforced best practices in revision control and Agile development.</p>
            </div>
        </div>
        
    );
}

export default AboutMe;