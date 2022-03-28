import Header from "src/components/Header";
import Footer from "src/components/Footer";
import type { ReactNode } from "react";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  container?: boolean;
};

const MainLayout = ({ children, container }: Props): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <main
        className={classNames({
          "container mx-auto px-8": container,
        })}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
