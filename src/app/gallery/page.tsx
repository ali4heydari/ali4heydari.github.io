import React from "react";
import StyledLink from "src/components/atoms/Link";
import TitleSection from "src/components/atoms/TitleSection";
import { notionClient } from "src/lib/notion";
import { addBlurDataURL } from "src/utils/addBlurDataURL";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { notFound } from "next/navigation";

// revalidate: 15 minutes
export const revalidate = 60 * 15;

export const dynamic = "force-dynamic";

const Gallery = async () => {
  const notionQuery = await notionClient.databases.query({
    database_id: process.env.GALLERY_DATABASE_ID!,
    filter: {
      property: "published",
      checkbox: {
        equals: true,
      },
    },
  });

  const notionImages = notionQuery.results
    .filter((item) => {
      const pageObjectResponse = item as PageObjectResponse;
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pageObjectResponse.properties?.media?.files.length > 0 &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pageObjectResponse.properties?.media?.files[0].file.url
      );
    })
    .map((item) => {
      const pageObjectResponse = item as PageObjectResponse;

      return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        src: pageObjectResponse.properties?.media?.files[0].file.url as string,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        alt: pageObjectResponse.properties?.name?.title[0].plain_text as string,
      };
    });

  if (notionImages.length === 0) {
    return notFound();
  }

  const imagesWithBlurData = await addBlurDataURL(...notionImages);

  return (
    <div>
      <TitleSection>Gallery</TitleSection>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Random photos from phone gallery
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        These are some random photos from my phone gallery. I created this page
        to work a bit with
        <StyledLink
          className="text-xl font-normal"
          href="https://developers.notion.com/"
          openInNewTab
        >
          Notion API
        </StyledLink>
        ,
        <StyledLink
          className="text-xl font-normal"
          href="https://nextjs.org/docs/pages/building-your-application/optimizing/images#remote-images"
          openInNewTab
        >
          NextJS image
        </StyledLink>
        , and
        <StyledLink
          className="text-xl font-normal"
          href="https://plaiceholder.co/"
          openInNewTab
        >
          Plaiceholder
        </StyledLink>
        for image blur. I&#39;m not good at photography, so don&#39;t expect
        much from these photos 🫠
      </p>
      <div className="columns-1 gap-4 space-y-3 sm:columns-2 md:columns-4">
        {imagesWithBlurData.map((image, index) => (
          <Image
            key={image.src}
            alt={image.alt}
            src={image.src}
            className="w-full rounded-lg hover:shadow-lg"
            placeholder="blur"
            width={500}
            height={500}
            blurDataURL={image.blurDataURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
