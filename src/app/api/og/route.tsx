import type { PathName } from "src/components/molecules/OpenGraphImage/LogoTitle";
import { OpenGraphImage } from "src/components/molecules/OpenGraphImage/OpenGraphImage";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const { path, title, cover } = Object.fromEntries(searchParams);
  const actualPath = (path || "").toLowerCase() as PathName;
  let actualHero = cover || "/static/images/site/default-og-bg.png";
  if (actualHero.startsWith("/")) actualHero = actualHero.substring(1);

  return new ImageResponse(
    <OpenGraphImage path={actualPath} title={title} cover={actualHero} />,
    {
      width: 1280,
      height: 720,
    },
  );
}
