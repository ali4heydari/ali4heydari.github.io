import type { CSSProperties, ReactNode, ComponentProps } from "react";
import classNames from "classnames";

type ShimmerButtonProps = {
  background?: string;
  borderRadius?: string;
  children?: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerDuration?: string;
  shimmerSize?: string;
} & ComponentProps<"button">;

const ShimmerButton = ({
  background = "radial-gradient(ellipse 80% 50% at 50% 120%,rgb(17, 24, 39),rgb(31, 41, 55)",
  borderRadius = "100px",
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerDuration = "1.5s",
  shimmerSize = "1px",
  ...props
}: ShimmerButtonProps) => {
  return (
    <button
      style={
        {
          "--bg": background,
          "--cut": shimmerSize,
          "--radius": borderRadius,
          "--shimmer-color": shimmerColor,
          "--speed": shimmerDuration,
          "--spread": "90deg",
        } as CSSProperties
      }
      className={classNames(
        "group relative flex h-11 cursor-pointer overflow-hidden whitespace-nowrap px-6 text-white shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]",
        "transition-all duration-300 [background:var(--bg)] [border-radius:var(--radius)] hover:scale-105 dark:text-black",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div
            className={classNames(
              "absolute inset-[-100%] w-auto rotate-0 animate-spin",
              "[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]",
            )}
          />
        </div>
      </div>
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
      {children}
    </button>
  );
};

export default ShimmerButton;
