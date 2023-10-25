import React from "react";
import Link from "next/link";
import Image from "next/image";
import bitMoji from "../../../assets/images/me/bitmoji.png";

export type LogoProps = {
  className?: string;
};
const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={className} href="/">
      <Image
        src={bitMoji}
        placeholder="blur"
        alt="Animoji representation of Ali Heydari"
        width={60}
        height={60}
        className="w-15 h-15 rounded-full transition duration-150 ease-in-out hover:-rotate-6 hover:opacity-75 hover:shadow-lg"
      />
    </Link>
  );
};

export default Logo;
