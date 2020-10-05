import tw, { TwStyle } from "twin.macro";
import React from "react";

interface TechChipProps {
  name: string;
  emoji?: string;
  href?: string;
  twStyle?: TwStyle;
}

export function Chip({
  name,
  emoji,
  href,
  twStyle = tw` text-green-700 bg-green-100 border-green-300`,
}: TechChipProps) {
  return (
    <div
      css={[
        tw`inline justify-center items-center m-1 font-medium px-1 py-0 bg-white rounded-full border`,
        twStyle,
      ]}
    >
      <a
        css={tw`table-cell text-xs font-normal leading-none max-w-full flex-initial`}
        href={href}
      >
        {emoji ? (
          <span role="img" aria-label={`${name}'s emoji`}>
            {emoji}{" "}
          </span>
        ) : null}
        {name}
      </a>
    </div>
  );
}
