import type { Metadata } from "next";

import { buildOgImageUrl } from "./opengraph";

type MetaImageStyle = "summary_large_image" | "summary";

const defaultLogoImage =
  "https://ali4heydari.tech/static/images/site/ali4heydari/bitmoji.png";

export const getStaticMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
  metaImageStyle?: MetaImageStyle;
}): Metadata => {
  const { title, description, keywords, exactUrl, image, metaImageStyle } =
    data;

  const actualDefaultImage =
    metaImageStyle === "summary" ? defaultLogoImage : buildOgImageUrl();
  const actualImage = image || actualDefaultImage;
  const actualMetaImageStyle =
    actualImage === defaultLogoImage
      ? "summary"
      : metaImageStyle || "summary_large_image";

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Ali Heydari", url: "https://ali4heydari.tech" }],
    openGraph: {
      title,
      description,
      url: exactUrl || "https://ali4heydari.tech",
      siteName: title,
      images: [{ url: actualImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [{ url: actualImage }],
      card: actualMetaImageStyle,
      creator: "@ali4heydari",
      site: "@ali4heydari",
    },
    verification: {
      // TODO: Add verification codes
      // yandex: "",
      // bing: "",
      // google: "",
    },
    metadataBase: new URL("https://ali4heydari.tech"),
  };
};

export const colorMetaTags = [
  "theme-color",
  "msapplication-TileColor",
  "msapplication-navbutton-color",
  "apple-mobile-web-app-status-bar-style",
];

export const viewportMetaTags = [
  "width=device-width",
  "initial-scale=1.0",
  "minimum-scale=1.0",
  "maximum-scale=1.0",
  "user-scalable=no",
  "height=device-height",
  "target-densitydpi=device-dpi",
];