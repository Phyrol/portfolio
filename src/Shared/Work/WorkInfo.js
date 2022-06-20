import React from 'react';
import './WorkInfo.css';

function WorkInfo(props) {
    return(
        <div className='job-panel' id={`panel-${props.id}`} role='tabpanel' tabIndex={0} aria-labelledby={`tab-${props.id}`} hidden={props.isActive ? false : true}>
                <h3>
                    <span>{props.position}</span>
                    <span>@</span>
                    <a href={`${props.link}`} className='text-decoration-none' target={"_blank"} rel='noopener noreferrer'>
                        {props.company}
                    </a>
                </h3>
                
                <p className='range'>{props.date}</p>
                <ul>
                    {
                        props.responsibilities.map((element, index) =>
                            <li key={index} className='description'>
                                {element}
                            </li>
                        )
                    }
                </ul>
        </div>
    );
}

export default WorkInfo;