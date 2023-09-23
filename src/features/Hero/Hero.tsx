import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 pb-20">
      <h1 className="mt-3 text-center max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:col-span-2 xl:col-auto">
        Hi There, I&#39;m <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-indigo-400">
          Ali Heydari
        </span>
      </h1>
      <div className="mx-auto mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          A developer who is passionate about building products that impact
          people&#39;s lives. I am a full stack developer with a passion for
          learning and building. I like music, video games, and reading.
        </p>
        <div className="mt-10 flex items-center justify-center flex-wrap gap-6">
          <Link
            href="/share/cv.pdf"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Download my resume
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 border  px-3.5 py-2.5 rounded-md border-gray-50"
          >
            More about me<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <img
        src="/static/images/hero-banner.jpg"
        alt="Ali Heydari"
        className="mt-10 mx-auto aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-5"
      />
    </div>
  );
};

export default Hero;
