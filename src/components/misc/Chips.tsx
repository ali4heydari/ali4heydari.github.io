import tw from "twin.macro";
import React from "react";

interface TechChipProps {
  name: string;
  emoji?: string;
}

export function TechChip({ name, emoji }: TechChipProps) {
  return (
    <div
      css={tw`inline justify-center items-center m-1 font-medium px-1 py-0 bg-white rounded-full text-green-700 bg-green-100 border border-green-300`}
    >
      <div
        css={tw`table-cell text-xs font-normal leading-none max-w-full flex-initial`}
      >
        {emoji ? (
          <span role="img" aria-label={`${name}'s emoji`}>
            {emoji}{" "}
          </span>
        ) : null}
        {name}
      </div>
    </div>
  );
}
