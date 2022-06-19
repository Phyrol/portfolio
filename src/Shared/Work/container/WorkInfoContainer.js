import React, { useState } from 'react';
import WorkInfo from '../WorkInfo';
import { allJobs } from './WorkContainer';

function WorkInfoContainer(props) {

    const activeJob = allJobs[props.activeTab];

    return(
            <WorkInfo company={activeJob.company} position={activeJob.position} responsibilities={activeJob.responsibilities} />
    );
}

export default WorkInfoContainer;