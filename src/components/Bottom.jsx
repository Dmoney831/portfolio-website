import React from 'react'
import LinkedIn from '../images/icon-linkedin.png'
import Github from '../images/icon-github1.png'
import './style/Bottom.css'


function Bottom() {
  return (
    <div className='bottom-master'>
        <div className="bottom0">
            <h4 className='bottom-intro mx-5'>Let's Connect!</h4>
            <div className='bottom-icon'>
                <a href='https://www.linkedin.com/in/workwith-derek/' target='_blank'>
                    <img className='icon-1' style={{ width: 75, height: 75}} src={LinkedIn}/>
                </a>
                <a href='https://github.com/Dmoney831' target='_blank'>
                    <img className='icon-2' style={{ width: 80, height: 80}} src={Github}/>
                </a>
            </div>
            <div className='bottom1' >
                <h5 className='mx-5'>© 2022 Derek Lee</h5>
                <h5 >Built with React and Bootstrap</h5>
                <h5 className='mx-5'>Hosted by Netflify</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Bottom