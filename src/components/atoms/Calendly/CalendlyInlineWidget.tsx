"use client";

import type { ComponentProps } from "react";
import React from "react";
import { InlineWidget } from "react-calendly";
import ids from "config/ids.json";

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
      url={`https://calendly.com/${ids.CALENDLY_ID}/${ids.CALENDLY_EVENT_LINK}`}
    />
  );
};

export default CalendlyInlineWidget;
