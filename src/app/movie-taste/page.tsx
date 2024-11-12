import type { NextPage } from "next";
import StyledLink from "src/components/atoms/Link";
import TitleSection from "src/components/atoms/TitleSection";
import { BASE_URL } from "src/constants";
import { getMovies } from "src/lib/letterboxd";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import Image from "next/image";
import Link from "next/link";

export const metadata = getStaticMetadata({
  description:
    "Get to know about my movie taste, my favorite movies and my favorite series.",
  exactUrl: `${BASE_URL}/movie-taste`,
  image: buildOgImageUrl("movie-taste"),
  keywords: ["movie taste", "podcasts", "letterboxd", "top movies"],
  title: "Movie taste – Ali Heydari",
});

const MovieTastePage: NextPage = async () => {
  const movies = await getMovies("ali4heydari");

  return (
    <section>
      <TitleSection>Movie taste</TitleSection>
      <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Top Movies and Series
      </h2>
      <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
        These are my top movies on
        <StyledLink
          className="text-xl font-normal"
          href={`https://letterboxd.com/ali4heydari`}
          openInNewTab
        >
          Letterboxd
        </StyledLink>
        . Do we have any movies in common? 👀
      </p>
      <div className="mb-3 grid grid-cols-1 gap-6 pb-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
        {movies.map((movie, index) => (
          <Link
            href={movie.href}
            key={movie.title}
            title={`Check out ${movie.title} on Letterboxd`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 p-2 shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <div>
              <Image
                className="mx-auto rounded-2xl p-1"
                src={movie.image}
                alt={movie.title ?? `Movie ${index + 1}`}
                width={movie.imageWidth}
                height={movie.imageHeight}
              />
              <p
                className={
                  "text-md pt-2 text-center tracking-tight text-gray-900 dark:text-white"
                }
              >
                {movie.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieTastePage;
