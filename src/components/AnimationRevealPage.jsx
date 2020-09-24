import React from "react";
import tw from "twin.macro";

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion";
import useInView from "use-in-view";

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[i % directions.length]}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({
  direction = "left",
  offset = 30,
  children,
}) {
  const [ref, inView] = useInView(offset);

  const x = { target: "0%", initial: "150%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={
        inView
          ? {
              x: x.target,
              transitionEnd: {
                x: 0,
              },
            }
          : undefined
      }
      transition={{ type: "spring", damping: 15 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
}

export function AnimationRevealPage(props) {
  return (
    <div
      css={tw`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`}
    >
      <AnimationReveal {...props} />
    </div>
  );
}
