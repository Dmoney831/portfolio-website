import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import './style/Navbar.css'



function Nav0() {
    return (
            <Navbar className='main'  variant='dark' sticky='top' >
                <Nav className='px-5'>
                    <Nav.Link href='#home'><h5 className='text'>Home</h5></Nav.Link>
                    <Nav.Link href='#about'><h5 className='text'>About</h5></Nav.Link>
                    <Nav.Link href='#projects'><h5 className='text'>Projects</h5></Nav.Link>
                    <Nav.Link href='#resume'><h5 className='text'>Resume</h5></Nav.Link>
                </Nav>

            </Navbar>
    )
}

export default Nav0