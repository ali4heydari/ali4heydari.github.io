import React from "react";
import meNextToATree from "src/assets/images/me/next-to-a-tree.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div className="mx-auto max-w-2xl pb-20 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
      <h1 className="mt-3 max-w-2xl text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:col-span-2 xl:col-auto">
        Hi There, I&#39;m <br />
        <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Ali Heydari
        </span>
      </h1>
      <div className="mx-auto mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          A developer who is passionate about building products that impact
          people&#39;s lives. I am a full stack developer with a passion for
          learning and building. I like music, video games, and reading.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="https://github.com/ali4heydari/CV/releases/latest/download/CV.pdf"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Download my resume
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-gray-50 px-3.5 py-2.5 text-sm  font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            More about me<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <Image
        src={meNextToATree}
        placeholder="blur"
        alt="Ali Heydari next to a tree with crossed arms"
        className="mx-auto mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-5"
      />
    </div>
  );
};

export default Hero;