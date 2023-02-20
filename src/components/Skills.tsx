import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <div className="pf-container py-[60px]" id="skills">
        <div className="flex items-center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Skills
          </Typography>
          <div className="border flex-1 ml-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
