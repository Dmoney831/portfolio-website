import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import './style/Intro.css'
import profile from '../images/profile.JPG'

function Intro() {
    return (
        <div className='intro'>
            <div className="parent col-md-3 col-md-10 ">
                <div className="div1 "> 
                    <h1 className='my-4 px-5 text-center'>Hello guests,</h1>
                    <div className='div2'>
                        <div className="div3"> 
                            <img className='profile-img' src={profile}/>
                        </div>
                        <div className='div4 py-4 mb-5' style={{marginLeft:30}}>
                            <h3>My name is,</h3>
                            <h1 style={{ color: 'gold'}}><strong>Derek Lee</strong></h1>
                            <h3>Software Engineer.</h3> <br/> 
                            <h5>I'm a Software Engineer who do mining innovative and creative to reach a goal via measurable plan and realizable idea. My primary interest lies in using efficient computation and cloud computing platforms.</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
             
    )
}

export default Intro



{/* <div class="div3"> 
                    <h5>Hello guests. My name is Derek Lee, and I'm a realist dreamer. What does that mean? I don't stop dreaming or thinking about "What if..." <br /> More specific? It's not an absurd dream. I do mining innovative and creative to reach a goal via measurable plan and realizable idea.
                    I’m a multi-faceted software engineer with a diverse background ranging from mathematics to business banking. My passion is building cross-functional skills to drive alignment to a designing core application logic, construct data operating engines, and drive effective engineering languages execution.A natural trooper with a strong agile mindset, and loves to work in a fast paced and collaborative & cooperative environment. Creating remarkable solutions to benefit clients and company mirrors my value, and I always strive hard to deliver it consistently.</h5>
                </div>
                <div class="div4"> 
                    <Button>Contact</Button>
                    <Button>Resume</Button>
                </div>
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
            </div> */}