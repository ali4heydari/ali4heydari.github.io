import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useTranslation } from "react-i18next";
import { StringKeys } from "../utils/enums";

const getLogo = graphql`
  query GET_LOGO {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          width
          height
          src
          srcSet
          base64
          tracedSVG
          srcWebp
        }
      }
    }
  }
`;

export const Logo: React.FC = () => {
  const { file } = useStaticQuery(getLogo);
  const { t } = useTranslation();

  return (
    <Img fixed={file.childImageSharp.fixed} alt={t(StringKeys.WEBSITE_NAME)} />
  );
};
