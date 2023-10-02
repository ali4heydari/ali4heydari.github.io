import React from "react";
import TitleSection from "../../components/TitleSection";
import Image from "next/image";
import { getStaticMetadata } from "../../utils/metadata";
import { buildOgImageUrl } from "../../utils/opengraph";
import Link from "../../components/atoms/Link";

const hardwares = [
  {
    name: "Apple MacBook pro M1 14 inch",
    image: "/static/images/uses/hardware/apple-macbook-pro-m1-14inch.jpeg",
    description: "16GB RAM, 512GB SSD",
  },
  {
    name: "Logitech MX Vertical",
    image: "/static/images/uses/hardware/logitech-mx-vertical.webp",
    description: "For MacBook",
  },
  {
    name: "Keychron K3 Mechanical Keyboard V2 (brown switches)",
    image: "/static/images/uses/hardware/keychron-k3.webp",
    description: "For MacBook",
  },
  {
    name: "Sony WF-1000XM4",
    image: "/static/images/uses/hardware/sony-wf1000xm4.jpg",
  },
  {
    name: "Mikrotik hAP ax3",
    image: "/static/images/uses/hardware/mikrotik-hap-ax3.png",
    description: "For bypassing Internet censorship and managing my network",
  },
  {
    name: "TSCO TS2189",
    image: "/static/images/uses/hardware/tsco-ts2189.webp",
  },
  {
    name: "Asus GL502VY",
    image: "/static/images/uses/hardware/asus-gl502vy.jpg",
    description: "CPU i7-6700HQ, 16GB RAM, 256GB SSD, 2TB HDD, GTX 980M",
  },
  {
    name: "Logitech G502 Hero",
    image: "/static/images/uses/hardware/logitech-g502-hero.png",
    description: "For gaming",
  },
  {
    name: "Logitech G213",
    image: "/static/images/uses/hardware/logitech-g213.png",
    description: "For gaming",
  },
  {
    name: "Asus VA24EHE",
    image: "/static/images/uses/hardware/asus-va24ehe.png",
  },
  {
    name: "LCD arm",
    image: "/static/images/uses/hardware/lcd-arm.jpeg",
    description: "For holding my monitors",
  },
];

