import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import img8 from '../images/8.png'
import './style/Greeting.css'

function Greeting() {
    return(
        <>
            <img className='greeting-img' src={img8} alt='background' />
                <figure className=' position-relative'>
                    <figcaption className='greeting__figcaption align-items-center'>
                        <h4 className='hello'>Hello World</h4>
                        <h1 className='Derek'>Derek Lee</h1>
                        <h2 className='se'>Software Engineer</h2>
                    </figcaption>
                </figure>
        </>
    )

}

export default Greeting