"use client";

import type { ComponentProps } from "react";
import React from "react";
import { InlineWidget } from "react-calendly";
import siteConfig from "site.config";

const CalendlyInlineWidget = ({
  styles = {
    height: "660px",
    margin: "0 auto",
    maxWidth: 1050,
    paddingLeft: 5,
    paddingRight: 5,
  },
  ...props
}: Partial<ComponentProps<typeof InlineWidget>>) => {
  return (
    <InlineWidget
      styles={styles}
      {...props}
      url={`https://calendly.com/${siteConfig.CALENDLY_ID}/${siteConfig.CALENDLY_EVENT_LINK}`}
    />
  );
};

export default CalendlyInlineWidget;
