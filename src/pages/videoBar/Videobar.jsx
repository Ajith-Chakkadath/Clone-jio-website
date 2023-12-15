import React from 'react';
import './video.css'; // Import your CSS file

const Videobar = () => {
  return (
    <div className="container">
      <div className="text-section">
        <p>This is some text content.</p>
      </div>
      <div className="video-section">
        {/* Replace 'your_video_url' with the actual URL or source for your video */}
        <iframe
          className="video-frame"
          src="https://jep-asset.akamaized.net/jio/welcome-page/JioCinema_DekhtaJaIndia_06062023.mp4"
          title="Your Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videobar;