const softwares = [
  {
    name: "WebStorm",
    image: "/static/images/uses/software/webstorm.png",
    description: "For coding",
    href: "https://www.jetbrains.com/webstorm/",
    tags: ["Coding", "Windows", "MacOS"],
  },
  {
    name: "CleanShot X",
    image: "/static/images/uses/software/cleanshot-x.png",
    description: "For taking screenshots",
    href: "https://cleanshot.com/",
    tags: ["Tool", "MacOS"],
  },
  {
    name: "CleanMyMac X",
    image: "/static/images/uses/software/cleanmymac-x.png",
    description: "For cleaning my Mac",
    href: "https://macpaw.com/cleanmymac",
    tags: ["Tool", "Performance", "MacOS"],
  },
  {
    name: "Raycast",
    image: "/static/images/uses/software/raycast.png",
    description: "For searching and executing commands",
    href: "https://raycast.com/",
    tags: ["Tool", "Coding", "Productivity", "MacOS"],
  },
  {
    name: "AlDente Pro",
    image: "/static/images/uses/software/aldente-pro.png",
    description: "For managing battery health",
    href: "https://aldente.app/",
    tags: ["Tool", "Performance", "MacOS"],
  },
  {
    name: "Rectangle",
    image: "/static/images/uses/software/rectangle.png",
    description: "For managing windows",
    href: "https://rectangleapp.com/",
    tags: ["Tool", "Productivity", "MacOS"],
  },
  {
    name: "WinDirStat",
    image: "/static/images/uses/software/windirstat.png",
    description: "For managing storage",
    href: "https://windirstat.net/",
    tags: ["Tool", "Productivity", "Windows"],
  },
  {
    name: "Everything",
    image: "/static/images/uses/software/everything.png",
    description: "For searching files",
    href: "https://www.voidtools.com/",
    tags: ["Tool", "Windows"],
  },
  {
    name: "SysInternals Suite",
    image: "/static/images/uses/software/sysinternals-suite.png",
    description: "Contains many useful tools to become superuser on Windows",
    href: "https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite",
    tags: ["Tool", "Coding", "Windows"],
  },
  {
    name: "NetSetMan",
    image: "/static/images/uses/software/netsetman.png",
    description: "For managing network profiles on Windows",
    href: "https://www.netsetman.com/",
    tags: ["Tool", "Windows"],
  },
  {
    name: "Notion",
    image: "/static/images/uses/software/notion.png",
    description: "For taking notes, and managing my life",
    href: "https://www.notion.so/",
    tags: ["Tool", "Productivity", "Windows", "MacOS"],
  },
  {
    name: "Stremio",
    image: "/static/images/uses/software/stremio.png",
    description: "For watching movies and series",
    href: "https://www.stremio.com/",
    tags: ["Windows", "MacOS", "Linux", "AndroidTV", "DailyUse"],
  },
  {
    name: "Jellyfin",
    image: "/static/images/uses/software/jellyfin.png",
    description: "For watching movies and series",
    href: "https://jellyfin.org/",
    tags: ["Windows", "MacOS", "Linux", "AndroidTV", "DailyUse"],
  },
  {
    name: "Fiddler classic",
    image: "/static/images/uses/software/fiddler-classic.png",
    description: "For debugging HTTP requests",
    href: "https://www.telerik.com/fiddler",
    tags: ["Tool", "Coding", "Windows"],
  },
  {
    name: "Proxifier",
    image: "/static/images/uses/software/proxifier.png",
    description: "For bypassing Internet censorship",
    href: "https://www.proxifier.com/",
    tags: ["Tool", "FilterNet", "Windows"],
  },
  {
    name: "OBS Studio",
    image: "/static/images/uses/software/obs-studio.png",
    description: "For streaming and recording",
    href: "https://obsproject.com/",
    tags: ["Tool", "Windows", "MacOS"],
  },
  {
    name: "Responsively",
    image: "/static/images/uses/software/responsively.png",
    description: "For testing responsive websites",
    href: "https://responsively.app/",
    tags: ["Tool", "Coding", "Windows", "MacOS"],
  },
  {
    name: "InkScape",
    image: "/static/images/uses/software/inkscape.png",
    description: "For vector graphics",
    href: "https://inkscape.org/",
    tags: ["Tool", "Graphic", "Windows", "MacOS"],
  },
  {
    name: "iTerm2",
    image: "/static/images/uses/software/iterm2.png",
    description: "For terminal",
    href: "https://iterm2.com/",
    tags: ["Tool", "Coding", "MacOS"],
  },
  {
    name: "Meld",
    image: "/static/images/uses/software/meld.png",
    description: "For comparing files",
    href: "https://meldmerge.org/",
    tags: ["Tool", "Coding", "Windows", "MacOS"],
  },
  {
    name: "Tabby",
    image: "/static/images/uses/software/tabby.webp",
    description: "For terminal",
    href: "https://tabby.sh/",
    tags: ["Tool", "Coding", "Windows"],
  },
];

export const metadata = getStaticMetadata({
  title: "Uses – Ali Heydari",
  description:
    "Get to know about my setup, hardware, software and tools I use on a daily basis",
  exactUrl: "https://ali4heydari.tech/uses",
  keywords: [
    "hardware",
    "software",
    "apps",
    "tools",
    "extensions",
    "stack",
    "website",
    "tech",
    "uses",
  ],
  image: buildOgImageUrl("uses"),
});

const Uses = () => {
  return (
    <section>
      <TitleSection>Uses</TitleSection>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Hardware
      </h2>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2 mb-3">
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
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl p-3">
        Software
      </h2>
      <div className="flex justify-center gap-2 flex-wrap py-3 m-2">
        {["All", ...new Set(softwares.flatMap((s) => s.tags))].map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-lg px-2 py-1 border border-gray-200 dark:border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2">
        {softwares.map((software) => (
          <Link key={software.name} href={software.href} target="_blank">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2 p-4 lg:flex-col lg:justify-center h-full">
              <Image
                className="rounded-2xl w-36 h-26 object-cover p-1"
                src={software.image}
                alt={software.name}
                width={200}
                height={150}
              />
              <div className="m-2 space-y-1">
                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {software.name}
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {software.description}
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                  {software.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-lg px-2 py-1 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Uses;
