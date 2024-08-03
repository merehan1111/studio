// import React from 'react'
// import './Footer.css'
// // import { assets } from '../../assets/assets'
// function Footer() {
//   return (
//     <div className='footer' id='footer'>
//         <div className="footer-content">
//             <div className="footer-content-left">
//                 <img src={assets.logo} alt="" />
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae veritatis ab accusantium provident incidunt iure, fuga voluptates placeat quis nesciunt omnis itaque distinctio quo ipsa, exercitationem consequatur recusandae id impedit fugiat eaque esse sapiente vero. Quis quisquam, repudiandae tenetur fugiat aliquid iure. Non sequi explicabo est, iste aperiam libero.</p>
//                 <div className="footer-social-icons">
//                     <img src={assets.facebook_icon} alt="" />
//                     <img src={assets.twitter_icon} alt="" />
//                     <img src={assets.linkedin_icon} alt="" />
//                 </div>
//             </div>
//             <div className="footer-content-center">
//                 <h2>COMPANY</h2>
//                 <ul>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Dlivery</li>
//                     <li>Privacy policy</li>
//                 </ul>

//             </div>
//             <div className="footer-content-right">
//                 <h2>Get In Touch</h2>
//                 <ul>
//                     <li>+1-212-456-7890</li>
//                     <li>contact@tomato.com</li>
//                 </ul>

//             </div>
//         </div>
//         <hr/>
//         <p className='footer-copyright'>Copyright 2024 @tomato.com - All Right Reversed.</p>
//     </div>
//   )
// }

// export default Footer
import React from 'react';
import './Footer.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content-left">
        <img src="./logo one shoot.png" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-item">
        <MdEmail className="footer-icon" />
        <a href="mailto:oneShoot@gmail.com" className="footer-link">
          oneShoot@gmail.com
        </a>
      </div>
      <div className="footer-item">
        <FaPhoneAlt className="footer-icon" />
        <p>+966500243099</p>
      </div>
      <div className="footer-item">
        <FaInstagramSquare className="footer-icon" />
        <a href="https://instagram.com/mf84gd/" target="_blank" rel="noopener noreferrer" className="footer-link">
          Instagram
        </a>
      </div>
      <div className="footer-item">
        <FaTwitter className="footer-icon" />
        <a href="https://twitter.com/mf84gd/" target="_blank" rel="noopener noreferrer" className="footer-link">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Footer;
