import React, { useState } from 'react';
import './Home.css';
import HeaderBar from '../Shared/HeaderBar/HeaderBar';
import SocialNav from '../Shared/SocialNav/SocialNav';
import { Container, Row, Col } from 'react-bootstrap';
import AboutMe from '../Shared/AboutMe/AboutMe';
import ProjectsHeader from '../Shared/ProjectsHeader/ProjectsHeader';
import ProjectMiniCardContainer from '../Shared/ProjectMiniCard/container/ProjectMiniCardContainer';

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
                    <SocialNav />
                </div>
                <div className='section_container'>
                    <AboutMe />
                </div>
                <div className='section_container'>
                    <ProjectsHeader />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={0} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={1} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={2} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={3} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={4} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={5} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={6} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={7} />
                </div>
                <div className='section_container'>
                    <ProjectMiniCardContainer proj={8} />
                </div>
            </div>
        </Container>
    );
}

export default Home;