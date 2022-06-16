import React, { useState } from 'react';
import './Home.css';
import HeaderBar from '../Shared/HeaderBar/HeaderBar';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid className='main_container d-flex align-items-center justify-content-center'>
            <div>
                <div className='section_container'>
                    <div className='title_container d-flex align-items-center justify-content-center'>
                        <h1>Bradley Potzka</h1>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p>Software Developer, Game Developer</p>
                    </div>
                    <div className='link_container d-flex justify-content-center'>
                        <a href='https://www.linkedin.com/in/bradleypotzka/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>LinkedIn</a>
                        <p>|</p>
                        <a href='https://phyrol.itch.io/' className='text-decoration-none' target={"_blank"} rel='noreferrer'>itch.io</a>
                        <p>|</p>
                        <a href='https://github.com/Phyrol' className='text-decoration-none' target={"_blank"} rel='noreferrer'>GitHub</a>
                    </div>
                    
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h2>About</h2>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p>I am a passionate programmer with a focus on systems engineering. 
                            I have experience with Unreal Engine 4 and Unity game engine working on a variety of projects ranging in different designs. 
                            As a team lead for those different projects, I enforced best practices in revision control and Agile development.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;