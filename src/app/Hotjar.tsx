"use client";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import siteConfig from "../../site.config";

const Hotjar = () => {
  useEffect(() => {
    hotjar.initialize(
      Number(siteConfig.HOTJAR_ID),
      Number(siteConfig.HOTJAR_SNIPPET_VERSION),
    );
  }, []);
  return null;
};

export default Hotjar;
