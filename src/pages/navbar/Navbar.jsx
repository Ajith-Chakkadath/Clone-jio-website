import React from 'react'
import './navbar.css'
import { IoSearch } from "react-icons/io5";
import jiologo from "../../img/jio.png"
import { IoPerson } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
<header>
    <div className='nav'>
      <div className="logo">
          <img className='logoimg' src={jiologo} alt="" />
      </div>
      <div>
          <ul>
              <li><a>Mobile</a></li>
              <li><a>True 5G</a></li>
              <li><a>JioFiber</a></li>
              <li><a>AirFiber</a></li>
              <li><a>Buiness</a></li>
              <li><a>Devices</a></li>
              <li><a>Apps</a></li>
              <li><a>Support</a></li>
          </ul>
      </div>
        <div className="icons">
            <button>< IoSearch  /></button>
            <button><IoPerson /></button>
            
        </div>
    </div>
</header>
    </>
  )
}

