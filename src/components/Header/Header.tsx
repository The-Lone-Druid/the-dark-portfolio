import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="py-5 text-white">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to={"/"} className="font-semibold text-[24px]">
            Zahid Shaikh.
          </Link>
          <ul className="flex items-center justify-between ml-4">
            <li>
              <NavLink to={"/"} className="nav-link px-4">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="nav-link px-4">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="nav-link px-4">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="nav-link px-4">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="nav-link px-4">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="nav-link px-4">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <Link to={"/"} className="px-4 text-[24px] nav-link-icon">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to={"/"} className="px-4 text-[24px] nav-link-icon">
            <i className="fab fa-github"></i>
          </Link>
          <Link to={"/"} className="px-4 text-[24px] nav-link-icon">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to={"/"} className="px-4 text-[24px] nav-link-icon">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
