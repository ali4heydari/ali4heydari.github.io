"use client";
import React, { ComponentProps } from "react";
import siteConfig from "../../../../site.config";
import { InlineWidget } from "react-calendly";

const CalendlyInlineWidget = ({
  styles = {
    height: "660px",
    paddingLeft: 5,
    paddingRight: 5,
    maxWidth: 1050,
    margin: "0 auto",
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
