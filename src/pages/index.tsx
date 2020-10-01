import React from "react";
import { Layout } from "../components/Layout";
import { AnimationRevealPage } from "../components/AnimationRevealPage";
import { Hero, Skills, ContactMe, Projects } from "../components";
import { Seo } from "../components/Seo";
import tw from "twin.macro";
import { TimeLine } from "../components/TimeLine";

export default function Home() {
  return (
    <Layout>
      <Seo title={"Home"} />
      <AnimationRevealPage>
        <Hero />
        <Skills />
        <TimeLine />
        <Projects />
        <ContactMe />
      </AnimationRevealPage>
    </Layout>
  );
}
