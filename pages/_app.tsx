import "tailwindcss/tailwind.css";
// Required: Pick a PrismJS theme
import "prismjs/themes/prism-tomorrow.css";
// Optional: Add line numbering
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
// Optional: Add shell prompt
import "prismjs/plugins/command-line/prism-command-line.css";
import "src/styles/global.css";

import React from "react";

import type { AppProps /*, AppContext */ } from "next/app";

import Head from "next/head";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>Ali Heydari Personal website</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
