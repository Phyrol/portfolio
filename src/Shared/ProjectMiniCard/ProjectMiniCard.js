import React, { useState } from 'react';
import './ProjectMiniCard.css';
import { Card, Button, Col, Row, ListGroup } from 'react-bootstrap';

function ProjectMiniCard(props) {

    let thumbnailDisplay =
        <Col md='5' className='d-flex align-items-center justify-content-center'>
            <Card.Img className='thumbnail' src={props.src} />
        </Col>

    let infoDisplay =
        <Col md='7'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <ul>
                    <li>
                        <Card.Text>
                            {props.tools}
                        </Card.Text>
                    </li>
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
                <a href={props.download} target={"_blank"} rel='noreferrer'>
                    <p>Download</p>
                    <Card.Link href={props.download} target={"_blank"} rel='noreferrer'>Download</Card.Link>
                </a>
                <Card.Link href={props.download} target={"_blank"} rel='noreferrer'>Download</Card.Link>
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