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

//export default Footer
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Optional, if you still need custom styles
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagramSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-2 mb-4 mb-md-0">
            <img src="./logo one shoot.png" alt="Logo" className="footer-logo" />
          </div>
          <div className="col-md-3 mb-4 mb-md-0 py-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-center">
              <MdEmail className="footer-icon me-2" />
              <a href="mailto:cs@oneshooot.com" className="footer-link">
                cs@oneshooot.com
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0 py-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-center">
              <FaPhoneAlt className="footer-icon me-2" />
              <p className="mb-0">+966500243099</p>
            </div>
          </div>
          <div className="col-md-2 mb-4 mb-md-0 py-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-center">
              <FaInstagramSquare className="footer-icon me-2" />
              <a href="https://instagram.com/mf84gd/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Instagram
              </a>
            </div>
            </div>
            <div className='col-md-2 mb-4 mb-md-0 py-4'>
            <div className="d-flex align-items-center justify-content-center justify-content-md-center">
              <FaTwitter className="footer-icon me-2" />
              <a href="https://twitter.com/mf84gd/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Twitter
              </a>
            </div>

            </div>
            
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
