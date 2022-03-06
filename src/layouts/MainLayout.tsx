import Header from "src/components/Header";
import Footer from "src/components/Footer";
import type { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  container?: boolean;
};

const MainLayout = ({ children, container }: Props): JSX.Element => {
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
