import Introduction from "src/features/Introduction";
import { NextPage } from "next";
import CalendlyInlineWidget from "../../components/Calendly/CalendlyInlineWidget";
import Experiences from "../../features/Experiences";
import { allExperiences } from "../../../.contentlayer/generated";

const ContactPage: NextPage = () => {
  return (
    <>
      <Introduction />
      <Experiences allExperiences={allExperiences} />
      <CalendlyInlineWidget />
    </>
  );
};

export default ContactPage;
