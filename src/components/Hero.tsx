import { Illustration } from "@/assets/default.exports";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="pf-container py-[60px]">
      <div className="grid grid-cols-2 items-center">
        <div>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Hi, my name is
          </Typography>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Zahid Shaikh
          </Typography>
          <Typography variant="h6" fontWeight="semibold" gutterBottom>
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "20px" }}>
            <Link href={"mailto:reachtozahid@gmail.com"}>
              reachtozahid@gmail.com
            </Link>
          </Typography>
          <div className="mt-8 rounded-[15px] bg-pf-dark-primary flex items-center w-fit">
            <div className="py-3 px-2 text-center min-w-[180px] border-r">
              <Typography variant="h3" fontWeight="bold">
                12
              </Typography>
              <Typography variant="caption" fontWeight="semibold">
                VERIFIED SKILLS
              </Typography>
            </div>
            <div className="py-3 px-2 text-center min-w-[180px] border-r">
              <Typography variant="h3" fontWeight="bold">
                9
              </Typography>
              <Typography variant="caption" fontWeight="semibold">
                PROFESSIONAL PROJECTS
              </Typography>
            </div>
            <div className="py-3 px-2 text-center min-w-[180px]">
              <Typography variant="h3" fontWeight="bold">
                24
              </Typography>
              <Typography variant="caption" fontWeight="semibold">
                PERSONAL PROJECTS
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {/* <Image
            src={Illustration}
            width={800}
            style={{ objectFit: "cover" }}
            alt={""}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
