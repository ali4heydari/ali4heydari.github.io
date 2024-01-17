import type React from "react";

export interface EventProps {
  bottomTags?: string[];
  children: React.ReactNode;
  endDate: string | Date;
  startDate: string | Date;
  subtitle?: string;
  title: string | React.ReactNode;
  topTags?: string[];
}

export interface TimelineProps {
  events: EventProps[];
  pingLastEvent?: boolean;
  wrapperClassName?: string;
}
