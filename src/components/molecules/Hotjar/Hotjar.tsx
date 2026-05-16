"use client";

import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import { env } from "src/env";

const Hotjar = () => {
  useEffect(() => {
    hotjar.initialize({
      id: env.NEXT_PUBLIC_HOTJAR_ID,
      sv: env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION,
    });
  }, []);
  return null;
};

export default Hotjar;
