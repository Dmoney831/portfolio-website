import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Sample from '../images/11.png'
import Triton from '../images/triton.png'
import Show_Us from '../images/show_us.png'
import BJ from '../images/BJ.png'
import PP from '../images/PP.png'
import easyPeasy from '../images/easyPeasy.png'
import './style/Projects.css'
import { list_of_projects } from '../data/Data.jsx'
import Modal from './Modal'

function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [oneProject, setOneProject] = useState(list_of_projects)
    

    return (
        <div className="proj-master text-center  mt-5">
            <h2><strong>Projects</strong></h2>
            <h4>A collection of creative production </h4>
            <div className="proj-container">
                {oneProject.map((item, index)=> {
                    return(
                        <div className='proj-map mx-2 my-2'key={index} >
                            <button type='button' className="btn btn-link " onClick={() => setOpenModal(true)}>
                                <div className=" proj-card card">
                                    <img className='proj-img' src={item.thumbnail} style={{ width:250, height:250 }}/>
                                    <div className="proj-text card-text">
                                        <h3 className='title'>{item.title}</h3>
                                        <h5 className='description'>description</h5>
                                        <br/>
                                        <h4>+</h4>
                                    </div>
                                </div>
                            </button>
                            
                            {openModal && <Modal closeModal={setOpenModal}/>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects