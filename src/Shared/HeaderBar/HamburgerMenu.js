import React from 'react';
import './HamburgerMenu.css';

function HamburgerMenu(props) {
    return(
        <div className={`${props.menuActive ? 'menu_active' : 'menu_inactive'} menu_StyledMenu`}>
            <div>
                <button onClick={props.onClick} aria-label='Menu' className='menu_StyledHamburgerButton'>
                    <div className='ham-box'>
                        <div className='ham-box-inner'>
                        </div>
                    </div>
                </button>
                <aside aria-hidden={props.menuActive ? 'false' : 'true'} tabIndex={props.menuActive ? 0 : -1} className={`${props.menuActive ? 'styledSidebar_active' : 'styledSidebar_inactive'}`}>
                    <nav>
                        <ol>
                            <li>
                                <a onClick={props.onClick} href='/#about'>About</a>
                            </li>
                            <li>
                                <a onClick={props.onClick} href='/#work'>Experience</a>
                            </li>
                            <li>
                                <a onClick={props.onClick} href='/#projects'>Projects</a>
                            </li>
                        </ol>
                        <a className='resume-button' href={`${process.env.PUBLIC_URL}/assets/files/resume/Bradley Potzka Resume.pdf`} target={"_blank"} rel='noreferrer'>Resume</a>
                    </nav>
                </aside>
            </div>
        </div>
    );
}

export default HamburgerMenu;