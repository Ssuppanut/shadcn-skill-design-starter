import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  argTypes: {
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    defaultChecked: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Checkbox id="unchecked" {...args} />
      <Checkbox id="checked" defaultChecked {...args} />
    </div>
  ),
};
