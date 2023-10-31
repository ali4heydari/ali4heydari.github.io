import type { NextPage } from "next";
import CalendlyInlineWidget from "src/components/atoms/Calendly/CalendlyInlineWidget";
import Careers from "src/features/Careers";
import Introduction from "src/features/Introduction";
import Skills from "src/features/Skills/Skills";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { allCareers } from ".contentlayer/generated";

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
      <Careers allCareers={allCareers} />
      <CalendlyInlineWidget />
    </>
  );
};

export default ContactPage;
