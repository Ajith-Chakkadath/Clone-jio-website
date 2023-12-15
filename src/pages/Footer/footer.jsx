import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import "./footer.css"
export default function Footer() {
  return (
    <div className='footer'>
        <div className="sb_footer section_padding">
            <div className="sb_footer_links">
                <div className="footer_links_div">
                    <h4>Our Offerings</h4>
                    <a href='/mobile'>
                        <p>Mobile</p>
                    </a>
                    <a href='/fiber'>
                        <p>Fiber</p>
                    </a>
                    <a href='/business'>
                        <p>Business</p>
                    </a>
                    <a href='/apps'>
                        <p>Apps</p>
                    </a>
                    <a href='/devices'>
                        <p>Devices</p>
                    </a>
                    <a href='/5gnetwork'>
                        <p>5G Network</p>
                    </a>
                </div>
                <div className="footer_links_div">
                    <h4>Support </h4>
                    <a href='/explore-support'>
                        <p>Explore support</p>
                    </a>
                    <a href='locate-us'>
                        <p>Locate us</p>
                    </a>
                    <a href='/FAQ'>
                        <p>FAQ</p>
                    </a>
                    <a href='/track-order'>
                        <p>Track order</p>
                    </a>
                    <a href='/contact-us'>
                        <p>Contact us</p>
                    </a>
                </div>
                <div className="footer_links_div">
                    <h4>Our Company </h4>
                    <a href='/explore-support'>
                        <p>Reliance industries</p>
                    </a>
                    <a href='locate-us'>
                        <p>Reliance Foundation</p>
                    </a>
                    <a href='/FAQ'>
                        <p>jio life</p>
                    </a>
                    <a href='/track-order'>
                        <p>Career</p>
                    </a>
                    <a href='/contact-us'>
                        <p>Investor relations</p>
                    </a>
                </div>
                <div className="footer_links_div">
                    <h4>Useful links </h4>
                    <a href='/explore-support'>
                        <p>Get JioAirFiber</p>
                    </a>
                    <a href='locate-us'>
                        <p>Get Jio Sim</p>
                    </a>
                    <a href='/FAQ'>
                        <p>Choose number </p>
                    </a>
                    <a href='/track-order'>
                        <p>Get jio Fiber</p>
                    </a>
                    <a href='/contact-us'>
                        <p>Recharge </p>
                    </a>
                    <a href='/contact-us'>
                        <p>Pay bills </p>
                    </a>
                    <a href='/contact-us'>
                        <p>Login </p>
                    </a>
                </div>
                <div className='footer_links_div_social'>
                    <h4>
                        Connect with us
                    </h4>
                    <div className="socialmedia">
                    <SlSocialInstagram style={{ fontSize: '35px',color : "white", backgroundColor:'blue', padding:"10px",borderRadius:"50%"  }} />
                    <SlSocialFacebook  style={{ fontSize: '35px',color : "white", backgroundColor:'blue', padding:"10px",borderRadius:"50%" }} />
                    <TiSocialYoutube style={{ fontSize: '35px',color : "white", backgroundColor:'blue', padding:"10px",borderRadius:"50%" }}  />
                    <SlSocialLinkedin  style={{ fontSize: '35px',color : "white", backgroundColor:'blue', padding:"10px",borderRadius:"50%" }} />

                    </div>

                </div>
            </div>
            <hr></hr>
            <div className='sb_footer_below'>
                <div className="footer-copyright">
                    <p>
                       Copyright @{new Date().getFullYear()} Reliance jio infocomm All right reserved
                    </p>
                </div>
                <div className="footer-below-links">
                    <a href='/terms'><div><p>Press releae</p></div></a>
    
                    <a href='/terms'><div><p>Regulatory</p></div></a>
                    <a href='/terms'><div><p>Policies</p></div></a>
                    <a href='/terms'><div><p>Terms & conditions</p></div></a>
                </div>

            </div>
        </div>
    </div>
  )
}
