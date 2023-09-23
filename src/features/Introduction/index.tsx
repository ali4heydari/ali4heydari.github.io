import TitleSection from "src/components/TitleSection";
import React from "react";
import SiteConfigs from "site.config";

const About: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <section>
      <TitleSection center>About me</TitleSection>
      <img
        className="my-10 aspect-[3/2] w-full rounded-2xl object-cover"
        src={"/static/images/profile-high-resolution.jpg"}
        alt={SiteConfigs.SHORT_NAME}
      />
      <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 pb-20">
        As a digital artisan, I proudly wield the title of a front-end
        developer, complemented by a touch of back-end proficiency. My
        technological odyssey has led me to embrace the finesse of automation,
        the allure of Docker, the orchestration of DevOps, the intricacies of
        networking, and the symphony of CI/CD. With academic distinction, I hold
        a bachelor&#39;s degree in computer engineering from Iran University of
        Science and Technology, a testament to my fortified foundation in this
        ever-evolving field. During moments of respite, I immerse myself in the
        pursuit of knowledge, exploring new technologies and indulging in the
        immersive narratives of video games. Beyond the realm of code, I find
        joy in the culinary arts, aspiring to master the craft professionally.
        Additionally, the delicate artistry of flower design has captivated my
        interest, as I have participated in a workshop to refine my skills. In
        the realm of leisure, I find solace in the dulcet tones of music and the
        captivating narratives of podcasts. These auditory delights transport me
        to realms unknown, expanding the horizons of my consciousness. Since the
        tender age of 18, I have embraced independence, residing in a city
        separate from my beloved family. This journey has instilled within me
        self-reliance and resilience, as I navigate life&#39;s currents with
        unwavering determination. Welcome to my digital realm, where technology
        and creativity converge, and where the symphony of code and design
        harmonize to create a captivating experience.
      </p>
    </section>
  );
};

export default About;
