import { Favicon } from "@/assets/default.exports";
import {
  DarkMode,
  GitHub,
  Instagram,
  LightMode,
  LinkedIn
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="h-[80px]">
      <div className="fixed top-0 left-0 right-0 backdrop-blur-xl">
        <div className="pf-container h-[80px] flex items-center">
          <div className="flex items-center flex-1">
            <Link
              href={""}
              className="logo-container flex items-center gap-[5px]"
            >
              <Image
                src={Favicon}
                height={40}
                width={40}
                alt={"zahid shaikh logo"}
              />
              <Typography variant="h5" fontWeight={"600"} className="ml-2">
                Zahid Shaikh.
              </Typography>
            </Link>
            <div className="flex items-center flex-1 justify-between">
              <ul className="flex items-center gap-[30px] px-10">
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-100 transition-all"
                    href={""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-100 transition-all"
                    href={""}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-100 transition-all"
                    href={""}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-100 transition-all"
                    href={""}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-100 transition-all"
                    href={""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center gap-[5px]">
                <li>
                  <IconButton size="large">
                    <LinkedIn className="text-white" fontSize="medium" />
                  </IconButton>
                </li>
                <li>
                  <IconButton size="large">
                    <GitHub className="text-white" fontSize="medium" />
                  </IconButton>
                </li>
                <li>
                  <IconButton size="large">
                    <Instagram className="text-white" fontSize="medium" />
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
