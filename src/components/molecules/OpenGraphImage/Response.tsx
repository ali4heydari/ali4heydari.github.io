import type { PathName } from "./LogoTitle";
import { OpenGraphImage } from "./OpenGraphImage";
import { ImageResponse } from "next/og";

export const config = {
  contentType: "image/png",
  runtime: "edge",
  size: {
    height: 630,
    width: 1200,
  },
};

export const runtime = config.runtime;

export const getOgImage = (
  path?: string | null,
  title?: string | null,
  cover?: string | null,
) => {
  const actualPath = (path ?? "").toLowerCase() as PathName;
  let actualHero = cover ?? "/static/images/site/default-og-bg.png";
  if (actualHero.startsWith("/")) actualHero = actualHero.substring(1);

  return new ImageResponse(
    <OpenGraphImage path={actualPath} title={title} cover={actualHero} />,
    {
      emoji: "fluent",
      height: config.size.height,
      width: config.size.width,
    },
  );
};
