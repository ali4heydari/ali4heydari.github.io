import React from "react";

type Props = {};

const Header = (props: Props) => (
  <div className="flex w-full items-center justify-center md:w-1/2">
    <div>
      <p className="text-6xl font-black leading-relaxed text-blue-500 dark:text-blue-200">
        Hi there!
        <br />
        I'm <strong>Ali Heydari</strong>
      </p>
      <p className="text-3xl leading-relaxed text-blue-400 dark:text-blue-200">
        A developer who loves cats, traveling, photography and learning new
        things
      </p>
      <button className="m-3 rounded-full bg-blue-500 p-4 text-white hover:bg-blue-600 dark:bg-blue-700 hover:dark:bg-blue-500">
        Download my resume
      </button>
    </div>
  </div>
);

export default Header;
