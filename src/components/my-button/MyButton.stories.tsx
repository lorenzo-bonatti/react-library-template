import type {Meta, StoryObj} from "@storybook/react";
import {default as MyButton} from "./MyButton";

type Story = StoryObj<typeof MyButton>;

export default {
    title: "MyButton",
    component: MyButton,
} as Meta<typeof MyButton>

export const Default: Story = {
    args: {
        text: "Click Me"
    }
}