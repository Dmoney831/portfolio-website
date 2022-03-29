import React from 'react'
import { list_of_projects } from '../data/Data.jsx'
import { Card, Button } from 'react-bootstrap'
import './style/Modal.css'

function Modal({closeModal}) {
  return (
    <div className="modal-main">
        <div className='modal-card'>
            <img src="" />
            <div className='modal-info'>
                <div className='modal-title'>
                    <p className="title">title</p>
                </div>
                <div className='modal-body'>
                    <p className="tech">tech</p>
                    <p className="description">description</p>
                    <p className="github">github</p>
                    <p className="website">website</p>
                </div >
                <Button>detail</Button>
                <Button onClick={()=> closeModal(false)}>close</Button>
            </div>
        </div>
    </div>
    
     
  )
}

export default Modal