import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/news">Navbar</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Navbar;
