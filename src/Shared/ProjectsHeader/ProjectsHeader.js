import React, { useState } from 'react';
import './ProjectsHeader.css';

function ProjectsHeader() {
    return(
        <div className='d-flex align-items-center justify-content-center'>
            <a href='#projects' className='text-decoration-none'>
                <h1>Projects</h1>
            </a>
        </div>
    );
}

export default ProjectsHeader;