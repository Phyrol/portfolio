import React, { useState } from 'react';
import './WorkInfo.css';

function WorkInfo(props) {
    return(
        <div className='job-panel'>
            <div id={`panel-${props.id}`} role='tab-panel' aria-labelledby={`tab-${props.id}`}>
                <h3>{props.position}</h3>
            </div>
        </div>
    );
}

export default WorkInfo;