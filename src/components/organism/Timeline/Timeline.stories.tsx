import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Timeline from "./index";
import {
  randCompanyName,
  randCity,
  randPastDate,
  randFutureDate,
  rand,
  randJobTitle,
} from "@ngneat/falso";

export default {
  title: "Molecules/Timeline",
  component: Timeline,
} as Meta<typeof Timeline>;

const Template: StoryFn<typeof Timeline> = (args) => <Timeline {...args} />;

export const Primary = Template.bind({});

const events = [...Array(5)].map(() => ({
  title: randCompanyName(),
  subtitle: randJobTitle(),
  startDate: randPastDate(),
  endDate: randFutureDate(),
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  topTags: rand(["remote", "full-time", "open-source", "web3", randCity()], {
    length: 3,
  }),
  bottomTags: rand(
    [
      "GraphQL",
      "Apollo",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "NextJS",
      "Gatsby",
      "TailwindCSS",
      "ChakraUI",
      "Figma",
      "Sketch",
      "Adobe XD",
      "Zeplin",
      "Invision",
      "Jira",
      "Confluence",
      "Notion",
      "Slack",
      "Discord",
      "Clubhouse",
      "Trello",
      "Asana",
      "Monday",
      "Figma",
      "Sketch",
      "Adobe XD",
      "Zeplin",
      "Invision",
      "Jira",
      "Confluence",
      "Notion",
      "Slack",
      "Discord",
      "Clubhouse",
      "Trello",
      "Asana",
      "Monday",
    ],
    {
      length: 4,
    },
  ),
}));

Primary.args = {
  events,
};
