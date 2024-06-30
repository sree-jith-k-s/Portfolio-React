import React from 'react';
import '../assets/css/SocialShareMenu.css';
import social from '../assets/imgs/social.png';
import facebook from '../assets/imgs/facebook.png';
import whatsapp from '../assets/imgs/whatsapp.png';
import twitter from '../assets/imgs/twitter.png';
import github from '../assets/imgs/github.png';
import linkedin from '../assets/imgs/linkedin.png';
import instagram from '../assets/imgs/instagram.png';
import pinterest from '../assets/imgs/pinterest.png';
import youtube from '../assets/imgs/youtube.png';

const SocialShareMenu = () => {
  const toggleMenu = () => {
    document.querySelector('.menu').classList.toggle('active');
  };

  return (
    <div className="menu">
      <div className="toggle" onClick={toggleMenu}>
        <img src={social} alt="Share" style={{ width: '30px', height: '30px' }} />
      </div>
      <li style={{ '--i': 0, '--clr': '#' }}>
        <a href="#"><img src={facebook} alt="Facebook" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 1, '--clr': '#' }}>
        <a href="#"><img src={whatsapp} alt="WhatsApp" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 2, '--clr': '#' }}>
        <a href="#"><img src={twitter} alt="Twitter" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 3, '--clr': '#' }}>
        <a href="#"><img src={github} alt="Github" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 4, '--clr': '#' }}>
        <a href="#"><img src={linkedin} alt="LinkedIn" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 5, '--clr': '#' }}>
        <a href="#"><img src={instagram} alt="Instagram" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 6, '--clr': '#' }}>
        <a href="#"><img src={pinterest} alt="Pinterest" style={{ width: '30px', height: '30px' }} /></a>
      </li>
      <li style={{ '--i': 7, '--clr': '#' }}>
        <a href="#"><img src={youtube} alt="YouTube" style={{ width: '30px', height: '30px',  }} /></a>
      </li>
    </div>
  );
};

export default SocialShareMenu;
