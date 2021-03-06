import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/Projects.css'
import { list_of_projects } from '../data/Data.jsx'
import Modal from './Modal'

function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [oneProject, setOneProject] = useState(list_of_projects)
    const [modalId, setModalId] = useState()
    
    const Clicking = (e) => {
        console.log(e)
        setOpenModal(true)
        setModalId(e)
    }


    return (
        <div className="proj-master" id='projects'>
            <h2 className='mb-2 text-center'><strong>Recent Projects</strong></h2>
            <h4 className='text-center mb-4' style={{ color: 'gray'}}>A collection showcasing my interests </h4>
            <div className="proj-container">
                {oneProject.map((item, index)=> {
                    return(
                        <div className='proj-map mx-2 my-2' key={index} id={index} >
                            <button type='button' className="btn btn-link " onClick={() => Clicking(index)  }>
                                <div className="proj-card card">
                                    <img className='proj-img' src={item.thumbnail} style={{ width:250, height:250 }}/>
                                    <div className="proj-text card-text">
                                        <h3 className='title'>{item.title}</h3>
                                        <h5 className='description0'>{item.description0}</h5>
                                        <br/>
                                        <h4>+</h4>
                                    </div>
                                </div>
                            </button>
                            
                        </div>
                    )
                })}
                {openModal && <Modal id={modalId} closeModal={setOpenModal}/>}
            </div>
        </div>
    )
}

export default Projects