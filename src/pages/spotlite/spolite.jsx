import React from 'react'
import "./spolite.css"
export default function Spolite() {
  return (
    <div className='smaindiv'>
        <div className="ssectiondiv">
            <div className="sheading">
                <h4>In the Spotlight</h4>
                <p>The best deals, news and products</p>
            </div>
            <div className="sbanner">
                <div className="sbannerdiv">
                    <div className="sbanner-text">
                        <h6>JioDrive</h6>
                        <h4>Enjoy private viewing on a 100-inch screen</h4>
                        <p>Now get 48%off on JioDrive</p>
                        <a> Buy for $1299</a>
                    </div>
                    <div className="sbanner-images">
                        <img src="https://jep-asset.akamaized.net/jio/webp/homepage/dive-side-desk-v5.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="scards">
                
                <div className='scard'>
                    <div className="scard-img">
                        <img src="https://jep-asset.akamaized.net/cms/assets/home/ajio-card1.webp" alt="" />
                    </div>
                    <div className="scardtext">
                        <h4>Enjoy discount on iconic brand</h4>
                    </div>
                    <div className="scardbtn">
                        <a>Shop on jio</a>
                    </div>
                </div>
                <div className='scard'>
                    <div className="scard-img">
                        <img src="https://jep-asset.akamaized.net/cms/assets/home/hamleys-card2.webp" alt="" />
                    </div>
                    <div className="scardtext">
                        <h4>Come, explore the winter Toyland</h4>
                    </div>
                    <div className="scardbtn">
                        <a>Go to hamleys</a>
                    </div>
                </div>
                <div className='scard'>
                    <div className="scard-img">
                        <img src="https://jep-asset.akamaized.net/cms/assets/home/netmeds-card3.webp" alt="" />
                    </div>
                    <div className="scardtext">
                        <h4>Save Big on beauty & wellness products</h4>
                    </div>
                    <div className="scardbtn">
                        <a>Book at Netmeds</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
