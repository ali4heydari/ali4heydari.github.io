import React from "react";
import { Layout } from "../components/Layout";
import { AnimationRevealPage } from "../components/AnimationRevealPage";
import { Hero, Skills, ContactMe, Projects } from "../components";

export default function Home() {
  return (
    <Layout>
      <AnimationRevealPage>
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </AnimationRevealPage>
    </Layout>
  );
}
