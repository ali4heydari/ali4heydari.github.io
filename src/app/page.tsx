import React from "react";
import Hero from "../features/Hero";
import Experiences from "../features/Experiences";
import { Metadata, NextPage, ResolvingMetadata } from "next";
import { allExperiences } from "../../.contentlayer/generated";
import { Skills } from "../features/Skills";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      template: "%s | Ali Heydari",
      default: "Personal website",
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Experiences allExperiences={allExperiences} />
      <Skills />
    </>
  );
};

export default Home;
