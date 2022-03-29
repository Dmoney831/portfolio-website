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
        <div className="section-header text-center  mt-5">
            <h4>projects</h4>
            <p>list of proejcts</p>
            <div className="proj-container">
                {/* <div className="proj-box"> */}
                    {oneProject.map((item, index)=> {
                        return(
                            <div className='proj-map mx-3'key={index} >
                                <button key={index} type='button' className="btn btn-link " onClick={() => setOpenModal(true)}>
                                    <div className=" proj-card card">
                                        <img className='proj-img' src={item.thumbnail} style={{ width:300, height:300 }}/>
                                        <div className="proj-text card-text">
                                            <h3 className='title'>{item.title}</h3>
                                            <h5 className='description'>description</h5>
                                            <br/>
                                            <h4>+</h4>
                                        </div>
                                    </div>
                                </button>
                                {openModal && <Modal closeModal={setOpenModal} />}
                            </div>
                        )
                    })}
                {/* </div> */}
            </div>
        </div>
                    
            // <div className="container proj-container" >
            //     <div className='ddd' >
            //         {oneProject.map((item, index) => {
            //             return (
            //                     <div className="" key={index}  >
            //                         <button type='button' className="btn btn-link col-md-3 col-sm-6 my-5" onClick={() => setOpenModal(true)}>
            //                             <div className=" proj-card card">
            //                                 <img className='proj-img' src={item.thumbnail} />
            //                                 <div className="proj-text card-text">
            //                                     <h3 className='title'>{item.title}</h3>
            //                                     <h5 className='description'>description</h5>
            //                                     <br />
            //                                     <h4>+</h4>
            //                                 </div>
            //                             </div>
            //                         </button>
            //                         {openModal && <Modal closeModal={setOpenModal} />}
            //                     </div>
            //             )
            //         })}
            //     </div>
            // </div>


            // <div className="container proj-container">
            //     <div className="row justify-content-center">
            //         <button type='button' className="btn btn-link col-md-3 col-sm-6 my-5" onClick={() => setOpenModal(true)}>
            //             <div className=" proj-card card">
            //                 <img className='proj-img' src={Triton} />
            //                 <div className="proj-text card-text">
            //                     <h3 className='title'>Title</h3>
            //                     <h5 className='description'>Description</h5>
            //                     <br />
            //                     <h4>+</h4>
            //                 </div>
            //             </div>
            //         </button>
            //         {openModal && <Modal closeModal={setOpenModal} />}
            //         <button type='button' className="btn btn-link col-md-3 col-sm-6 my-5" onClick={() => setOpenModal(true)}>
            //             <div className=" proj-card card">
            //                 <img className='proj-img' src={PP} />
            //                 <div className="proj-text card-text">
            //                     <h3 className='title'>Title</h3>
            //                     <h5 className='description'>Description</h5>
            //                     <br />
            //                     <h4>+</h4>
            //                 </div>
            //             </div>
            //         </button>
            //         {openModal && <Modal closeModal={setOpenModal} />}
            //         <button type='button' className="btn btn-link col-md-3 col-sm-6 my-5" onClick={() => setOpenModal(true)}>
            //             <div className=" proj-card card">
            //                 <img className='proj-img' src={PP} />
            //                 <div className="proj-text card-text">
            //                     <h3 className='title'>Title</h3>
            //                     <h5 className='description'>Description</h5>
            //                     <br />
            //                     <h4>+</h4>
            //                 </div>
            //             </div>
            //         </button>
            //         {openModal && <Modal closeModal={setOpenModal} />}
            //     </div>
            // </div>
        // </div>

        // <section className='mb-5'>
        //     <div className='proj0'>
        //         <div className='proj1'>
        //             <h4>Projects</h4>
        //             <h5>List of Creations</h5>
        //             {projectsObject}
        //         </div>
        //         <div className='proj-cards'>
        //             <div>
        //                     <div className='card-text'>
        //                         <h5>title</h5>
        //                         <h6>description</h6>
        //                     </div>
        //                 <Card className='proj-card mx-5 my-3' style={{ width:310, height: 410}}>
        //                     <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={Triton} />
        //                 </Card>
        //             </div>

        //             <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
        //                 <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={Show_Us} />
        //             </Card>
        //             <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
        //                 <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={BJ} />
        //             </Card>
        //             <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
        //                 <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={easyPeasy} />
        //             </Card>
        //             <Card className='proj-card mx-5 my-3' style={{ width:310, height: 310}}>
        //                 <Card.Img className='proj-img mx-auto my-auto' style={{ width: 300, height: 300 }} src={PP} />
        //             </Card>
        //         </div>

        //     </div>
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <div className="section-header text-center">
        //                         <h4>projects</h4>
        //                         <p>list of proejcts</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-4 col-sm-6 col-xs-12">
        //                     <div className="single-team">
        //                         <div className="team-img">
        //                             <img className='proj-img'  src={Triton} alt=""/>
        //                         </div>    
        //                     </div>
        //                     <div className="overlay-text">
        //                         <h2>title</h2>
        //                         <p>description</p>
        //                     </div>
        //                 </div> 
        //                 <div className="col-md-4 col-sm-6 col-xs-12">
        //                     <div className="single-team">
        //                         <div className="team-img">
        //                             <img className='proj-img'  src={Sample} alt=""/>
        //                         </div>    
        //                     </div>
        //                     <div className="overlay-text">
        //                         <h4>title</h4>
        //                         <p>description</p>
        //                     </div>
        //                 </div> 
        //                 <div className="col-md-4 col-sm-6 col-xs-12">
        //                     <div className="single-team">
        //                         <div className="team-img">
        //                             <img className='proj-img' style={{ width:310, height: 310}} src={Sample} alt=""/>
        //                         </div>    
        //                     </div>
        //                     <div className="overlay-text">
        //                         <h4>title</h4>
        //                         <p>description</p>
        //                     </div>
        //                 </div> 
        //                 <div className="col-md-4 col-sm-6 col-xs-12">
        //                     <div className="single-team">
        //                         <div className="team-img">
        //                             <img className='proj-img' style={{ width:310, height: 310}} src={Sample} alt=""/>
        //                         </div>    
        //                     </div>
        //                     <div className="overlay-text">
        //                         <h4>title</h4>
        //                         <p>description</p>
        //                     </div>
        //                 </div> 
        //                 <div className="col-md-4 col-sm-6 col-xs-12">
        //                     <div className="single-team">
        //                         <div className="team-img">
        //                             <img className='proj-img' style={{ width:310, height: 310}} src={Sample} alt=""/>
        //                         </div>    
        //                     </div>
        //                     <div className="overlay-text">
        //                         <h4>title</h4>
        //                         <p>description</p>
        //                     </div>
        //                 </div> 
        //             </div>
        //         </div>
        // </section>
    )
}

export default Projects