import React from 'react'
import './style/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

import {skills} from '../data/Data.jsx'

function Profile() {
  return (
    <div className='prof-master'>
        <div className="prof-prof">
            <h3>profile goes here//</h3>
            <div className='prof-intro'>
                <h5>Currently, I'm seeking a place to learn, develop, and contribute my software engineering proficiency. If you think I'm a good fit, please contact me via dyklee89@gmail.com </h5>
            </div>
            <div className="prof-edu">
                <h5>Education:</h5>
                <h5>University of California, San Diego (UCSD)</h5>
                <h6 className='bach'>Bachelor of Science Mathematics </h6>
            </div>
            <div className="prof-constellation">
                <h5>Constellation:</h5>
                <h5>Virgo</h5>
            </div>
            <div className="prof-mbti">
                <h5>MBTI:</h5>
                <a style={{ color: 'rgb(255,249,215)', textDecoration: 'none'}} href='https://www.16personalities.com/intj-personality' target='-blank'>
                    <h5 className='mbti-link'>INTJ | What's INTJ?</h5>
                </a>
            </div>
            <div className="prof-email">
                <h5>Email:</h5>
                <h5>dyklee89@gmail.com</h5>
            </div>
        </div>

        <div className="skills">
            <h3 className=''>Skills</h3>
            <div className="skils-intro my-4">
                <h5>I'm a natural trooper with a strong agile mindset, and loves to work in a fast paced and collaborative & cooperative environment. Never afraid to meet intellctual challenges or stresses.</h5>
            </div>
            <div className="row justify-content-center skills-list">
                {skills.map((item)=> {
                    return (
                        <div className="one-skill" >
                            <img className='icon_img'src={item.icon_img} />                        
                            <h5 className='skill-title'>{item.title}</h5>
                        </div>

                    )
                })}
            </div>
        </div>
    </div>


  )
}

export default Profile