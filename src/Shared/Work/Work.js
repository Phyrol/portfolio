import React, { useState } from 'react';
import './Work.css';
import Tab from '../TabList/Tab';
import WorkInfo from './WorkInfo';

const allJobs = [
    {
        company: 'Amazon Web Services (AWS)',
        position: 'Frontend Engineer II (promoted from L4) – SageMaker JumpStart & Fault Injection Service Console',
        link: 'https://aws.amazon.com/',
        date: '2022 - Present',
        responsibilities: [
            'Created a Python-based HuggingFace URL validator with multi-threading and caching to reduce manual updates and metadata errors.', 
            'Built a CloudWatch-style log viewer in the training job UI with polling, search, and efficient rendering.',
            'Developed an integration test client to dynamically fetch region-available models; coordinated SDK compatibility updates across 5+ teams.',
            'Proposed and implemented a React-Hook-Form refactor for the core FIS Console form to improve maintainability.',
            'Took over and delivered a key feature (Safety Lever) and completed ORR, F&F, MCM, and final UX approvals for an on-time launch.',
            'Designed and led ESLint migration across the FIS Console package, replacing deprecated TSLint and enforcing standards through CR linting.'
        ]
    },
    {
        company: 'Garmin - AeroData',
        position: 'Software Engineer Intern',
        link: 'https://www.aerodata.co/en-US/',
        date: '2021',
        responsibilities: [
            'Used ASP.NET Core MVC to develop a web application to exercise the functionality in an existing library that is currently utilized by a console application.', 
            'Utilized NuGet packages, JSON serialization/deserialization, and EF Core database access.',
            'Extended functionality of current enterprise logging that utilizes Log4Net by modifying the existing library to use a TCP connection with serialization/deserialization to log events.',
            'Followed agile development with daily stand-up meetings to discuss sprint tasks and roadblocks.'
        ]
    },
    {
        company: 'Heatwave Studio',
        position: 'Systems Engineer',
        link: 'https://heatwave-studios.itch.io/',
        date: '2019 - 2022',
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
        date: '2016 - 2018',
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