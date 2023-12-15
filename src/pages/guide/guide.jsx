import React from 'react'
import { TiMessage } from "react-icons/ti";
import { IoMdChatbubbles } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdOutlineStorefront } from "react-icons/md";
import './guide.css'
export default function Guide() {
  return (
    <div className='guide'>
        <div className="guide_sections">
            <div className="need">
                <p>Need guidance?</p>
            </div>
            <div className="help">
                <p>We'd love to help you.</p>
            </div>
            <div className="help_menu">
                <a><TiMessage/> support </a>
                <a><IoMdChatbubbles /> Chat with us</a>
                <a><IoIosCall /> Call us </a>
                <a><MdOutlineStorefront /> Find a store </a>
            </div>
        </div>
    </div>
  )
}
