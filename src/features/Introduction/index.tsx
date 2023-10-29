import React from "react";
import SiteConfigs from "site.config";
import TitleSection from "src/components/atoms/TitleSection";
import meInFrontOfALaptop from "../../assets/images/me/in-front-of-a-laptop.jpg";
import Image from "next/image";

const About: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <section>
      <TitleSection center>About me</TitleSection>
      <Image
        className="my-10 aspect-[3/2] w-full rounded-2xl object-cover"
        src={meInFrontOfALaptop}
        placeholder="blur"
        alt="Ali Heydari in front of a laptop"
        height={600}
        width={900}
      />
      <p className="pb-20 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Greetings, fellow wanderers of the digital realm! I am a front-end
        developer extraordinaire, with a sprinkle of back-end wizardry up my
        sleeve. I have traversed the realms of automation, danced with the
        mystical Docker, harmonized with the enchanting melodies of DevOps, and
        woven intricate networks with a touch of CI/CD magic. My journey began
        at the illustrious Iran University of Science and Technology, where I
        delved into the captivating world of computer engineering, earning my
        bachelor&#39;s degree.
        <br />
        When I&#39;m not immersed in the captivating world of coding, you can
        find me embarking on thrilling quests to unravel the mysteries of new
        technologies or engaging in epic battles within the realms of video
        games. But my adventures don&#39;t end there! I have a burning passion
        for the culinary arts, seeking to master the art of cooking with finesse
        and flair. From whipping up delectable dishes to exploring the vast
        universe of flavors, I&#39;m always hungry for new culinary adventures.
        <br />
        In the realm of aesthetics, I have discovered a hidden talent for flower
        design. I recently participated in a workshop that revealed the secrets
        of creating stunning floral arrangements. It&#39;s a delightful way for
        me to express my creativity and bring a touch of natural beauty into the
        world.
        <br />
        When I&#39;m not busy crafting lines of code or experimenting in the
        kitchen, you&#39;ll often find me lost in the captivating melodies of
        music or engrossed in the captivating narratives of podcasts. And
        let&#39;s not forget my fascination with the cosmos! I find solace in
        gazing at the twinkling stars, exploring the wonders of the universe
        through the lens of astronomy.
        <br />
        So, come join me on this whimsical journey as I weave together my love
        for technology, creativity, and the boundless wonders of the universe.
        Together, let&#39;s create a digital tapestry that reflects the vibrant
        colors of friendship and the joy of exploration!
      </p>
    </section>
  );
};

export default About;
