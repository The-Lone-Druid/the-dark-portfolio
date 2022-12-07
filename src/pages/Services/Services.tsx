import React from "react";
import { Page } from "../../layouts/default-exports";
import { Outlet } from "react-router-dom";

type Props = {};

const Services = (props: Props) => {
  return (
    <Page>
      <h1 className="text-[48px] font-bold">Services</h1>
      <Outlet />
    </Page>
  );
};

export default Services;
