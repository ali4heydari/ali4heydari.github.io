// import App from 'next/app'

import React from "react";
import "tailwindcss/tailwind.css";

// Required: Pick a PrismJS theme
import "prismjs/themes/prism-tomorrow.css";

// Optional: Add line numbering
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Optional: Add shell prompt
import "prismjs/plugins/command-line/prism-command-line.css";
import type { AppProps /*, AppContext */ } from "next/app";

import { ThemeProvider } from "src/components/ThemeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "src/i18n/config";
import Theme from "src/components/Layout/Theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Theme>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Theme>
    </I18nextProvider>
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
