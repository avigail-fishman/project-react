import React from 'react';
import {
  videoContainerStyle,
  videoStyle,
  textOverlayContainerStyle,
  h1Style,
  h2Style,
} from '../css/homeCss';

function Home() {
  return (
    <div style={videoContainerStyle}>
      {/* טקסט שמוצג מעל הווידאו */}
      <div style={textOverlayContainerStyle}>
        <h2 style={h2Style}>מרגשים את מי</h2>
        <h1 style={h1Style}>שאוהבים</h1>
      </div>
      {/* ווידאו */}
      <video style={videoStyle} autoPlay muted loop>
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
