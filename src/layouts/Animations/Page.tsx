import React from "react";
import { motion } from "framer-motion";

type Props = {};

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const Page: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      {props.children}
    </motion.div>
  );
};

export default Page;
