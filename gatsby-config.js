const faTranslations = require("./src/locales/fa/translations.json");
const enTranslations = require("./src/locales/en/translations.json");
const tailwindCssConfig = require("./tailwind.config");

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: enTranslations["website_name"],
    description: enTranslations["website_description"],
    author: "@ali4heydari",
    siteUrl: "https://ali4heydari.github.io",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        plugins: ["gatsby-remark-images", "gatsby-remark-images-medium-zoom"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images-medium-zoom",
            options: {
              background: "#a0aec0",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false, // Important! https://github.com/JaeYeopHan/gatsby-remark-images-medium-zoom#use-with-gatsby-plugin-mdx
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: enTranslations["website_name"],
        description: enTranslations["website_description"],
        short_name: "Portfolio",
        lang: "en",
        start_url: "/",
        background_color: tailwindCssConfig.theme.colors.white,
        theme_color: tailwindCssConfig.theme.colors.purple["700"],
        display: "standalone",
        icon: `${__dirname}/src/assets/images/logo.png`, // This path is relative to the root of the site.
        /*
         * https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
         * Remove theme-color meta tag
         * By default a <meta content={theme_color} name="theme-color" /> tag is inserted into the html output.
         * This can be problematic if you want to programmatically control that tag
         * (e.g. when implementing light/dark themes in your project).
         * You can set theme_color_in_head plugin option to
         * false to opt-out of this behavior.
         */
        // theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    ...(process.env.NODE_ENV === "production" ? ["gatsby-plugin-preact"] : []),
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/assets/styles/global.css"],
      },
    },
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: "ali4heydari-github-io",
      },
    },
    /* Must be placed at the end */
    {
      resolve: "gatsby-plugin-offline",
      options: {
        /*
         * https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
         * If using this plugin with gatsby-plugin-offline you may find that your icons are not
         * cached. In order to solve this, update your gatsby-config.js as follows
         * Updating cache_busting_mode is necessary. Otherwise, workbox will break while
         * attempting to find the cached URLs. Adding the globPatterns makes sure that the
         * offline plugin will cache everything. Note that you have to prefix your icon with icon-path
         * or whatever you may call it
         *
         * */
        workboxConfig: {
          globPatterns: ["**/icons*"],
        },
      },
    },
  ],
};
