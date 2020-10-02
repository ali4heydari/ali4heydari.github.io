import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";
import { Languages, StringKeys } from "../utils/enums";

export function Seo({ description = "", lang = "en", meta = [], title }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }

        file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 500, height: 500) {
              src
            }
          }
        }
      }
    `
  );

  console.log("file", file);
  const { i18n, t } = useTranslation();
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang:
          i18n.language === Languages.CI_MODE
            ? Languages.ENGLISH
            : i18n.language,
        dir: i18n.language === Languages.PERSIAN ? "rtl" : "ltr",
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: file.childImageSharp.fixed.src,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
