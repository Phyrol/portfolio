import React from 'react';
import './ProjectMiniCard.css';
import { Card, Col, Row } from 'react-bootstrap';

function ProjectMiniCard(props) {

    let thumbnailDisplay =
        <Col md='5' className='d-flex align-items-center justify-content-center'>
            <a href={`${props.download}`} target={"_blank"} rel='noreferrer'>
                <Card.Img className='thumbnail' src={props.src} />
            </a>            
        </Col>

    let infoDisplay =
        <Col md='7' className='d-flex align-items-center justify-content-center info'>
            <Card.Body>
                <div className='d-flex align-items-center'>
                    <a href={`${props.download}`} target={"_blank"} rel='noreferrer' className='text-decoration-none'>
                        <Card.Title className='title'>{props.title}</Card.Title>
                    </a>

                    <Card.Text className='tools'>
                        {props.tools}
                    </Card.Text>
                </div>              
                
                <ul className='text'>
                    <li>
                        <Card.Text>
                            Shipped: {props.shipped}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Team Size: {props.teamSize}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Platform: {props.platform}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Position: {props.position}
                        </Card.Text>
                    </li>
                    <li>
                        <Card.Text>
                            Genre: {props.genre}
                        </Card.Text>
                    </li>
                </ul>
                <Card.Link href={`${props.github}`} target={"_blank"} rel='noreferrer'>GitHub</Card.Link>
                <Card.Link href={`${props.download}`} target={"_blank"} rel='noreferrer'>Download</Card.Link>
            </Card.Body> 
        </Col>

return(
    <div>
        <Card border='dark'>
            <Row>
                {props.imageIsLeft ?
                    thumbnailDisplay : infoDisplay
                }
                {props.imageIsLeft ?
                    infoDisplay : thumbnailDisplay
                }
            </Row>
        </Card>
    </div>
);
}

export default ProjectMiniCard;