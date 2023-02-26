import { Illustration } from "@/assets/default.exports";
import { Hero } from "@/pages/api/hero";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: Hero | undefined;
};

const Hero = ({ data }: Props) => {
  return (
    <div className="pf-container py-[60px] pb-[120px]" id="home">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
        <div>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Hi, my name is
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Zahid Shaikh
          </Typography>
          <Typography
            variant="body1"
            fontWeight="semibold"
            className="max-w-[460px]"
            gutterBottom
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ marginTop: "20px" }}
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <Link href={"mailto:reachtozahid@gmail.com"}>
              reachtozahid@gmail.com
            </Link>
          </Typography>
          <div
            className="mt-8 rounded-[15px] bg-gradient-to-br from-purple-500 to-purple-900 flex md:flex-row flex-col items-center md:w-fit shadow-lg"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <div className="py-3 px-2 text-center md:min-w-[180px] md:border-r md:border-b-0 border-b w-full">
              <Typography variant="h3" fontWeight="bold">
                {data && data.verified_skills}
              </Typography>
              <Typography variant="caption" fontWeight="semibold">
                VERIFIED SKILLS
              </Typography>
            </div>
            <div className="py-3 px-2 text-center md:min-w-[180px] md:border-r md:border-b-0 border-b w-full">
              <Typography variant="h3" fontWeight="bold">
                {data && data.professional_projects}
              </Typography>
              <Typography variant="caption" fontWeight="semibold">
                PROFESSIONAL PROJECTS
              </Typography>
            </div>
            <div className="py-3 px-2 text-center md:min-w-[180px]">
              <Typography variant="h3" fontWeight="bold">
                {data && data.personal_projects}
              </Typography>
              <Typography variant="caption" fontWeight="semibold">
                PERSONAL PROJECTS
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mb-5 lg:mb-0">
          <Image
            src={Illustration}
            width={380}
            style={{ objectFit: "cover" }}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
