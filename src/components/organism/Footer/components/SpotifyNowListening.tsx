import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import SpotifyIcon from "mdi-react/SpotifyIcon";
import siteConfig from "../../../../../site.config";

export interface Props {
  isPlaying?: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function SpotifyNowListening({
  isPlaying,
  title,
  artist,
  album,
  albumImageUrl,
  songUrl,
}: Props) {
  const scrollingText = isPlaying
    ? `${title} • ${artist}`
    : "Not listening to anything • Spotify";
  const animationDuration = scrollingText.length * 0.325;

  const scrollingTextClassName = twMerge(
    "motion-safe:[animation-play-state:running] group-hocus/music:underline group-hocus/music:motion-safe:[animation-play-state:paused]",
    isPlaying
      ? "motion-safe:animate-scroll"
      : "motion-safe:animate-none truncate",
  );
  return (
    <Link
      className={twMerge(
        "m-1 w-full inline-flex mx-auto items-center flex-1 gap-6 text-tertiary-txt text-2xs text-green-500",
        "font-normal truncate hocus:text-secondary-txt hocus:no-underline max-w-xs md:max-w-sm group/music",
      )}
      title={
        isPlaying
          ? `Listen to "${title}" by "${artist}" on Spotify`
          : "My Spotify Profile"
      }
      href={
        isPlaying
          ? songUrl || ""
          : `https://open.spotify.com/user/${siteConfig.SPOTIFY_ID}`
      }
      target="_blank"
    >
      {isPlaying ? (
        <Image
          height={26}
          width={26}
          src={albumImageUrl || ""}
          alt={`Image for album: "${album}" by "${artist}"`}
          className={"border border-accent-dark/[0.12]"}
        />
      ) : (
        <SpotifyIcon
          className={"rounded-full -p-1 text-green-400 dark:text-gray-300"}
          size={30}
        />
      )}
      <div
        className={twMerge(
          "flex flex-1 max-w-full gap-24 overflow-x-hidden [mask-repeat:no-repeat] [mask-position:center]",
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
  );
}
