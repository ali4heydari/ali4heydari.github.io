"use client";

import * as runtime from "react/jsx-runtime";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface MdxProps {
  className?: string;
  code: string;
}

const getMDXComponent = (code: string) => {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const Mdx = (props: MdxProps) => {
  if (!props.code) return null;
  const MdxComponent = getMDXComponent(props.code);

  return (
    <article className={twMerge(classNames("mdx-article", props.className))}>
      <MdxComponent />
    </article>
  );
};

export default Mdx;
