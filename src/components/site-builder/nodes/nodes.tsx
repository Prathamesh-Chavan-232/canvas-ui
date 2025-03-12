import { Button } from "@/components/ui/button";
import {
  ContainerProps,
  CraftButtonProps,
  CraftCardProps,
  CraftInputProps,
  CraftTextareaProps,
  HeadingProps,
  ParagraphProps,
} from "../editorTypes";
import { withNode } from "./withNode";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNode } from "@craftjs/core";

export const CraftButton: React.FC<CraftButtonProps> = withNode(
  ({ text, variant = "default", size = "default", ...props }) => {
    return (
      <Button variant={variant} size={size} {...props}>
        {text}
      </Button>
    );
  },
);

export const CraftInput: React.FC<CraftInputProps> = ({
  placeholder,
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Input
      ref={(ref) => ref && connect(drag(ref))}
      placeholder={placeholder}
      {...props}
    />
  );
};

export const CraftTextarea: React.FC<CraftTextareaProps> = withNode(
  ({ placeholder, ...props }) => {
    const {
      connectors: { connect, drag },
    } = useNode();
    return (
      <Textarea
        ref={(ref) => ref && connect(drag(ref))}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);

export const CraftCard: React.FC<CraftCardProps> = withNode(
  ({ title, children, ...props }) => {
    return (
      <Card {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    );
  },
);

export const Container: React.FC<ContainerProps> = withNode(
  ({ children, ...props }) => {
    return (
      <div
        className="p-4 border-2 border-dashed border-gray-300 min-h-[200px] relative"
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const Heading: React.FC<HeadingProps> = withNode(
  ({ text, level = 1, ...props }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const getClassNames = () => {
      switch (level) {
        case 1:
          return "text-4xl font-bold";
        case 2:
          return "text-3xl font-bold";
        case 3:
          return "text-2xl font-bold";
        case 4:
          return "text-xl font-bold";
        case 5:
          return "text-lg font-bold";
        default:
          return "text-base font-bold";
      }
    };

    return (
      <Tag className={getClassNames()} {...props}>
        {text}
      </Tag>
    );
  },
);

export const Paragraph: React.FC<ParagraphProps> = withNode(
  ({ text, ...props }) => {
    const {
      connectors: { connect, drag },
    } = useNode();

    return (
      <p
        ref={(ref) => ref && connect(drag(ref))}
        className="text-base"
        {...props}
      >
        {text}
      </p>
    );
  },
);
