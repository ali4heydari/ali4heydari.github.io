import appleMacbookProM1 from "src/assets/images/uses/hardware/apple-macbook-pro-m1-14inch.png";
import asusGL502VY from "src/assets/images/uses/hardware/asus-gl502vy.png";
import asusVA24EHE from "src/assets/images/uses/hardware/asus-va24ehe.png";
import keychronK3 from "src/assets/images/uses/hardware/keychron-k3.png";
import lcdArm from "src/assets/images/uses/hardware/lcd-arm.png";
import logitechG213 from "src/assets/images/uses/hardware/logitech-g213.png";
import logitechG502Hero from "src/assets/images/uses/hardware/logitech-g502-hero.png";
import logitechMxVertical from "src/assets/images/uses/hardware/logitech-mx-vertical.png";
import mikrotikHapAx3 from "src/assets/images/uses/hardware/mikrotik-hap-ax3.png";
import mikrotikHapAxLiteLte6 from "src/assets/images/uses/hardware/mikrotik-hap-ax-lite-lte6.png";
import nanoPiR5C from "src/assets/images/uses/hardware/nano-pi-r5c.png";
import sonyWF1000XM4 from "src/assets/images/uses/hardware/sony-wf1000xm4.png";
import tscoTs2189 from "src/assets/images/uses/hardware/tsco-ts2189.png";
import aldentePro from "src/assets/images/uses/software/aldente-pro.png";
import cleanmymacX from "src/assets/images/uses/software/cleanmymac-x.png";
import cleanshotX from "src/assets/images/uses/software/cleanshot-x.png";
import everything from "src/assets/images/uses/software/everything.png";
import fiddlerClassic from "src/assets/images/uses/software/fiddler-classic.png";
import inkscape from "src/assets/images/uses/software/inkscape.png";
import iTerm2 from "src/assets/images/uses/software/iterm2.png";
import jellyfin from "src/assets/images/uses/software/jellyfin.png";
import meld from "src/assets/images/uses/software/meld.png";
import netsetman from "src/assets/images/uses/software/netsetman.png";
import notion from "src/assets/images/uses/software/notion.png";
import obsStudio from "src/assets/images/uses/software/obs-studio.png";
import proxifier from "src/assets/images/uses/software/proxifier.png";
import raycast from "src/assets/images/uses/software/raycast.png";
import rectangle from "src/assets/images/uses/software/rectangle.png";
import responsively from "src/assets/images/uses/software/responsively.png";
import stremio from "src/assets/images/uses/software/stremio.png";
import sysinternalsSuite from "src/assets/images/uses/software/sysinternals-suite.png";
import tabby from "src/assets/images/uses/software/tabby.webp";
import webstorm from "src/assets/images/uses/software/webstorm.png";
import windirstat from "src/assets/images/uses/software/windirstat.png";

export const hardware = [
  {
    description: "16GB RAM, 512GB SSD",
    image: appleMacbookProM1,
    name: "Apple MacBook pro M1 14 inch",
  },
  {
    description: "You wrist will thank you for this 🤌",
    image: logitechMxVertical,
    name: "Logitech MX Vertical",
  },
  {
    description: "Unique type experience 🤝",
    image: keychronK3,
    name: "Keychron K3 Mechanical Keyboard V2 (brown switches)",
  },
  {
    description: "Excellent noise cancellation 👌",
    image: sonyWF1000XM4,
    name: "Sony WF-1000XM4",
  },
  {
    description: "For bypassing Internet censorship and managing my network 🛜",
    image: mikrotikHapAx3,
    name: "Mikrotik hAP ax3",
  },
  {
    description: "Travel router 🧳",
    image: mikrotikHapAxLiteLte6,
    name: "Mikrotik hAP ax lite LTE6",
  },
  {
    description: "4GB RAM, 32GB eMMC, M.2 WiFi Bluetooth card, 2x USB 3.0",
    image: nanoPiR5C,
    name: "NanoPi R5C",
  },
  {
    description: "Not the best, but it does the job 🦾",
    image: tscoTs2189,
    name: "TSCO TS2189",
  },
  {
    description: "CPU i7-6700HQ, 16GB RAM, 256GB SSD, 2TB HDD, GTX 980M",
    image: asusGL502VY,
    name: "Asus GL502VY",
  },
  {
    description: "For gaming",
    image: logitechG502Hero,
    name: "Logitech G502 Hero",
  },
  {
    description: "For gaming",
    image: logitechG213,
    name: "Logitech G213",
  },
  {
    description: "Not the best, but it does the job 🦾",
    image: asusVA24EHE,
    name: "Asus VA24EHE",
  },
  {
    description: "Economical and does the job 🦾",
    image: lcdArm,
    name: "LCD arm",
  },
];

