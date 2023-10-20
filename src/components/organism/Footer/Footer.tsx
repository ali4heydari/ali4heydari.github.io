"use client";
import SpotifyNowListening from "./components/SpotifyNowListening";
import SteamNowPlaying from "./components/SteamNowPlaying";
import useMasterQuery from "../../../hooks/useMasterQuery";
import { navigation } from "../../../constants";
import StyledLink from "../../atoms/Link";

const Footer = () => {
  const { data } = useMasterQuery(["/api/now-playing"], () =>
    fetch("/api/now-playing", {}).then((res) => res.json()),
  );
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                General
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                {navigation.primary.map((it) => (
                  <li key={it.name}>
                    <StyledLink href={it.href} className="font-normal">
                      <it.svgIcon className="w-4 h-4 mr-2 inline-block" />
                      {it.name}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Other
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                {navigation.secondary.map((it) => (
                  <li key={it.name}>
                    <StyledLink href={it.href} className="font-normal">
                      <it.svgIcon className="w-4 h-4 mr-2 inline-block" />
                      {it.name}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Personality
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                {navigation.tertiary.map((it) => (
                  <li key={it.name}>
                    <StyledLink href={it.href} className="font-normal">
                      <it.svgIcon className="w-4 h-4 mr-2 inline-block" />
                      {it.name}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-6 flex flex-col items-center">
            <SpotifyNowListening {...data?.spotify} />
            <SteamNowPlaying {...data?.steam} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Ali Heydari . All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center mt-4 space-x-1 space-y-1 sm:justify-center sm:mt-0">
            {navigation.socialMedias.map((it) => (
              <StyledLink
                href={it.link}
                key={it.name}
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">{it.name}</span>
                <it.icon />
              </StyledLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
