import { NextPage } from "next";
import TitleSection from "../../components/TitleSection";
import { getStaticMetadata } from "../../utils/metadata";
import { buildOgImageUrl } from "../../utils/opengraph";
import TopTracks from "./top-tracks";
import Podcasts from "./podcasts";
import TopArtists from "./top-artists";

export const metadata = getStaticMetadata({
  title: "Music taste – Ali Heydari",
  description:
    "Get to know about my music taste, top tracks, top artists, and podcasts.",
  exactUrl: "https://ali4heydari.tech/music-taste",
  keywords: ["music taste", "podcasts", "spotify", "top tracks", "top artists"],
  image: buildOgImageUrl("music-taste"),
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
