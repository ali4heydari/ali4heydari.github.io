import React from "react";
import TitleSection from "../../components/TitleSection";
import Image from "next/image";

const hardwares = [
  {
    name: "Apple MacBook pro M1 14 inch",
    image: "/static/images/uses/apple-macbook-pro-m1-14inch.jpeg",
    description: "16GB RAM, 512GB SSD",
  },
  {
    name: "Logitech MX Vertical",
    image: "/static/images/uses/logitech-mx-vertical.webp",
    description: "For MacBook",
  },
  {
    name: "Keychron K3 Mechanical Keyboard V2 (brown switches)",
    image: "/static/images/uses/keychron-k3.webp",
    description: "For MacBook",
  },
  {
    name: "Sony WF-1000XM4",
    image: "/static/images/uses/sony-wf1000xm4.jpg",
  },
  {
    name: "Mikrotik hAP ax3",
    image: "/static/images/uses/mikrotik-hap-ax3.png",
    description: "For bypassing Internet censorship and managing my network",
  },
  {
    name: "TSCO TS2189",
    image: "/static/images/uses/tsco-ts2189.webp",
  },
  {
    name: "Asus GL502VY",
    image: "/static/images/uses/asus-gl502vy.jpg",
    description: "CPU i7-6700HQ, 16GB RAM, 256GB SSD, 2TB HDD, GTX 980M",
  },
  {
    name: "Logitech G502 Hero",
    image: "/static/images/uses/logitech-g502-hero.png",
    description: "For gaming",
  },
  {
    name: "Logitech G213",
    image: "/static/images/uses/logitech-g213.png",
    description: "For gaming",
  },
  {
    name: "Asus VA24EHE",
    image: "/static/images/uses/asus-va24ehe.png",
  },
  {
    name: "LCD arm",
    image: "/static/images/uses/lcd-arm.jpeg",
    description: "For holding my monitors",
  },
];
const Uses = () => {
  return (
    <section>
      <TitleSection>Uses</TitleSection>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Hardware
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {hardwares.map((hardware) => (
          <div
            key={hardware.name}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center"
          >
            <Image
              className="rounded-2xl w-36 h-26 object-cover p-1"
              src={hardware.image}
              alt={hardware.name}
              width={200}
              height={150}
            />
            <div className="m-2 space-y-1">
              <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                {hardware.name}
              </h5>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {hardware.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Uses;
