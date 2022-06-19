import React, { useState } from 'react';
import Tab from '../Tab';
import { allJobs } from '../../Work/container/WorkContainer';

function TabListContainer(props) {
    // const [activeTab, setActiveTab] = useState('tab-0');

    // const handleTabChange = (e) =>
    // {
    //     setActiveTab(e.target.id);
    // }

    return(
        <div>
            {
                allJobs.map((element, index) => 
                    <Tab 
                        key={index}
                        company={element.company} 
                        position={element.position} 
                        responsibilities={element.responsibilities} 
                        id={index} 
                        isActive = {index == props.activeTab ? true : false}
                        onClick={props.onClick}
                    />
                )
            }
        </div>
    );
}

export default TabListContainer;