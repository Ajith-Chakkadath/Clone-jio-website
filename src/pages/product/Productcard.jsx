import React from 'react'
import './productcard.css'

export default function Productcard() {
  return (
    <div className='pMainCard'>
       
       <div className="pcard">
        <a className='launch'>New Launch</a>
            <div className='pcardImg'>
                <img className='pcardimgimd' src="https://jep-asset.akamaized.net/cms/assets/home/jiobharat.webp" alt="" />
            </div>
          <div className="ptextcard">
          <p className='ppheading'>
           jioBharat
            </p>
           
            <p className='ppsub'>
                $999
            </p>
          </div>
        </div>
        {/* Card 2 */}

        <div className="pcard">
        <a className='launch'>New Launch</a>
            <div className='pcardImg'>
                <img className='pcardimgimds' src="https://jep-asset.akamaized.net/cms/assets/home/jiodive.webp" alt="" />
            </div>
          <div className="ptextcard">
          <p className='ppheading'>
           jioDrive
            </p>
           
            <p className='ppsub'>
                $1299
            </p>
          </div>
        </div>


        <div className="pcard">
        <a className='launchs'></a>
            <div className='pcardImg'>
                <img className='pcardimgimd' src="https://jep-asset.akamaized.net/cms/assets/home/wifi-mesh-extender.webp" alt="" />
            </div>
          <div className="ptextcard">
          <p className='ppheading'>
           WiFi Mesh Extender
            </p>
           
            <p className='ppsub'>
                From $2499
            </p>
          </div>
        </div>
    </div>
  )
}
