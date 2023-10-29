import type { NextPage } from "next";
import CalendlyInlineWidget from "src/components/atoms/Calendly/CalendlyInlineWidget";
import Experiences from "src/features/Experiences";
import Introduction from "src/features/Introduction";
import Skills from "src/features/Skills/Skills";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { allExperiences } from ".contentlayer/generated";

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
