import * as cheerio from "cheerio";

export interface GetMoviesOptions {
  imageSize?: "BIG" | "MEDIUM" | "SMALL";
  maxMovies?: number;
  rating?: {
    max: string;
    min: string;
  };
  useDefaultImageSize?: boolean;
}

export const getMovies = async (
  username: string,
  options?: GetMoviesOptions,
) => {
  const baseUrl = "https://letterboxd.com";
  const USE_DEFAULT_IMAGE_SIZE = options?.useDefaultImageSize ?? false;
  const IMAGE_SIZE = options?.imageSize ?? "BIG";
  const MAX_MOVIES = options?.maxMovies ?? 10;
  const RATING = `${options?.rating?.min ?? 4.5}-${options?.rating?.max ?? 5}`;

  const html: string = await fetch(
    baseUrl + `/${username}/films/rated/${RATING}/`,
  ).then((response) => response.text());

  const $ = cheerio.load(html);

  const imageSizes = {
    BIG: {
      height: 345,
      width: 230,
    },
    MEDIUM: {
      height: 225,
      width: 150,
    },
    SMALL: {
      height: 105,
      width: 70,
    },
  };

  const moviesPromises = $(".poster-list .film-poster")
    .map(async (_, element) => {
      const slug = $(element).attr("data-film-slug");
      const releaseYear =
        $(element).attr("data-film-release-year") ?? slug?.match(/\d{4}/)?.[0];
      const filmId = $(element).attr("data-film-id");
      const cacheBustingKey = $(element).attr("data-cache-busting-key");
      const imageWidth = USE_DEFAULT_IMAGE_SIZE
        ? $(element).attr("data-image-width")
        : imageSizes[IMAGE_SIZE].width;
      const imageHeight = USE_DEFAULT_IMAGE_SIZE
        ? $(element).attr("data-image-height")
        : imageSizes[IMAGE_SIZE].height;

      const title = $(element).find("img").attr("alt");
      if (!filmId && !slug && !imageWidth && !imageHeight && !title)
        return null;

      if (typeof filmId !== "string") return null;

      const slashFilmId = [...filmId].join("/");

      const imageHtml = await fetch(
        baseUrl +
          `/ajax/poster/film/${slug}/std/${imageWidth}x${imageHeight}/?k=${cacheBustingKey}`,
      ).then((res) => res.text());

      const i$ = cheerio.load(imageHtml);

      const image = i$(
        "img[srcset^='https://a.ltrbxd.com/resized/film-poster']",
      ).attr("srcset");

      const calculatedImage = `https://a.ltrbxd.com/resized/film-poster/${slashFilmId}/${filmId}-${slug}-0-${imageWidth}-0-${imageHeight}-crop.jpg?v=${cacheBustingKey}`;

      return {
        cacheBustingKey,
        filmId: Number(filmId),
        href: `${baseUrl}/film/${slug}`,
        image: image ?? calculatedImage,
        imageHeight: Number(imageHeight),
        imageWidth: Number(imageWidth),
        releaseYear,
        slashFilmId,
        slug,
        title,
      };
    })
    .get();

  const movies = await Promise.all(moviesPromises);

  return movies.filter((movie) => movie !== null).slice(0, MAX_MOVIES);
};
