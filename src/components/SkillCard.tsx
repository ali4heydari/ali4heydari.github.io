import React, { ComponentType } from "react";
import tw from "twin.macro";

interface SkillCardProps {
  icon: React.ReactElement | ComponentType<any>;
  title: string;
  description: string;
}
export function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <div
      css={tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
    >
      <span css={tw`border text-center rounded-full p-1 flex-shrink-0`}>
        {icon}
      </span>
      <span css={tw`sm:ml-4 mt-4 sm:mt-2`}>
        <span css={tw`mt-4 tracking-wide font-bold text-2xl leading-none`}>
          {title}
        </span>
        <p css={tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}>
          {description}
        </p>
      </span>
    </div>
  );
}
