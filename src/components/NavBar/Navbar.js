import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets/index";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>

        <ul>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={handleClick}>
          <img src={menuIcon} alt="" />
        </div>
      </nav>

      <div className={`mobile-nav-container ${isActive ? "active" : ""}`}>
        <div className="close-icon" onClick={handleClick}>
          <img src={closeIcon} alt="" />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#topics" onClick={handleClick}>
              Course Details
            </a>
          </li>
          <li>
            <a href="#info" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#blog" onClick={handleClick}>
              Blog
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleClick}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
