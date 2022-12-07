import React from "react";
import { Outlet, NavLink } from "react-router-dom";

type Props = {};

const PublicLayout = (props: Props) => {
  return (
    <div>
      {/* <ul className="flex itesm-center gap-[10px]">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/services/cloud-services"}>Cloud Services</NavLink>
        </li>
        <li>
          <NavLink to={"/services/solutions"}>Solutions</NavLink>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
