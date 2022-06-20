import React from 'react';
import './Tab.css';

function Tab(props) {

    return (
        <button
            label={props.id}
            id={`tab-${props.id}`} 
            role='tab' 
            aria-selected={props.isActive ? true : false}
            tabIndex={props.isActive ? 0 : -1}
            aria-controls={`panel-${props.id}`} 
            onClick={props.onClick} 
            className={props.isActive ? 'active job-button' : 'job-button'}
        >
            <span>{props.company}</span>
        </button>
    );
}

export default Tab;