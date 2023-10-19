"use client";
import classNames from "classnames";
import { useMDXComponent } from "next-contentlayer/hooks";
import { twMerge } from "tailwind-merge";

interface MdxProps {
  code: string;
  className?: string;
}

export const Mdx = (props: MdxProps) => {
  const MdxComponent = useMDXComponent(props.code);
  return (
    <article className={twMerge(classNames("mdx-article", props.className))}>
      <MdxComponent />
    </article>
  );
};
