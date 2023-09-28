import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
