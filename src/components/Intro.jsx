import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import './style/Intro.css'

function Intro () {
    return (
        <div className='intro border-0'>
            <div className='sub0'>
                <h4>About</h4>
                <h5>Hello guests. My name is Derek Lee, and I'm a realist dreamer. What does that mean? I don't stop dreaming or thinking about "What if..." <br/> More specific? It's not an absurd dream. I do mining innovative and creative to reach a goal via measurable plan and realizable idea.  
                    I’m a multi-faceted software engineer with a diverse background ranging from mathematics to business banking. My passion is building cross-functional skills to drive alignment to a designing core application logic, construct data operating engines, and drive effective engineering languages execution.A natural trooper with a strong agile mindset, and loves to work in a fast paced and collaborative & cooperative environment. Creating remarkable solutions to benefit clients and company mirrors my value, and I always strive hard to deliver it consistently.</h5>
            </div>
            <div className='sub1'>
                <h4>Profile</h4>
                <h5>I'm currently seeking a place/team to make a full time contribution with my software engineering skills anywhere in US. Please don't hesitate to contact me if I'm a good fit for your team.</h5>
                <h5>Constellation: Virgo</h5>
                <h5>Email: dyklee89@gmail.com</h5>
            </div>
            <div className='sub2'>
                <h4>Skills</h4>
                <h5>I'm an independent teamworker strong in research and coding. My interests are algorithms, machine learning, and quants. Below are highlights of my tech skills.</h5>
                <h5>Languages: Python, JavaScript, HTML, CSS</h5>
                <h5>Libraries & Frameworks: React, Django, Express.js, Node.js</h5>
                <h5>Database: MongoDB, PostgreSQL</h5>
                <h5>Tools: Git, Heroku, Netlify</h5>
            </div>

        </div>
    )
}

export default Intro