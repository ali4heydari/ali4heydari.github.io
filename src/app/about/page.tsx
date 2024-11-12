import type { NextPage } from "next";
import CalendlyInlineWidget from "src/components/atoms/Calendly/CalendlyInlineWidget";
import TitleSection from "src/components/atoms/TitleSection";
import { BASE_URL } from "src/constants";
import Careers from "src/features/Careers";
import Education from "src/features/Education";
import Introduction from "src/features/Introduction";
import Skills from "src/features/Skills/Skills";
import { getStaticMetadata } from "src/utils/metadata";
import { buildOgImageUrl } from "src/utils/opengraph";
import { careers, education } from "@/content";

export const metadata = getStaticMetadata({
  description:
    "About Ali Heydari. Get to know me, my career, and my interests.",
  exactUrl: `${BASE_URL}/about`,
  image: buildOgImageUrl("about"),
  keywords: ["bio", "biography", "information", "about", "career"],
  title: "About – Ali Heydari",
});

const ContactPage: NextPage = () => {
  return (
    <>
      <Introduction />
      <Skills />
      <Careers rootClassName="my-3" careers={careers} />
      <Education rootClassName="my-3" educations={education} />
      <TitleSection center>Let&#39;s talk</TitleSection>
      <div className="rounded-2xl bg-white p-2">
        <CalendlyInlineWidget />
      </div>
    </>
  );
};

export default ContactPage;
