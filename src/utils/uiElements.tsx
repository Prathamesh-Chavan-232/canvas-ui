import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-separator";
import { ReactNode } from "react";
import { Button } from "react-day-picker";
import { Link } from "react-router-dom";
import { Label } from "recharts";

interface IUIComponent {
  name: string;
  render: () => ReactNode;
}

export const baseComponents: Record<string, IUIComponent> = {
  Button: { name: "Button", render: () => <Button>Button</Button> },
  Input: { name: "Input", render: () => <Input placeholder="Input" /> },
  Textarea: {
    name: "Textarea",
    render: () => <Textarea placeholder="Textarea" />,
  },
  Label: { name: "Label", render: () => <Label>Label</Label> },
  Link: { name: "Link", render: () => <Link to="#">Link</Link> },
  Separator: { name: "Separator", render: () => <Separator /> },
  Div: {
    name: "Div",
    render: () => <div className="p-4 border rounded">Div Container</div>,
  },
  Card: {
    name: "Card",
    render: () => (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>
    ),
  },
};
