import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Sample from '../images/11.png'
import Triton from '../images/triton.png'
import Show_Us from '../images/show_us.png'
import BJ from '../images/BJ.png'
import PP from '../images/PP.png'
import easyPeasy from'../images/easyPeasy.png'
import './style/Projects.css'
import {list_of_projects} from '../data/Data.jsx'


function Projects() {
    const projectsObject = list_of_projects.map((item, idx) => {
        return (
            <div key={idx}>
                <h1>{item.title}</h1>
            </div>
        )
    })
    return (
        <section className='mb-5'>
            <div className='proj0'>
                <div className='proj1'>
                    <h4>Projects</h4>
                    <h5>List of Creations</h5>
                    {projectsObject}
                </div>
                <div className='proj-cards'>
                    <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
                        <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={Triton} />
                    </Card>
                    <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
                        <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={Show_Us} />
                    </Card>
                    <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
                        <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={BJ} />
                    </Card>
                    <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
                        <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={easyPeasy} />
                    </Card>
                    <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
                        <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={PP} />
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Projects