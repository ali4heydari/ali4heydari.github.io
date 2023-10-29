import SpotifyIcon from "mdi-react/SpotifyIcon";
import SteamIcon from "mdi-react/SteamIcon";
import { twMerge } from "tailwind-merge";
import siteConfig from "../../../../../site.config";
import Image from "next/image";
import Link from "next/link";

export default function SteamNowPlaying({
  isPlaying = false,
  gameUrl,
  profileUrl,
  personName,
  gameName,
}) {
  const scrollingText = isPlaying
    ? `Playing ${gameName} • ${personName}`
    : "Not Playing • Steam";
  const animationDuration = scrollingText.length * 0.325;

  const scrollingTextClassName = twMerge(
    "motion-safe:[animation-play-state:running] group-hocus/music:underline group-hocus/music:motion-safe:[animation-play-state:paused]",
    isPlaying
      ? "motion-safe:animate-scroll"
      : "motion-safe:animate-none truncate",
  );

  return (
    <div className="flex justify-center">
      <Link
        className={twMerge(
          "text-tertiary-txt text-2xs m-1 mx-auto inline-flex w-full flex-1 items-center gap-6 text-stone-500 dark:text-stone-300",
          "hocus:text-secondary-txt group/music max-w-xs truncate font-normal hocus:no-underline md:max-w-sm",
        )}
        title={
          isPlaying ? `Checkout "${gameName}" on Steam` : "My Steam Profile"
        }
        href={
          (isPlaying ? gameUrl : profileUrl) ||
          `https://steamcommunity.com/id/${siteConfig.STEAM_ID}`
        }
        target="_blank"
      >
        <SteamIcon className={"-p-1 rounded-full"} size={30} />
        <div
          className={twMerge(
            "flex max-w-full flex-1 gap-24 overflow-x-hidden [mask-position:center] [mask-repeat:no-repeat]",
            isPlaying
              ? "[mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_100%)]"
              : "[mask-image:none]",
          )}
          style={{ animationDuration: `${animationDuration}s` }}
        >
          <span className={scrollingTextClassName}>{scrollingText}</span>
          {Boolean(isPlaying) && (
            <>
              <span
                aria-hidden={true}
                className={twMerge(
                  "pointer-events-none select-none",
                  isPlaying && scrollingTextClassName,
                )}
              >
                {scrollingText}
              </span>
              <span
                aria-hidden={true}
                className={twMerge(
                  "pointer-events-none select-none",
                  isPlaying && scrollingTextClassName,
                )}
              >
                {scrollingText}
              </span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
