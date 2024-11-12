import React from "react";
import type { Metadata, NextPage } from "next";
import Hero from "src/components/molecules/Hero";
import Careers from "src/features/Careers";
import { Skills } from "src/features/Skills";
import { careers } from "@/content";

export function generateMetadata(): Metadata {
  return {
    title: {
      default: "Personal website - Ali Heydari",
      template: "%s | Ali Heydari",
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Careers careers={careers} />
      <Skills />
    </>
  );
};

export default Home;
