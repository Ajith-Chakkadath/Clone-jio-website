import React from 'react';
import './video.css'; // Import your CSS file

const Videobar = () => {
  return (
    <div className="container">
      <div className="vsidebar">
      <div className="text-section">
       <div className="vlogo">
        <img src="https://jep-asset.akamaized.net/jio/svg/logo/28-06-2023/Jio-cinema-bold.svg" alt="" />
       </div>
       <div className='vcontent'>
<h4>Preimiers exclusive as well as trending video contnet</h4>
       </div>
       <br />
      <br />
       <div className="vbtn">
        <a>Know more</a>
       </div>
      </div>
      <div className="video-section">
        {/* Replace 'your_video_url' with the actual URL or source for your video */}
        <iframe
          className="video-frame"
          src="https://jep-asset.akamaized.net/jio/welcome-page/JioCinema_DekhtaJaIndia_06062023.mp4?autoplay=1\&mute=1"
          title="Your Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      </div>
     
    </div>
  );
};

export default Videobar;
