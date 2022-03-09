import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import { PureInboxScreen } from ".";
import * as TaskListStories from "../TaskList/TaskList.stories";

// A super-simple mock of a redux store
const store: any = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args?.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template: Story<{ error: string | null }> = (args) => (
  <PureInboxScreen {...args} />
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
