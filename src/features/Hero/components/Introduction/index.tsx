import React from "react";

type Props = {};

const Header = (props: Props) => (
  <div className="flex w-full items-center justify-center md:w-1/2">
    <div>
      <p className="text-6xl leading-relaxed text-purple-500 dark:text-purple-200">
        Hi there!
        <br />
        I'm <strong>Ali Heydari</strong>
      </p>
      <p className="text-3xl leading-relaxed text-blue-400 dark:text-blue-200">
        A developer who loves cats, traveling, photography and learning new
        things
      </p>
      <button className="m-3 rounded-full bg-purple-500 p-4 text-white hover:bg-purple-600 dark:bg-purple-700 hover:dark:bg-purple-500">
        Download my resume
      </button>
    </div>
  </div>
);

export default Header;
