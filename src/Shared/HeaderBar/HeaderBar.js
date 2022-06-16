import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center justify-content-center">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/assets/files/resume/Bradley Potzka Resume.pdf`} target={"_blank"} rel='noreferrer'>Résumé</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            <Nav className="d-flex justify-content-center">
                <Nav.Item className='px-2 py-2'>
                    <a href="https://github.com/Phyrol" target={"_blank"} rel='noreferrer'>
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/socials/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png`} />
                    </a>
                </Nav.Item>
                <Nav.Item className='px-2 py-2'>
                    <a href="https://phyrol.itch.io/" target={"_blank"} rel='noreferrer'>
                        <Image height={32} width={32} src={`${process.env.PUBLIC_URL}/assets/images/socials/Itchio/logos/itchio-logo-textless-white.png`} />
                    </a>
                </Nav.Item>
                <Nav.Item className='px-2 py-2'>
                    <a href="https://www.linkedin.com/in/bradleypotzka/" target={"_blank"} rel='noreferrer'>
                        <Image size='tester' width={32} src={`${process.env.PUBLIC_URL}/assets/images/socials/LinkedIn/linkedIn.png`} />
                    </a>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default HeaderBar;