import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/default-exports";

type Props = {};

const PublicLayout = (props: Props) => {
  return (
    <div className="h-[100vh] overflow-y-auto bg-gradient">
      {/* header */}
      <Header />
      {/* body */}
      <div className="container text-white">
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
};

export default PublicLayout;
