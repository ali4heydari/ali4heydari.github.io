import Introduction from "src/features/Introduction";
import { NextPage } from "next";
import CalendlyInlineWidget from "../../components/Calendly/CalendlyInlineWidget";
import Experiences from "../../features/Experiences";
import { allExperiences } from "../../../.contentlayer/generated";
import Skills from "../../features/Skills/Skills";

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
