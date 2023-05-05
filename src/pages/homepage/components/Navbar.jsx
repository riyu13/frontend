import React from 'react';
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar is-transparent">
  <div className="navbar-brand">
            <NavLink to="/dashboard" className="navbar-item">
              <img src={logo}
              width="auto" 
              height="auto"
              alt="logo"/>
              <h1 className='title'>LPK Yukimaga Surakarta</h1>
            </NavLink>
          </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
    </div>

    <div class="navbar-end">
    <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar