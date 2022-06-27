import React from 'react';
import './Home.css';
import SocialNav from '../Shared/SocialNav/SocialNav';
import AboutMe from '../Shared/AboutMe/AboutMe';
import ProjectMiniCardContainer from '../Shared/ProjectMiniCard/container/ProjectMiniCardContainer';
import Work from '../Shared/Work/Work';

function Home() {
    return (
        <main className='hero_container fillHeight'>
            <section id='header' className='hero_StyledHeroSection'>
                <div>
                    <h1>Hi, my name is</h1>
                </div>
                <div>
                    <h2 className='biggest-heading'>Bradley Potzka</h2>
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
            
            <section id='projects'>
                
                <h2 className='numbered-heading'>Projects</h2>

                <ul className='project-list'>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={0} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={1} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={2} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={3} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={4} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={5} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={6} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={7} />
                    </li>
                    <li className='project-list-item'>
                        <ProjectMiniCardContainer proj={8} />
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Home;