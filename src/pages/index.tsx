import React from "react";
import { Layout } from "../components/Layout";
import { AnimationRevealPage } from "../components/AnimationRevealPage";
import { Hero } from "../components/Hero";
import { Skills } from "../components/skills";
import { ContactMe } from "../components/ContactMe";

export default function Home() {
  return (
    <Layout>
      <AnimationRevealPage>
        <Hero />
        <Skills />

        <ContactMe />
      </AnimationRevealPage>
    </Layout>
  );
}
