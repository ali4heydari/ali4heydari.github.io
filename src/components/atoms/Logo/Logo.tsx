import React from "react";
import bitMoji from "src/assets/images/me/bitmoji.png";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={className} href="/">
      <Image
        src={bitMoji}
        placeholder="blur"
        alt="Animoji representation of Ali Heydari"
        width={60}
        height={60}
        className="rounded-full transition duration-150 ease-in-out hover:-rotate-6 hover:opacity-75 hover:shadow-lg"
      />
    </Link>
  );
};

export default Logo;
