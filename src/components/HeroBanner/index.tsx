import Banner from "src/components/ui/Banner";

import { SectionTitle } from "src/definitions";
import React from "react";

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
  quote: string;
}

const HeroBanner: React.FC = () => {
  // @ts-ignore
  const heroBanner: SectionHeroBanner = {};

  return (
    <Banner
      heading={heroBanner.title}
      subheading={heroBanner.subtitle}
      description={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      image={""}
      quote={heroBanner.quote}
    />
  );
};

export default HeroBanner;
