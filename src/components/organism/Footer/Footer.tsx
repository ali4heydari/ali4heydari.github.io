"use client";

import { useQuery } from "@tanstack/react-query";
import { navigation } from "../../../constants";
import { getJson } from "../../../utils";
import StyledLink from "../../atoms/Link";
import SpotifyNowListening from "./components/SpotifyNowListening";
import SteamNowPlaying from "./components/SteamNowPlaying";

const Footer = () => {
  const { data } = useQuery({
    queryKey: ["/api/now-playing"],
    queryFn: () => getJson("/api/now-playing"),
  });
  return (
    <footer className="bg-white p-4 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                General
              </h2>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                {navigation.primary.map((it) => (
                  <li key={it.name}>
                    <StyledLink href={it.href} className="font-normal">
                      <it.svgIcon className="mr-2 inline-block h-4 w-4" />
                      {it.name}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Other
              </h2>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                {navigation.secondary.map((it) => (
                  <li key={it.name}>
                    <StyledLink href={it.href} className="font-normal">
                      <it.svgIcon className="mr-2 inline-block h-4 w-4" />
                      {it.name}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Personality
              </h2>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                {navigation.tertiary.map((it) => (
                  <li key={it.name}>
                    <StyledLink href={it.href} className="font-normal">
                      <it.svgIcon className="mr-2 inline-block h-4 w-4" />
                      {it.name}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-6 flex flex-col items-center">
            <SpotifyNowListening {...(data as any)?.data?.spotify} />
            <SteamNowPlaying {...(data as any)?.data?.steam} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()} Ali Heydari . All Rights Reserved.
          </span>
          <div className="mt-4 flex flex-wrap justify-center space-x-1 space-y-1 sm:mt-0 sm:justify-center">
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
