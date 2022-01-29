import React from "react";

export interface EventProps {
  title: string;
  subtitle: string;
  startDate: string | Date;
  endDate: string | Date;
  children: React.ReactNode;
}

export interface TimelineProps {
  events: EventProps[];
  wrapperClassName?: string;
}
