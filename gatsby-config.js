const faTranslations = require("./src/locales/fa/translations.json");
const enTranslations = require("./src/locales/en/translations.json");
const tailwindCssConfig = require("./tailwind.config");

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: enTranslations["website_name"],
    description: enTranslations["website_description"],
    author: "@ali4heydari",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-175317962-1",
        head: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
        icon: `${__dirname}/src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    "gatsby-plugin-tailwindcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/assets/styles/global.css"],
      },
    },
  ],
};
