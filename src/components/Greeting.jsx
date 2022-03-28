import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container} from 'react-bootstrap'
import Background from '../images/background.png'
import img8 from '../images/8.png'
import img11 from '../images/11.png'
import './style/Greeting.css'

function Greeting() {
    return(
        <div>
            <img src={img8} alt='background' />
                <figure className='position-relative'>
                    <figcaption>
                        <h4 className='hello'>Hello World</h4>
                        <h1 className='Derek'>Derek Lee</h1>
                        <h2 className='se'>Software Engineer</h2>
                    </figcaption>
                </figure>
        </div>
        // <div>
        //     <h1>Derek Lee</h1>
        //     <h2>Software Engineer</h2>
        // </div>
    )

}

export default Greeting