export const software = [
  {
    description: "For coding",
    href: "https://www.jetbrains.com/webstorm/",
    image: webstorm,
    name: "WebStorm",
    tags: ["Coding", "Windows", "MacOS"],
  },
  {
    description: "For taking screenshots",
    href: "https://cleanshot.com/",
    image: cleanshotX,
    name: "CleanShot X",
    tags: ["Tool", "MacOS"],
  },
  {
    description: "For cleaning my Mac",
    href: "https://macpaw.com/cleanmymac",
    image: cleanmymacX,
    name: "CleanMyMac X",
    tags: ["Tool", "Performance", "MacOS"],
  },
  {
    description: "For searching and executing commands",
    href: "https://raycast.com/",
    image: raycast,
    name: "Raycast",
    tags: ["Tool", "Coding", "Productivity", "MacOS"],
  },
  {
    description: "For managing battery health",
    href: "https://aldente.app/",
    image: aldentePro,
    name: "AlDente Pro",
    tags: ["Tool", "Performance", "MacOS"],
  },
  {
    description: "For managing windows",
    href: "https://rectangleapp.com/",
    image: rectangle,
    name: "Rectangle",
    tags: ["Tool", "Productivity", "MacOS"],
  },
  {
    description: "For managing storage",
    href: "https://windirstat.net/",
    image: windirstat,
    name: "WinDirStat",
    tags: ["Tool", "Productivity", "Windows"],
  },
  {
    description: "For searching files",
    href: "https://www.voidtools.com/",
    image: everything,
    name: "Everything",
    tags: ["Tool", "Windows"],
  },
  {
    description: "Contains many useful tools to become superuser on Windows",
    href: "https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite",
    image: sysinternalsSuite,
    name: "SysInternals Suite",
    tags: ["Tool", "Coding", "Windows"],
  },
  {
    description: "For managing network profiles on Windows",
    href: "https://www.netsetman.com/",
    image: netsetman,
    name: "NetSetMan",
    tags: ["Tool", "Windows"],
  },
  {
    description: "For taking notes, and managing my life",
    href: "https://www.notion.so/",
    image: notion,
    name: "Notion",
    tags: ["Tool", "Productivity", "Windows", "MacOS"],
  },
  {
    description: "For watching movies and series",
    href: "https://www.stremio.com/",
    image: stremio,
    name: "Stremio",
    tags: ["Windows", "MacOS", "Linux", "AndroidTV", "DailyUse"],
  },
  {
    description: "For watching movies and series",
    href: "https://jellyfin.org/",
    image: jellyfin,
    name: "Jellyfin",
    tags: ["Windows", "MacOS", "Linux", "AndroidTV", "DailyUse"],
  },
  {
    description: "For debugging HTTP requests",
    href: "https://www.telerik.com/fiddler",
    image: fiddlerClassic,
    name: "Fiddler classic",
    tags: ["Tool", "Coding", "Windows"],
  },
  {
    description: "For bypassing Internet censorship",
    href: "https://www.proxifier.com/",
    image: proxifier,
    name: "Proxifier",
    tags: ["Tool", "FilterNet", "Windows"],
  },
  {
    description: "For streaming and recording",
    href: "https://obsproject.com/",
    image: obsStudio,
    name: "OBS Studio",
    tags: ["Tool", "Windows", "MacOS"],
  },
  {
    description: "For testing responsive websites",
    href: "https://responsively.app/",
    image: responsively,
    name: "Responsively",
    tags: ["Tool", "Coding", "Windows", "MacOS"],
  },
  {
    description: "For vector graphics",
    href: "https://inkscape.org/",
    image: inkscape,
    name: "InkScape",
    tags: ["Tool", "Graphic", "Windows", "MacOS"],
  },
  {
    description: "For terminal",
    href: "https://iterm2.com/",
    image: iTerm2,
    name: "iTerm2",
    tags: ["Tool", "Coding", "MacOS"],
  },
  {
    description: "For comparing files",
    href: "https://meldmerge.org/",
    image: meld,
    name: "Meld",
    tags: ["Tool", "Coding", "Windows", "MacOS"],
  },
  {
    description: "For terminal",
    href: "https://tabby.sh/",
    image: tabby,
    name: "Tabby",
    tags: ["Tool", "Coding", "Windows"],
  },
];
