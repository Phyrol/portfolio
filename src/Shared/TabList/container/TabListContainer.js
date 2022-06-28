import React from 'react';
import Tab from '../Tab';

function TabListContainer(props) {

    return(
        <div>
            {props.allJobs &&
                props.allJobs.map((element, index) =>
                    <Tab 
                        key={index}
                        company={element.company} 
                        position={element.position} 
                        responsibilities={element.responsibilities} 
                        id={index} 
                        isActive = {index === props.activeTab ? true : false}
                        onClick={props.onClick}
                    />
                )
            }
        </div>
    );
}

export default TabListContainer;