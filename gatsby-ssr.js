import React from "react";
import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/constants";

import { App } from "./src/components/App";

function setColorsByTheme() {
  // Don't use backticks around emojis. Breaks replacement in boundFn below.
  const [colors, colorModeKey, colorModeCssProp] = ["🌈", "🔑", "⚡️"];
  // Default value if the user never used DarkToggle is to use the OS color mode.
  let colorMode = `osPref`;

  // Only try to parse value from localStorage if there seems to be one.
  const persistedPreference =
    localStorage[colorModeKey] && JSON.parse(localStorage[colorModeKey]);
  if ([`light`, `dark`, `osPref`].includes(persistedPreference))
    colorMode = persistedPreference;

  document.body.style.setProperty(colorModeCssProp, colorMode);

  // Here we set the actual colors for the page after SSR.
  // colorByMode only supports `dark` or `light`. So if colorMode
  // is `osPref` we pick either of those depending on prefersDarkFromMQ.
  if (colorMode === `osPref`) {
    const mq = window.matchMedia(`(prefers-color-scheme: dark)`);
    const prefersDarkFromMQ = mq.matches;
    colorMode = prefersDarkFromMQ ? `dark` : `light`;
  }

  for (const [name, colorByMode] of Object.entries(colors))
    document.body.style.setProperty(`--color-${name}`, colorByMode[colorMode]);
}

function RssSetColorsByTheme() {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  // Turn boundFn into an IIFE so it runs asap. Also avoids polluting global namespace.
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

// If the user disabled JS, the injected script setColorsByTheme will
// never run and no colors will be set. Everything will be default
// black and white. By injecting a `<style>` tag into the head of the
// document, we can set default values for all of our colors. Only
// light mode will be available for users with JS disabled.
function FallbackStyles({ cssColors = `` }) {
  // Create a string holding each CSS variable:
  // `--color-text: black;\n--color-background: white;\n...`

  for (const [name, colorByMode] of Object.entries(COLORS))
    cssColors += `--color-${name}: ${colorByMode.light};\n`;

  const wrappedInSelector = `html { ${cssColors} }`;

  return <style>{wrappedInSelector}</style>;
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  // Keys just to prevent warning: Each child in a list should have a unique "key" prop.
  setHeadComponents(<FallbackStyles key="foo" />);
  setPreBodyComponents(<RssSetColorsByTheme key="bar" />);
};

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};
