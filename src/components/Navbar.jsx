import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import './style/Navbar.css'



function Nav0() {
    const aboutSection = useRef(null);
    const gotoAboutSection = () => 
        window.scrollTo({ 
            top: aboutSection.current.offsetTop,
            behavior: 'smooth' 
        })

    return (
            <Navbar className='main'  variant='dark' sticky='top' >
                <Nav className='main0 mt-1 px-5'>
                    <Link to={'/'} href='#home' style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}><h5 className='nav-home px-2' >Home</h5></Link>
                    <Link to={'about'} href='#about' style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}><h5 className='nav-about px-2'>About</h5></Link>
                    <Link to={'projects'} href='#projects' style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}><h5 className='nav-projects px-2'>Projects</h5></Link>
                    <Link to={'/'} href='#resume' style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}><h5 className='nav-resume px-2'>Resume</h5></Link>
                </Nav>

            </Navbar>
    )
}

export default Nav0