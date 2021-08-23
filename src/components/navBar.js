import { NavLink, Router } from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/search"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
     Search
    </NavLink>
    <NavLink
      to="/map"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Map
    </NavLink>
  </div>
);

export default MainNav;
