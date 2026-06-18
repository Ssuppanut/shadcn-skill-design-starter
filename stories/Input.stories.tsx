import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: { layout: "centered" },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    placeholder: "Email",
    disabled: false,
  },
  render: (args) => <Input {...args} className="w-72" />,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-72 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" {...args} />
    </div>
  ),
};
