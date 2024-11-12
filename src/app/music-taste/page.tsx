import type { NextPage } from "next";
import TitleSection from "src/components/atoms/TitleSection";
import { BASE_URL } from "src/constants";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import Podcasts from "./podcasts";
import TopArtists from "./top-artists";
import TopTracks from "./top-tracks";

export const metadata = getStaticMetadata({
  description:
    "Get to know about my music taste, top tracks, top artists, and podcasts.",
  exactUrl: `${BASE_URL}/music-taste`,
  image: buildOgImageUrl("music-taste"),
  keywords: ["music taste", "podcasts", "spotify", "top tracks", "top artists"],
  title: "Music taste – Ali Heydari",
});

const MusicTastePage: NextPage = () => {
  return (
    <section>
      <TitleSection>Musics</TitleSection>
      <TopTracks />
      <TopArtists />
      <Podcasts />
    </section>
  );
};

export default MusicTastePage;
