import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  argTypes: {
    placeholder: { control: "text" },
    rows: { control: { type: "number", min: 1, max: 12 } },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Type your message here.",
    disabled: false,
  },
  render: (args) => <Textarea {...args} className="w-72" />,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" {...args} />
    </div>
  ),
};
