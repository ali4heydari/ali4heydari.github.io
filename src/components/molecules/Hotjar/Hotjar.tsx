"use client";

import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import siteConfig from "site.config";

const Hotjar = () => {
  useEffect(() => {
    hotjar.initialize({
      id: Number(siteConfig.HOTJAR_ID),
      sv: Number(siteConfig.HOTJAR_SNIPPET_VERSION),
    });
  }, []);
  return null;
};

export default Hotjar;
