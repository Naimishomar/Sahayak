import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-3 h-20 z-10 text-white fixed bg-black/20 backdrop-blur-md">
      <div>
        <h1 className="font-semibold text-2xl">
          <Link to='/'>Sahayak</Link>
        </h1> 
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
