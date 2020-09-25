import React from "react";
import { Layout } from "../components/Layout";
import { AnimationRevealPage } from "../components/AnimationRevealPage";
import { Hero, Skills, ContactMe, Projects } from "../components";
import { Seo } from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo title={"Home"} />
      <AnimationRevealPage>
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </AnimationRevealPage>
    </Layout>
  );
}
