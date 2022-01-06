import React from "react";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavBar() {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/flaglist"> Flaglist </NavLink>
      <NavLink to="/quiz"> Quiz </NavLink>
    </div>
  );
}

export default NavBar;


