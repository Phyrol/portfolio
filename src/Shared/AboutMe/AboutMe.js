import React, { useState } from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='about_me'>
            <div>
            <p>I am a passionate programmer with a focus on systems engineering. 
                I have experience with Unreal Engine 4 and Unity game engine working on a variety of projects ranging in different designs. 
                As a team lead for those different projects, I enforced best practices in revision control and Agile development.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <ul className='skills-list'>
                <li>
                    React
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    HTML
                </li>
                <li>
                    C#
                </li>
            </ul>
        </div>
    );
}

export default AboutMe;