import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IoCameraSharp } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5"; // Import a menu icon for the hamburger menu
import { CiSearch } from "react-icons/ci";
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <Link to='/home'><img src='./logo one shoot.png' className='logo' alt='logo' /></Link>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to='/they' onClick={() => setMenu('Home')} className={menu === "Home" ? "active" : ""}>من نحن</Link>
        <Link to='/service' onClick={() => setMenu('الخدمات')} className={menu === "الخدمات" ? "active" : ""}>الخدمات</Link>
        <Link to='/quality' onClick={() => setMenu('Mobile-App')} className={menu === "Mobile-App" ? "active" : ""}>جودتنا</Link>
        <Link to="/project" onClick={() => setMenu('Quality')} className={menu === "Quality" ? "active" : ""}>اعمالنا</Link>
        <a href='#footer' onClick={() => setMenu('Contact Us')} className={menu === "Contact Us" ? "active" : ""}>التواصل معنا</a>
      </ul>
      <div className="navbar-right">
      <CiSearch  size={30}/>
        <div className="navbar-search-icon">
          <IoCameraSharp />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <IoMenuOutline size={30} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

