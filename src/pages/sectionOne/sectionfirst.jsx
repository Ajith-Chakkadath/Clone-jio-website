import React from 'react'
import "./sectionone.css"
export default function Sectionfirst() {
  return (
    <div className='sfcontainer'>
        <div className="sfmain">
            <div className="sfheading">
                <h4>Look what's new and noteworthy</h4>
            </div>
            <div className="sfdivimg">
                <div className="sfright">
                    <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/true-5g-desktop.webp" alt="" />
                    <div className="sfcontent">
                        <div className="sfconten-img">
                            <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/true5g.svg" alt="" />
                        </div>
                       
                            <div className="sfcontent-text">
                                <p>Now in 7,768 locations in india</p>
                            </div>
                            <br></br>
                            <br />
                            <div className="sfcontent-btn ">
                                <a className='btn-bg-orng'>Check availability</a>
                            </div>
                    </div>
                </div>
                <div className="sfleft">
                    <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/airfiber-desktop.webp" alt="" />
                    <div className="sfcontent">
                        <div className="sfconten-img">
                            <img src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/home/airfiber-icon.svg" alt="" />
                        </div>
                            <div className="sfcontent-text">
                                <p>Availabe across 514 twons in india</p>
                            </div>
                            <br />
                            <br />
                            <div className="sfcontent-btn">
                                <a className='btn-bg-blue'>Know more</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
