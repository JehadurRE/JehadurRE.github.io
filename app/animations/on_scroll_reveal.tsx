// OnScrollReveal.tsx

'use client'

import { ReactNode, useEffect, useMemo, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";

interface OnScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  initial?: "hidden" | "visible";
  transition?: {
    duration: number;
    delay: number;
  };
}

export default function OnScrollReveal({
  children,
  variants,
  initial = "hidden",
  transition = { duration: 0.5, delay: 0.25 },
}: OnScrollRevealProps) {
  const controls = useAnimation();
  const secondaryControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


//   LEARN :useMemo use cases 
  const defaultVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      secondaryControls.start("visible");
    } 
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
      

      {/* Animated Children */}
      <motion.div
        variants={variants || defaultVariants}
        initial={initial}
        animate={controls}
        transition={transition}
      >
        {children}
      </motion.div>


      {/* Animated Overlay */}
      <motion.div
        className="absolute  top-1 bottom-1 left-0 right-0 bg-green-500 z-20"
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
}
