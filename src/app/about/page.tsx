import type { NextPage } from "next";
import CalendlyInlineWidget from "src/components/atoms/Calendly/CalendlyInlineWidget";
import TitleSection from "src/components/atoms/TitleSection";
import Careers from "src/features/Careers";
import Education from "src/features/Education";
import Introduction from "src/features/Introduction";
import Skills from "src/features/Skills/Skills";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { allCareers, allEducation } from ".contentlayer/generated";

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
      <Careers rootClassName="my-3" allCareers={allCareers} />
      <Education rootClassName="my-3" allEducation={allEducation} />
      <TitleSection center>Let&#39;s talk</TitleSection>
      <div className="rounded-2xl bg-white p-2">
        <CalendlyInlineWidget />
      </div>
    </>
  );
};

export default ContactPage;
