import React, { useState } from 'react';
import './WorkInfo.css';

function WorkInfo(props) {
    return(
        <div className='job-panel'>
            <div id={`panel-${props.id}`} role='tab-panel' aria-labelledby={`tab-${props.id}`}>
                <h3>{props.position}</h3>
                <p className='range'>{props.date}</p>
                <ul>
                    {
                        props.responsibilities.map((element, index) =>
                            <li key={index}>
                                {element}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default WorkInfo;