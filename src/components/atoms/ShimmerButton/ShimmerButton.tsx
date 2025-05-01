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
        "group relative flex h-11 cursor-pointer overflow-hidden px-6 whitespace-nowrap text-white shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]",
        "[border-radius:var(--radius)] transition-all duration-300 [background:var(--bg)] hover:scale-105 dark:text-black",
        className,
      )}
      {...props}
    >
      <div className="[container-type:size] absolute inset-0 overflow-visible">
        <div className="animate-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
          <div
            className={classNames(
              "absolute inset-[-100%] w-auto rotate-0 animate-spin",
              "[translate:0_0] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]",
            )}
          />
        </div>
      </div>
      <div className="absolute [inset:var(--cut)] [border-radius:var(--radius)] [background:var(--bg)]" />
      {children}
    </button>
  );
};

export default ShimmerButton;
