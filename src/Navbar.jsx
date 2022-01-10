import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./App";
import brand from "./App";



export default function Navbar(props) {
    const { logo, brand } = props;
    // const token = sessionStorage.getItem("token")

      return (
        <nav className="navbar navbar-expand-lg navbar-light pt-4">
          <Link
            to="/"
            className="navbar-brand d-flex justify-content-center"
          >
            <img src={logo} height="30" />
          </Link>

          <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

              <li className="nav-item">
                <NavLink
                to="/make-appointment"
                activeclassname="navlink-active"
                className="nav-link"
                >
                  Schedule Tasting
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink
                  to="/appointment-list"
                  activeclassname="navlink-active"
                  className="nav-link"
                >
                  View Appointments
                </NavLink>
              </li>


              </ul>
              </div>
        </nav>
          )
      }