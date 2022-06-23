import React from 'react';
import './ProjectMiniCard.css';
import { Card, Col, Row } from 'react-bootstrap';
import { LinkExternalIcon, MarkGithubIcon } from '@primer/octicons-react';

function ProjectMiniCard(props) {

    let thumbnailDisplay =
        <div className='thumbnail'>
            <a href={`${props.download}`} target={"_blank"} rel='noreferrer'>
                <img src={props.src} />
            </a> 
        </div>
                   

    let infoDisplay =
        <div className='content'>
            <div className='d-flex align-items-center'>
                <h3 className='title'>
                    <a href={`${props.download}`} target={"_blank"} rel='noreferrer'>
                        {props.title}
                    </a>
                </h3>

                <p className='tools'>
                    {props.tools}
                </p>
            </div>              
            
            <ul>
                <p className='col align-self-center'>
                    <li>
                        Shipped: {props.shipped}
                    </li>
                    <li>
                        Team Size: {props.teamSize}
                    </li>
                    <li>
                        Platform: {props.platform}
                    </li>
                    <li>
                        Position: {props.position}
                    </li>
                    <li>
                        Genre: {props.genre}
                    </li>
                </p>
            </ul>
            <div className='project-links'>
                <span>
                    <a href={`${props.github}`} target={"_blank"} rel='noreferrer'>
                        <MarkGithubIcon size={24} />
                    </a>
                    <a href={`${props.download}`} target={"_blank"} rel='noreferrer'>
                        <LinkExternalIcon size={24} />
                    </a>
                </span>
            </div>
        </div>

return(
    <div className='project-card'>
            {props.imageIsLeft ?
                thumbnailDisplay : infoDisplay
            }
            {props.imageIsLeft ?
                infoDisplay : thumbnailDisplay
            }
    </div>
);
}

export default ProjectMiniCard;