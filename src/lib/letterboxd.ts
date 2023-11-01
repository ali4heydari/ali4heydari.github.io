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
      width: 230,
      height: 345,
    },
    MEDIUM: {
      width: 150,
      height: 225,
    },
    SMALL: {
      width: 70,
      height: 105,
    },
  };

  const movies = $(".poster-list .film-poster")
    .map((_, element) => {
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
      const cleanSlug = slug?.replace(/-\d+$/, "").replace(/-+$/, "");

      const image = `https://a.ltrbxd.com/resized/film-poster/${slashFilmId}/${filmId}-${cleanSlug}-0-${imageWidth}-0-${imageHeight}-crop.jpg?v=${cacheBustingKey}`;

      return {
        title,
        image,
        filmId: Number(filmId),
        imageWidth: Number(imageWidth),
        imageHeight: Number(imageHeight),
        releaseYear,
        href: `${baseUrl}/film/${slug}`,
      };
    })
    .get();
  return movies.filter((movie) => movie !== null).slice(0, MAX_MOVIES);
};
