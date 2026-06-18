import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  argTypes: {
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    defaultChecked: false,
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="airplane" {...args} />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Switch id="off" {...args} />
      <Switch id="on" defaultChecked {...args} />
    </div>
  ),
};
