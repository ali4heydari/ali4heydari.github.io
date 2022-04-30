import envs from "src/envs";
import { DefaultSeo } from "next-seo";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { DefaultSeoProps } from "next-seo/lib/types";

export const DefaultNextSeo = () => {
  const router = useRouter();

  const metadata = useMemo(
    () => ({
      name: "Ali Heydari",
      title: `Software engineer`,
      description: `Front-end developer and React enthusiast.`,
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.jpg`,
      twitterHandle: "@ali4heydari",
      absolutePath: `${envs.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
    }),
    [router.asPath]
  );

  const seoProps = useMemo<DefaultSeoProps>(
    () => ({
      canonical: metadata.absolutePath,
      titleTemplate: `${metadata.name} | %s`,
      defaultTitle: `${metadata.name} | ${metadata.title}`,
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        locale: "en_US",
        type: "website",
        title: metadata.title,
        description: metadata.description,
        url: metadata.absolutePath,
      },
      twitter: {
        handle: metadata.twitterHandle,
        cardType: "summary_large_image",
        site: metadata.twitterHandle,
      },
    }),
    /* eslint-disable react-hooks/exhaustive-deps */
    [metadata.absolutePath]
  );

  return <DefaultSeo {...seoProps} />;
};
