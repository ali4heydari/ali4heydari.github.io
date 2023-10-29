"use client";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
  className?: string;
}

const Mdx = (props: MdxProps) => {
  const MdxComponent = useMDXComponent(props.code);
  return (
    <article className={twMerge(classNames("mdx-article", props.className))}>
      <MdxComponent />
    </article>
  );
};

export default Mdx;
