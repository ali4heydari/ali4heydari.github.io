/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "tailwindcss/dist/base.min.css";
import React from "react";

import { App } from "./src/components/App";

// https://github.com/gatsbyjs/gatsby/issues/9087#issuecomment-723294431
export const onServiceWorkerUpdateReady = async (args) => {
  const permissionResponse = await Notification.requestPermission();
  if (permissionResponse === "granted") {
    await args.serviceWorker.showNotification("Website update", {
      body:
        "Our website just got a little bit better. We reloaded the site with the update to ensure a smooth experience for you.",
      icon: `/icons/icon-512x512.png`,
    });
  }
  typeof window !== "undefined" && window.location.reload(true);
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
