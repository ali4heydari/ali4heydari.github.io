import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  randCompanyName,
  randCity,
  randPastDate,
  randFutureDate,
} from "@ngneat/falso";

import Timeline from "../Timeline";
import MdxRenderer from "../MdxRenderer";

export default {
  title: "Molecules/Timeline",
  component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
);

export const Primary = Template.bind({});

const events = [...Array(5)].map(() => ({
  title: randCompanyName(),
  subtitle: randCity(),
  startDate: randPastDate(),
  endDate: randFutureDate(),
  children: <MdxRenderer code={""} />,
}));

Primary.args = {
  events,
};
