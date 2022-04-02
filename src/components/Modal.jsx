import React from 'react'
import { list_of_projects } from '../data/Data.jsx'
import './style/Modal.css'

function Modal({id, closeModal }) {
    // console.log(list_of_projects[id])

    return (
        <div className="modal-main">
        
            <img className='modal-img' src={list_of_projects[id].thumbnail} />
            <div className='modal-card'>
                <div className='modal-info mt-2'>
                    <div className='modal-title-wrap'>
                        <h4 className="modal-title"><strong>{list_of_projects[id].title}</strong></h4>
                    </div>
                    <div className='modal-body'>
                        Used Tech:&nbsp;
                        <div className='tech-wrap'>
                            {list_of_projects[id].tech.map((item, idx)=> {
                                return(
                                        <p className="tech" key={idx}>{item}&nbsp;</p>  
                                )
                            })}
                        </div>
                        
                        <p className="description">{list_of_projects[id].description1}</p>
                    </div >
                    <div className="modal-button">
                        <a target='_blank' href={list_of_projects[id].github} style={{ textDecoration: 'none'}}><button className='source-button btn btn-outline-info'>Source Code</button></a> 
                        <a target='_blank' href={list_of_projects[id].app} style={{ textDecoration: 'none'}}><button className='app-button btn btn-outline-info'>Application</button></a> 
                        <button className='close-button btn btn-outline-secondary' onClick={() => closeModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Modal