import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "通用/Button(按钮)",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  children: "按钮",
};
