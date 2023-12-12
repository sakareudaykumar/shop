import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div>
        <img src="./images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <div>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
