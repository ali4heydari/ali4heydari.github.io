import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

import { OpenGraphImage } from "../../../components/atoms/OpenGraphImage/OpenGraphImage";
import { PathName } from "../../../components/atoms/OpenGraphImage/LogoTitle";

export const runtime = "edge";

export async function GET(req: NextRequest) {
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
