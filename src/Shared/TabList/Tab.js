import React, { useState } from 'react';
import './Tab.css';

export default function Tab(props) {

    return (
        <div className='job-button'>
            <button id={`tab-${props.id}`} role='tab' aria-controls={`panel-${props.id}`} onClick={props.onClick} className={props.isActive ? 'active' : ''}>
                {props.company}
            </button>
        </div>
    );
}