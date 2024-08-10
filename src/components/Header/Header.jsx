import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <header className="header d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-4 text-light">Welcome to Our Site</h1>
        <p className="lead text-light">Discover our services and offerings</p>
      </div>
    </header>
  );
}

export default Header;


