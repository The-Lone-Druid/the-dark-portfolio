import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="bg-pf-dark-med" id="services">
      <div className="pf-container py-[60px]">
        <div className="flex items-center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Services
          </Typography>
          <div className="border flex-1 ml-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
