import React, { useEffect, useRef } from 'react'
import './Banner.css'

const Banner = ({data}) => {  
    const bannerWrap = useRef()    
    useEffect(() => {
        let pos = 0
        let len = 3        
        const slideBanner = setInterval(() => {                  
            pos = (pos + 1) % len                     
            bannerWrap.current.style.marginLeft = `${-pos * 100}%`                  
        }, 5000)
        return () => {
            clearInterval(slideBanner)
        }
    })    
    return(
        <div className="banner-wrap" ref={bannerWrap}>
            { data.map((item, index) => 
                <div className="banner" key={index}>
                    <div className="banner-title">
                        <p>{item.title}</p>
                        <p>{item.subTitle}</p>
                    </div>
                    <img src={item.src} alt="" />
                </div>
            )}   
            <ul className="banner-controller">
                <li></li>
                <li></li>
                <li></li>
            </ul>         
        </div>
    )
}
export default Banner