import React from 'react';
import WorkInfo from '../WorkInfo';

function WorkInfoContainer(props) {

    const activeJob = props.allJobs[props.activeTab];

    console.log(props.activeTab);

    return(
            <WorkInfo 
                company={activeJob.company} 
                position={activeJob.position} 
                link={activeJob.link} 
                date={activeJob.date} 
                responsibilities={activeJob.responsibilities}
            />
    );
}

export default WorkInfoContainer;