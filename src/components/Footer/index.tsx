"use client";
import React from "react";
import Link from "next/link";
import SpotifyNowListening from "./components/SpotifyNowListening";
import SteamNowPlaying from "./components/SteamNowPlaying";
import useMasterQuery from "../../hooks/useMasterQuery";
import { navigation } from "../../constants";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const { data } = useMasterQuery(["/api/now-playing"], () =>
    fetch("/api/now-playing", {}).then((res) => res.json())
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
              <ul className="text-gray-600 dark:text-gray-400">
                {navigation.primary.map((it) => (
                  <li key={it.name}>
                    <Link href={it.href} className="hover:underline">
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Personality
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {navigation.secondary.map((it) => (
                  <li key={it.name}>
                    <Link href={it.href} className="hover:underline">
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Other
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {navigation.tertiary.map((it) => (
                  <li key={it.name}>
                    <Link href={it.href} className="hover:underline">
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <SpotifyNowListening {...data?.spotify} />
            <SteamNowPlaying {...data?.steam} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Ali Heydari . All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-2 mt-4 space-x-6 sm:justify-center sm:mt-0">
            {navigation.socialMedias.map((it) => (
              <Link
                href={it.link}
                key={it.name}
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">{it.name}</span>
                <it.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
