import { useEffect, useRef } from "react";
import RevealStyled from "./RevealStyled";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactElement;
  movement: "bottom" | "above" | "left";
  hasColorWrapper: boolean;
  transitionDelay?: number;
  width?: "fit-content" | "100%";
}

const Reveal = ({
  children,
  width = "fit-content",
  transitionDelay,
  hasColorWrapper,
  movement,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const currentDelay = transitionDelay ?? 0.3;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <RevealStyled ref={ref} style={{ width }}>
      {movement === "bottom" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: currentDelay }}
        >
          {children}
        </motion.div>
      )}
      {movement === "above" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: currentDelay }}
        >
          {children}
        </motion.div>
      )}
      {movement === "left" && (
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: currentDelay }}
        >
          {children}
        </motion.div>
      )}
      {hasColorWrapper && (
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
      )}
    </RevealStyled>
  );
};

export default Reveal;
