import { useState } from 'react';
import social from "../assets/social.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import telegram from "../assets/telegram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import gmail from "../assets/gmail.png";
import './style.css';
import './share.css'; // Make sure to include your CSS styles


const Connect = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="section" id="connect">
      <div>
        <h1 style={{ color: '#f7c14d' }}>Connect</h1>
        <p className="lead">Click here to connect:</p>
        <br/>
      <br/>
        <div>
          <div className={`menu ${isActive ? 'active' : ''}`}>
            <div className="toggle" onClick={toggleMenu}>
              <img src={social} alt="Toggle Menu" width="30" height="30" />
            </div>
            <ul>
              <li style={{ '--i': 0, '--clr': '#1877f2' }}>
                <a href="https://www.facebook.com/sreejithk.sreenivasan.334?mibextid=ZbWKwL">
                  <img src={facebook} alt="Facebook" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 1, '--clr': '#25d366' }}>
                <a href="https://wa.me/qr/D7T6TYGUWLU7A1">
                  <img src={whatsapp} alt="WhatsApp" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 2, '--clr': '#000' }}>
                <a href="https://x.com/sr_xx_jit_?t=lJsYs935rxvFvlgXKdABMQ&s=09">
                  <img src={twitter} alt="X (Twitter)" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 3, '--clr': '#2b9ed6' }}>
                <a href="http://t.me/sr_xx_jit">
                  <img src={telegram} alt="Telegram" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 4, '--clr': '#0a66c2' }}>
                <a href="https://www.linkedin.com/in/sreejith-k-s-506957287">
                  <img src={linkedin} alt="LinkedIn" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 5, '--clr': '#c32aa3' }}>
                <a href="https://www.instagram.com/sr.xx_jit._?igsh=amw1Z3lqcXMzdmVk">
                  <img src={instagram} alt="Instagram" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 6, '--clr': '#5479ba' }}>
                <a href="mailto:sreejithksrvsn@gmail.com">
                  <img src={gmail} alt="Gmail" width="30" height="30" />
                </a>
              </li>
              <li style={{ '--i': 7, '--clr': '#000' }}>
                <a href="https://github.com/sree-jith-k-s">
                  <img src={github} alt="GitHub" width="30" height="30" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </section>
  );
};

export default Connect;
