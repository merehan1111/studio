import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCameraSharp, IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to='/home' className="navbar-brand">
          <img src='./logo one shoot.png' className='logo' alt='logo' style={{ width: '120px' }} />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <IoMenuOutline size={30} />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to='/they' onClick={() => setMenu('Home')} className={`nav-link ${menu === "Home" ? "active" : ""}`}>من نحن</Link>
            </li>
            <li className="nav-item">
              <Link to='/service' onClick={() => setMenu('الخدمات')} className={`nav-link ${menu === "الخدمات" ? "active" : ""}`}>الخدمات</Link>
            </li>
            <li className="nav-item">
              <Link to='/quality' onClick={() => setMenu('Mobile-App')} className={`nav-link ${menu === "Mobile-App" ? "active" : ""}`}>جودتنا</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" onClick={() => setMenu('Quality')} className={`nav-link ${menu === "Quality" ? "active" : ""}`}>اعمالنا</Link>
            </li>
            <li className="nav-item">
              <a href='#footer' onClick={() => setMenu('Contact Us')} className={`nav-link ${menu === "Contact Us" ? "active" : ""}`}>التواصل معنا</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <CiSearch size={30} className="mx-2" />
            <div className="navbar-search-icon mx-2">
              <IoCameraSharp size={30} />
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;





