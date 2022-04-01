import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use';
import './style/ScrollToTop.css'
import UpArrow from '../images/up.png'

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(pageYOffset > 100){
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [pageYOffset])
    
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})


    if (!visible) {
        return false;
    }

    return (
        <div className='scroll-to-top text-center' >
            
            <i className='icon' onClick={scrollToTop}><img className='up' src={UpArrow}/></i>
            
        </div>
    )
}

export default ScrollToTop