import React, { useEffect, useState } from 'react';
import TabListContainer from '../../TabList/container/TabListContainer';
import Work from '../Work';
import WorkInfoContainer from './WorkInfoContainer';

export const allJobs = [
    {
        company: 'Garmin - AeroData',
        position: 'Software Engineer Intern',
        date: 'May 2021 - December 2021',
        responsibilities: [
            'Used ASP.NET Core MVC to develop a web application to exercise the functionality in an existing library that is currently utilized by a console application.', 
            'Utilized NuGet packages, JSON serialization/deserialization, and EF Core database access.',
            'Extended functionality of current enterprise logging that utilizes Log4Net by modifying the existing library to use a TCP connection with serialization/deserialization to log events from clients.',
            'Followed agile development with daily stand-up meetings to discuss sprint tasks and roadblocks.'
        ]
    },
    {
        company: 'Heatwave Studio',
        position: 'Systems Engineer',
        date: 'August 2019 - May 2022',
        responsibilities: [
            'Followed agile development standards, fixed bugs during development and in production.', 
            'Worked with design, sound, and art teams across the studio to ensure successful design and implementation of core game mechanics.',
            'Communicated effectively to game directors during agile planning meetings.',
            'Coordinated with other engineers to implement desired game mechanics efficiently.'
        ]
    },
    {
        company: 'Mesa Public Schools',
        position: 'IT Intern',
        date: 'May 2016 - August 2018',
        responsibilities: [
            'Worked with peers to diagnose and repair laptops and projectors.',
            'Researched challenging issues to find a satisfactory solution.',
            'Excelled in effective and positive communication with faculty to resolve technical issues.',
            'Exhibited time management to complete project requirements.'
        ]
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