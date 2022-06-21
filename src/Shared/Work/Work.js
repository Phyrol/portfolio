import React, { useState } from 'react';
import './Work.css';
import TabListContainer from '../TabList/container/TabListContainer';
import WorkInfoContainer from './container/WorkInfoContainer';
import Tab from '../TabList/Tab';
import WorkInfo from './WorkInfo';

const allJobs = [
    {
        company: 'Garmin - AeroData',
        position: 'Software Engineer Intern',
        link: 'https://www.aerodata.co/en-US/',
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
        link: 'https://heatwave-studios.itch.io/',
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
        link: 'https://www.mpsaz.org/',
        date: 'May 2016 - August 2018',
        responsibilities: [
            'Worked with peers to diagnose and repair laptops and projectors.',
            'Researched challenging issues to find a satisfactory solution.',
            'Excelled in effective and positive communication with faculty to resolve technical issues.',
            'Exhibited time management to complete project requirements.'
        ]
    },
];

function Work() {

    const [activeTab, setActiveTab] = useState(0);

    function handleTabChange(e, index)
    {
        setActiveTab(index);
    }

    return(
        <div className='work'>
            <div role='tablist' className='job-tabs'>
                {
                    allJobs.map((element, index) =>
                        <Tab 
                            key={index}
                            company={element.company} 
                            id={index} 
                            isActive = {index === activeTab ? true : false}
                            onClick={(e) => handleTabChange(e, index)}
                        />
                    )
                }
            </div>
            <div className='job-panels'>
                {
                    allJobs.map((element, index) =>
                        <WorkInfo 
                            key={index}
                            id={index}
                            company={element.company} 
                            position={element.position} 
                            link={element.link} 
                            date={element.date} 
                            responsibilities={element.responsibilities}
                            isActive = {index === activeTab ? true : false}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Work;