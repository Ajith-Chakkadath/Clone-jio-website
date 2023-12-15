import React from 'react'
import "./menubar.css"
import { FaIdCardClip } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";
import { MdSimCard } from "react-icons/md";
import { MdOutlineCellWifi } from "react-icons/md";
import { TbFileExport } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";



export default function Menubar() {
  return (
    <div className='iconstore'> 
    <div className='icon'>
    <div>
            <FaIdCardClip style={{ fontSize: '3em',color : "blue", backgroundColor:'rgb(168, 209, 245)', padding:"9px",borderRadius:"50%" }}/>
            </div>
            <p>Recharge</p>
    </div>
          <div className="icon">
          <div className="icons">
            <IoDocumentOutline style={{ fontSize: '3em',color : "blue", backgroundColor:'rgb(168, 209, 245)', padding:"9px",borderRadius:"50%" }} />
            </div>
            <p>Pay bills</p>
            </div> 
          <div className="icon">
          <div className="icons">
            <MdOutlineCellWifi style={{ fontSize: '3em',color : "blue", backgroundColor:'rgb(168, 209, 245)', padding:"9px",borderRadius:"50%" }} />
            </div>
            <p>Get JioAirFiber</p>
            </div> 
          <div className="icon">
          <div className="icons">
            <MdSimCard style={{ fontSize: '3em',color : "blue", backgroundColor:'rgb(168, 209, 245)', padding:"9px",borderRadius:"50%" }} />
            </div>
            <p>Get Jio Sim</p>
            </div> 
          <div className="icon">
          <div className="icons">
            <FaWifi style={{ fontSize: '3em',color : "blue", backgroundColor:'rgb(168, 209, 245)', padding:"9px",borderRadius:"50%" }} />
            </div>
            <p>Get JioFiber</p>
              </div> 
          <div className="icon">
          <div className="icons">
            <TbFileExport style={{ fontSize: '3em',color : "blue", backgroundColor:'rgb(168, 209, 245)', padding:"9px",borderRadius:"50%" }} />
            </div>
            <p>Port to Jio</p>
              </div> 
           
            
           
           
           
    </div>
  )
}
