import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to ='/'>Home</Link>
      <Link to ='/characters'>Characters</Link>
      <Link to ='/episodes'>Episodes</Link>
    </div>
  );
}

export default NavBar;
