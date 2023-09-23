import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/static/images/site/ali4heydari/bitmoji.png"
        alt="Animoji representation of Ali Heydari"
        width={60}
        height={60}
        className="w-15 h-15 rounded-full hover:opacity-75 hover:shadow-lg transition duration-150 ease-in-out hover:-rotate-6"
      />
    </Link>
  );
};

export default Logo;
