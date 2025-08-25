import React from "react";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Food Fire Logo" />
        <span>Food Fire</span>
      </div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
      </div>
    </header>
  );
};
export default Header;
