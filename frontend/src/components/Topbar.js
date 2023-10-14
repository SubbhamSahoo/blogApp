import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./ProfileComponent";

const Topbar = () => {
  return (
    <>
      <nav className="navigation max-width-1">
        <div className="nav-left">
          {/* <NavLink to="/">
            <span>
              <img src="img/logo.png" width="94px" height="94px" alt="logo" />
            </span>
          </NavLink> */}
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Profile />
        </div>
      </nav>
      <div className="max-width-1 m-auto">
        <hr />
      </div>
    </>
  );
};

export default Topbar;
