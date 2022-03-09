// src/components/Task.stories.js

import { Meta, Story } from "@storybook/react";
import React from "react";
import Task from ".";
import { TaskPropsType } from "./types.d";

export default {
  component: Task,
  title: "Task",
} as Meta;

const Template: Story<Pick<TaskPropsType, "task">> = (args) => (
  <Task {...args} />
);
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
