import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#aboutIEI">ABOUT US</a></li>
        <li><a href="#timeline">TIMELINE</a></li>
        <li><a href="#prizes">PRIZES</a></li>
        <li><a href="#sponsors">SPONSORS</a></li>
      </ul>
    </div>
  );
};

export default Navbar