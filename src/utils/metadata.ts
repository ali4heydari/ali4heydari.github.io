import type { Metadata } from "next";
import { BASE_URL } from "src/constants";
import { buildOgImageUrl } from "./opengraph";

type MetaImageStyle = "summary_large_image" | "summary";

const defaultLogoImage = `${BASE_URL}/static/images/site/ali4heydari/bitmoji.png`;

export const getStaticMetadata = (data: {
  description: string;
  exactUrl?: string;
  image?: string;
  keywords?: string | string[] | null;
  metaImageStyle?: MetaImageStyle;
  title: string;
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
    authors: [{ name: "Ali Heydari", url: BASE_URL }],
    openGraph: {
      title,
      description,
      url: exactUrl ?? BASE_URL,
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
    metadataBase: new URL(BASE_URL),
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
