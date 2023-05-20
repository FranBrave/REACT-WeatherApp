import React from "react";
import { Link } from "react-router-dom";

const Header = ({ authenticated, logout }) => {
  return (
    <header className="header">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/setcities">
        <span>Set Cities</span>
      </Link>
    </header>
  );
};

export default Header;
