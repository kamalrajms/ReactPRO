import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      Service component
      <div>
        <Link to={""}>WebDevelopment</Link>
        <Link to={"appdevelopment"}>AppDevelopment</Link>
      </div>
      <Outlet />
    </div>
  );
}
