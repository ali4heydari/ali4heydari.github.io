import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Languages } from "../../utils/enums";
import { useTranslation } from "react-i18next";
import { css } from "styled-components";

type Meta =
  | {
      name: string;
      content: any;
    }
  | {
      property: string;
      content: any;
    };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: React.FC<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const {
    i18n: { language = lang },
  } = useTranslation();
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
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

  const metaDescription = description || site.siteMetadata.description;

  const primaryBackground =
    typeof window !== "undefined"
      ? getComputedStyle(window.document.documentElement).getPropertyValue(
          "--color-bg-primary"
        )
      : null;

  return (
    <Helmet
      htmlAttributes={{
        lang: language === Languages.CI_MODE ? Languages.ENGLISH : language,
        dir: language === Languages.PERSIAN ? "rtl" : "ltr",
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
        ...(primaryBackground
          ? [
              {
                name: `theme_color`,
                content: primaryBackground,
              },
            ]
          : []),
      ].concat(meta)}
    />
  );
};

export default SEO;
