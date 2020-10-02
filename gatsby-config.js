const faTranslations = require("./src/locales/fa/translations.json");
const enTranslations = require("./src/locales/en/translations.json");
const tailwindCssConfig = require("./tailwind.config");

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: enTranslations["website_name"],
    description: enTranslations["website_description"],
    author: "@ali4heydari",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175317962-1",
        head: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-preact",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: enTranslations["website_name"],
        description: enTranslations["website_description"],
        short_name: `Portfolio`,
        lang: `en`,
        start_url: `/`,
        background_color: tailwindCssConfig.theme.colors.white,
        theme_color: tailwindCssConfig.theme.colors.primary["300"],
        display: `standalone`,
        icon: `${__dirname}/static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
