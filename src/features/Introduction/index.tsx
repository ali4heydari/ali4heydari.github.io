import React from "react";
import SiteConfigs from "site.config";
import meInFrontOfALaptop from "src/assets/images/me/in-front-of-a-laptop.jpg";
import StyledLink from "src/components/atoms/Link";
import TitleSection from "src/components/atoms/TitleSection";
import Image from "next/image";
import Link from "next/link";

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
        Greetings, I&#39;m Ali Heydari. I&#39;m a front-end developer with a
        some experience in back-end development and DevOps. I build, maintain,
        and design websites and web applications. I&#39;ve been coding for over
        5 years and I&#39;m always looking to learn new things.
        <br />
        I entered Chemical Engineering at the Sharif University of Technology on
        2015. But I was always interested in coding and web development. So I
        changed my major to Computer Engineering at the Iran University of
        Science and Technology on 2016. I graduated on 2020 and started working
        as a front-end developer.
        <br />
        Besides coding, I&#39; also enjoy cooking and baking. I&#39;m not really
        good at it, but I&#39; love to experiment with new recipes. Also I like
        to play video games and watch movies and TV shows. I&#39;m almost always
        listening to music. When I&#39;m code, drive, or the house chores. Also
        I like to listen to podcasts. you can find my favorite musics and
        podcasts on
        <Link className="px-1 text-indigo-400 underline" href="/music-taste">
          Music taste
        </Link>
        page.
      </p>
    </section>
  );
};

export default About;
