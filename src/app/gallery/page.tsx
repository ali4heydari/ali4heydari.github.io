import React from "react";
import StyledLink from "src/components/atoms/Link";
import TitleSection from "src/components/atoms/TitleSection";
import { env } from "src/env";
import { notionClient } from "src/lib/notion";
import { addBlurDataURL } from "src/utils/addBlurDataURL";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import { notFound } from "next/navigation";

// revalidate: 15 minutes
export const revalidate = 900;

const Gallery = async () => {
  const notionQuery = await notionClient.databases.query({
    database_id: env.GALLERY_DATABASE_ID,
    filter: {
      checkbox: {
        equals: true,
      },
      property: "published",
    },
  });

  const notionImages = notionQuery.results
    .filter((item) => {
      const pageObjectResponse = item as PageObjectResponse;
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Boolean(new URL(pageObjectResponse.properties.imageUrl.url))
      );
    })
    .map((item) => {
      const pageObjectResponse = item as PageObjectResponse;

      return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        src: pageObjectResponse.properties.imageUrl.url as string,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        alt: pageObjectResponse.properties.name.title[0].plain_text as string,
      };
    });

  if (notionImages.length === 0) {
    return notFound();
  }

  const imagesWithBlurData = await addBlurDataURL(...notionImages);

  return (
    <div>
      <TitleSection>Gallery</TitleSection>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
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
        {imagesWithBlurData.map((image) => (
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
