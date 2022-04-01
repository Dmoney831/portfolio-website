import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import './style/Navbar.css'



function Nav0() {
    
    return (
            <Navbar className='main'  variant='dark' sticky='top' >
                <Nav className='main0 mt-1 px-5'>

                    <Link to={'/home'} style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}>
                        <h5 className='nav-home px-2' >Home</h5>
                    </Link>
                    
                    <ScrollLink to='profile' spy={true} smooth={true} offset={-50} duration={50} style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}>
                        <h5 className='nav-about px-2'>About</h5>
                    </ScrollLink>
                 
                    <ScrollLink to='projects' spy={true} smooth={true} offset={-50} duration={50} style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}>
                        <h5 className='nav-projects px-2'>Projects</h5>
                    </ScrollLink>

                    <Link to={'/'} href='#resume' style={{ color: 'rgb(255, 249, 215)', textDecoration: 'none'}}><h5 className='nav-resume px-2'>Resume</h5></Link>
                </Nav>
            </Navbar>
    )
}

export default Nav0