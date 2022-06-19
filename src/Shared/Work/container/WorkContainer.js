import React, { useEffect, useState } from 'react';
import TabListContainer from '../../TabList/container/TabListContainer';
import Work from '../Work';
import WorkInfoContainer from './WorkInfoContainer';

export const allJobs = [
    {
        company: 'Garmin - AeroData',
        position: 'Software Engineer Intern',
        responsibilities: ['description 1', 'description 2']
    },
    {
        company: 'Heatwave Studio',
        position: 'Systems Engineer',
        responsibilities: ['description 1 HS', 'description 2 HS']
    },
];

function WorkContainer() {

const [activeTab, setActiveTab] = useState(0);

const handleTabChange = (e) =>
{
    let clickedId = e.target.id.substring(4);
    setActiveTab(clickedId);
}
//console.log(activeTab);

    return(
        <div>
            <Work onClick={handleTabChange} activeTab={activeTab} />
            {/* <div>
                <TabListContainer onClick={handleTabChange} activeTab={activeTab}/>
            </div>
            <div>
                <WorkInfoContainer activeTab={activeTab}/>
            </div> */}
            
            
            {
                // allJobs.map((element, index) => 
                //     <Work 
                //         key={index}
                //         company={element.company} 
                //         position={element.position} 
                //         responsibilities={element.responsibilities} 
                //         id={index} 
                //         isActive = {`tab-${index}` === activeTab ? true : false}
                //         onClick={handleTabChange}
                //     />
                // )
            }
        </div>
    );
}

export default WorkContainer;