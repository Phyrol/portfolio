import React from 'react';
import './Home.css';
import SocialNav from '../Shared/SocialNav/SocialNav';
import { Container } from 'react-bootstrap';
import AboutMe from '../Shared/AboutMe/AboutMe';
import ProjectMiniCardContainer from '../Shared/ProjectMiniCard/container/ProjectMiniCardContainer';
import Work from '../Shared/Work/Work';

function Home() {
    return (
        <main className='hero_container'>
            <section id='header' className='hero_StyledHeroSection'>
                <div>
                    <h1>Hi, my name is</h1>
                </div>
                <div>
                    <h2 className='big-heading'>Bradley Potzka</h2>
                </div>
                <div>
                    <h3 className='big-heading'>Software Developer, Game Developer</h3>
                </div>
                <SocialNav />
            </section>
            
            <section id='about' className='hero_StyledAboutSection'>
                    <h2 className='numbered-heading'>About Me</h2>
                <div className='section_container'>
                    <AboutMe />
                </div>
            </section>
            
            <section id='work' className='hero_StyledWorkSection'>
                <h2 className='numbered-heading'>Where I've Worked</h2>
                <Work />
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
        </main>
    );
}

export default Home;