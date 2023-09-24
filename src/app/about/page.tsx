import Introduction from "src/features/Introduction";
import { NextPage } from "next";
import CalendlyInlineWidget from "../../components/Calendly/CalendlyInlineWidget";
import Experiences from "../../features/Experiences";
import { allExperiences } from "../../../.contentlayer/generated";
import Skills from "../../features/Skills/Skills";
import { getStaticMetadata } from "../../utils/metadata";
import { buildOgImageUrl } from "../../utils/opengraph";

export const metadata = getStaticMetadata({
  title: "About – Ali Heydari",
  description:
    "About Ali Heydari. Get to know me, my career, and my interests.",
  exactUrl: "https://ali4heydari.tech/about",
  keywords: ["bio", "biography", "information", "about", "career"],
  image: buildOgImageUrl("about"),
});

const ContactPage: NextPage = () => {
  return (
    <>
      <Introduction />
      <Skills />
      <Experiences allExperiences={allExperiences} />
      <CalendlyInlineWidget />
    </>
  );
};

export default ContactPage;
