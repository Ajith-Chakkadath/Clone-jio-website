import React from 'react'
import './card.css'

export default function Card() {
  return (
    <div className='MainCard'>
        <div className="card">
            <div className='cardImg'>
                <img className='cardimgimd' src="https://jep-asset.akamaized.net/cms/assets/jiostories/jiospace-fiber/thumbnail.webp" alt="" />
            </div>
          <div className="textcard">
          <p className='pheading'>
            Satllite based ultra fast broadband for every indian
            </p>
            <p className='psub'>
The futureof broadband service is here with jiospace fiber
            </p>
         {/*Card 2  */}
         <br></br>
            <br></br>
            <br></br>
          <a className='carda'>
                Know more
            </a>
          </div>
        </div>
        <div className="card">
            <div className='cardImg'>
                <img className='cardimgimd' src="https://jep-asset.akamaized.net/cms/assets/jiostories/jiokrishi/thumbnail.webp" alt="" />
            </div>
          <div className="textcard">
          <p className='pheading'>
            Reshaping Indian farming sector with JioKrishi
             </p>
            <p className='psub'>
Empowering Indian farming sector with digitally-driven solutions
            </p>
            <br></br>
            <br></br>
            <br></br>
          <a className='carda'>
                Know more
            </a>
          </div>
        </div>
{/* Card 3 */}
        <div className="card">
            <div className='cardImg'>
                <img className='cardimgimd' src="https://jep-asset.akamaized.net/cms/assets/jiostories/dhwu/card.webp" alt="" />
            </div>
          <div className="textcard">
          <p className='pheading'>
            Empowering women at DHWU with jio True 5G
             </p>
            
            <p className='psub'>
Powering womens education with true 5G internet at DHWU.
            </p>
            <br></br>
            <br></br>
            <br></br>
          <a className='carda'>
                Know more
            </a>
          </div>
        </div>
    </div>
  )
}
