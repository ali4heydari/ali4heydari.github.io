import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();

  const metaDescription = description;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
