import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id='socials'>
        <img src='/facebook.png'/>
        <img src='/instagram.png'/>
        <img src='twitter.png'/>
        <img src='youtube.png'/>
      </div>
      <div id='footerlinks'>
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className='text-gray-500' id='copyright'>
        <p> &copy; 2021 MovieBox by Adriana Eka Prayudha</p>
      </div>
    </div>
  )
}

export default Footer