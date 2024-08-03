import React from "react";
import { useScroll } from "framer-motion";
import { ScrollProgress } from "./ProgressBarElements";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <ScrollProgress
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ProgressBar;
