import React from 'react';
import {NavLink } from 'react-router-dom'
const link={
 
    color: "black",
    fontWeight:700
  }
  
const SubNavbar = () => {
    return (
        <>
            <li className="nav-item ">
        <NavLink   className="nav-link " to="/">Home</NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeStyle={link} className="nav-link  " to="/about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink  activeStyle={link}  className="nav-link  " to="/contact">Contact</NavLink>
      </li>

    </>

    );
}

export default SubNavbar;
