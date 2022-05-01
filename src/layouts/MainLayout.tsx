import Header from "src/components/Header";
import Footer from "src/components/Footer";
import type { ReactNode } from "react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

type Props = {
  children: ReactNode;
  container?: boolean;
};

const MainLayout = ({
  children,
  container,
  ...props
}: Props): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <NextSeo />
      <Header />
      <hr />
      <div
        className={classNames(
          "prose prose-lg relative mx-auto flex max-w-6xl flex-col justify-center dark:prose-invert",
          container && "container px-8"
        )}
      >
        <main className="z-10">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
