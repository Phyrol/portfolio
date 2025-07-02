import React, { useState } from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='about_me'>
            <div>
            <p>Results-driven Frontend Engineer with experience building scalable and intuitive web applications at Amazon. 
                Demonstrated ability to lead complex projects end-to-end, mentor cross-functional teams, and improve system reliability and customer experience. 
                Skilled in TypeScript, JavaScript, React, Cypress, and AWS tools. 
                Adept at problem-solving in ambiguous environments, driving process improvements, and implementing performance-optimized UI features.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <ul className='skills-list'>
                <li>
                    TypeScript
                </li>
                <li>
                    React
                </li>
                <li>
                    Redux
                </li>
                <li>
                    SQL
                </li>
            </ul>
        </div>
    );
}

export default AboutMe;