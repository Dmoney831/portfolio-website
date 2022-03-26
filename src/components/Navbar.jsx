import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

function Nav0() {
    return (
        <Navbar bg='dark' variant='dark' sticky='top' expand='sm' collapseOnSelect>
            <Navbar.Brand>
                <h1>Home</h1>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='#about'><h2>about</h2></Nav.Link>
                    <Nav.Link href='#projects'><h2>projects</h2></Nav.Link>
                    <Nav.Link href='#resume'><h2>resume</h2></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Nav0