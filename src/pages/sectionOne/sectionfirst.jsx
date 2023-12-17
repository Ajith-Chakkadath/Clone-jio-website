import React from 'react'
import jio from '../../img/jio.png'
import './sectionone.css'
import rightimg from '../../img/airfiber-desktop.webp'
// import leftimg from '../../img/true-5g-desktop.webp'

export default function Sectionfirst() {
  return (
    <div className='maindiv'>
        <div className="sectiondiv">
            <div className="headingdiv">
                <p>
                    Look what's new and noteworthy
                </p>
            </div>
            <div className="sections">
                <div className="rightone">
                    <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/true5g.svg" alt="" />
                   <div className="contnet">
                   <button><img className='logosection' src={jio} alt="" />
                        <p>TRUE 5G</p></button>
                    <div className='text'>
                        <p>now in7.764 loaction in india</p>
                    </div>
                    <button>Check avilabilty</button>
                   </div>
                </div>
                <div className="leftone">
                    <img src={rightimg} alt="" />
                    <div className="contnet">
                   <div className="airfiber">
                        <img className='logosection'  src={jio} alt="" />
                        <p>Air Fiber</p>
                    </div>
                    <div>
                        <p>Avilabe across 514 town in india </p>
                    </div>
                    <button>know more</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
