import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CircleAlert, Terminal } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "destructive"],
    },
  },
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args} className="max-w-md">
      {args.variant === "destructive" ? (
        <CircleAlert className="size-4" />
      ) : (
        <Terminal className="size-4" />
      )}
      <AlertTitle>
        {args.variant === "destructive" ? "Something went wrong" : "Heads up!"}
      </AlertTitle>
      <AlertDescription>
        {args.variant === "destructive"
          ? "Your session has expired. Please log in again."
          : "You can add components to your app using the CLI."}
      </AlertDescription>
    </Alert>
  ),
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { variant: "default" },
};

export const Destructive: Story = {
  args: { variant: "destructive" },
};
