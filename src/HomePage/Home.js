import React from 'react';
import './Home.css';
import SocialNav from '../Shared/SocialNav/SocialNav';
import { Container } from 'react-bootstrap';
import AboutMe from '../Shared/AboutMe/AboutMe';
import ProjectMiniCardContainer from '../Shared/ProjectMiniCard/container/ProjectMiniCardContainer';
import Work from '../Shared/Work/Work';

function Home() {
    return (
        <Container fluid className='main_container d-flex align-items-center justify-content-center'>
            <div className='hero_container'>
                <section id='header' className='hero_StyledHeroSection'>
                    <div className='section_container'>
                        <div className='title_container d-flex align-items-center justify-content-center'>
                            <h1>Bradley Potzka</h1>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <p>Software Developer, Game Developer</p>
                        </div>
                        <SocialNav />
                    </div>
                </section>
                
                <section id='about' className='hero_StyledAboutSection'>
                    <div className='numbered-heading'>
                        <h2>About Me</h2>
                    </div>
                    <div className='section_container d-flex align-items-center justify-content-center'>
                        <AboutMe />
                    </div>
                </section>
                
                <section id='work' className='hero_StyledWorkSection'>
                    <div className='numbered-heading'>
                        <h2>Where I've Worked</h2>
                    </div>
                    <div className='section_container d-flex align-items-center justify-content-center'>
                        <div className='work_container'>
                            <Work />
                        </div>
                    </div>
                </section>
                
                <section id='projects' className='hero_StyledProjectSection'>
                    <div className='numbered-heading'>
                        <h2>Projects</h2>
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
                </section>

            </div>
        </Container>
    );
}

export default Home;