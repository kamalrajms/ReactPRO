import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="menu">
      <Link to={""}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Services"}>Services</Link>
      <Link to={"/Contact"}>Contact</Link>
    </div>
  );
}
