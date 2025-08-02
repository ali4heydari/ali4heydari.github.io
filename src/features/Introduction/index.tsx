import React from "react";
import meInFrontOfALaptop from "src/assets/images/me/in-front-of-a-laptop.jpg";
import TitleSection from "src/components/atoms/TitleSection";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <section>
      <TitleSection center>About me</TitleSection>
      <Image
        className="my-10 aspect-3/2 w-full rounded-2xl object-cover"
        src={meInFrontOfALaptop}
        placeholder="blur"
        alt="Ali Heydari in front of a laptop"
        height={600}
        width={900}
      />
      <p className="pb-20 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Greetings, I&#39;m Ali Heydari. I&#39;m a front-end developer with a
        some experience in back-end development and DevOps. I build, maintain,
        and design websites and web applications. I&#39;ve been coding for over{" "}
        {new Date().getFullYear() - new Date(2020, 0, 1).getFullYear()} years
        and I&#39;m always looking to learn new things.
        <br />
        I entered Chemical Engineering at the Sharif University of Technology on
        2015. But I was always interested in coding and web development. So I
        changed my major to Computer Engineering at the Iran University of
        Science and Technology on 2016. I graduated on 2020 and started working
        as a front-end developer.
        <br />
        Besides coding, I also enjoy cooking and baking. I&#39;m not really good
        at it, but I love to experiment with new recipes. I really like
        astronomy I think knowing about the universe and the stars is really
        cool and destroys ego.
        <br />I like to play video games and watch movies and TV shows. You can
        find my favorite movies and series on
        <Link className="px-1 text-indigo-400 underline" href="/movie-taste">
          Movie taste
        </Link>
        I&#39;m almost always listening to music. When I&#39;m code, drive, or
        the house chores. Also I like to listen to podcasts. You can find my
        favorite musics and podcasts on
        <Link className="px-1 text-indigo-400 underline" href="/music-taste">
          Music taste
        </Link>
        page. You can stalk what I&#39;m listening or playing right now on the
        page
        <Link className="px-1 text-indigo-400 underline" href="#footer">
          footer
        </Link>
        . 😁
      </p>
    </section>
  );
};

export default Introduction;
