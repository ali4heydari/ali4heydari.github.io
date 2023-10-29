import type { PathName } from "./LogoTitle";
import { OpenGraphImage } from "./OpenGraphImage";
import { ImageResponse } from "next/og";

export const config = {
  runtime: "edge",
  size: {
    width: 1200,
    height: 630,
  },
  contentType: "image/png",
};

export const runtime = config.runtime;

export const getOgImage = async (
  path?: string | null,
  title?: string | null,
  hero?: string | null,
) => {
  const actualPath = (path || "").toLowerCase() as PathName;
  let actualHero = hero || "/static/images/site/default-og-bg.png";
  if (actualHero.startsWith("/")) actualHero = actualHero.substring(1);

  return new ImageResponse(
    <OpenGraphImage path={actualPath} title={title} cover={actualHero} />,
    {
      width: config.size.width,
      height: config.size.height,
      emoji: "fluent",
    },
  );
};
