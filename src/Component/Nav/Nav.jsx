import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className='logo'>DIT</h2>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li> 
          <li><a href="#">Service</a></li> 
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="login">login</button>
      </div>
      
    </nav>
  );
};

export default Nav;