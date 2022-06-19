import React, { useState } from 'react';
import './Work.css';
import TabListContainer from '../TabList/container/TabListContainer';
import WorkInfoContainer from './container/WorkInfoContainer';

function Work(props) {

    // const jobDescription =
    //     <div id={`panel-${props.id}`} role='tab-panel' aria-labelledby={`tab-${props.id}`}>
    //         <h3>{props.position}</h3>
    //     </div>

    return(
        <div>
            <div className='work'>
                <div className='job-tabs'>
                    <TabListContainer onClick={props.onClick} activeTab={props.activeTab}/>
                </div>
                <div className='job-panels'>
                    <WorkInfoContainer activeTab={props.activeTab}/>
                </div>
            </div>

            {/* <div role='tablist'>
                <div className='job-button'>
                    <button id={`tab-${props.id}`} role='tab' aria-controls={`panel-${props.id}`} onClick={props.onClick} className={props.isActive ? 'active' : ''}>
                        {props.company}
                    </button>
                </div>
            </div>
            <div>
                {
                    props.isActive && jobDescription
                }
            </div> */}
        </div>
    )
}

export default Work;