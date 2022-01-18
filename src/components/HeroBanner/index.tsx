import Banner from "src/components/ui/Banner";

import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <Banner
      heading={"Hi, I'm"}
      subheading={"Ali Heydari"}
      description={
        "A developer who loves cats, traveling, photography and learning new things"
      }
      linkTo={
        "https://github.com/ali4heydari/CV/releases/download/2.1.0/CV.pdf"
      }
      linkText={"Download my resume"}
      image={"/images/hero-photo.jpg"}
      quote={"Be the change that you want to see in the world."}
    />
  );
};

export default HeroBanner;
