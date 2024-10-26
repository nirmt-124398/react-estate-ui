import React from "react";
import "./navbar.scss";
import { useState } from "react";

const navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a className="register" href="/">Sign up</a>
        <div className="menuIcon">
          <img src="/menu.png" alt="nav-menu" onClick={()=>setmenuOpen(!menuOpen)}/>
        </div>
        <div className={menuOpen ?"menu active":"menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
