import { useEffect, useRef } from "react";
import RevealStyled from "./RevealStyled";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactElement;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("changed");
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <RevealStyled ref={ref} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { x: 0 },
          visible: { x: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className="orange-marker"
      />
    </RevealStyled>
  );
};

export default Reveal;
