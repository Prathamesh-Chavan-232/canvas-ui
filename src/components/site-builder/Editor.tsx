import React from "react";
import { Editor, Frame, Element, useNode } from "@craftjs/core";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { SettingsPanel } from "./editor/SettingsPanel";
import { Toolbar } from "./editor/Toolbar";
import { ComponentsPanel } from "./editor/ComponentsPanel";
import { LayersPanel } from "./editor/LayersPanel";
import { RenderNode } from "./editor/RenderNode";
import TemplatesGallery from "./editor/TemplatesGallery";
import {
  CraftButtonProps,
  NodeSettingsProps,
  CraftInputProps,
  CraftTextareaProps,
  CraftCardProps,
  ContainerProps,
  HeadingProps,
  ParagraphProps,
  CraftJSEditorProps,
} from "./editorTypes";

export const CraftButton: React.FC<CraftButtonProps> = ({
  text,
  variant = "default",
  size = "default",
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Button
      ref={(ref) => ref && connect(drag(ref))}
      variant={variant}
      size={size}
      {...props}
    >
      {text}
    </Button>
  );
};

function ButtonSettings({ nodeProps }: NodeSettingsProps) {
  const { text, variant, size } = nodeProps;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Button Text</label>
        <Input
          value={text || "Button"}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.text = e.target.value))
          }
        />
      </div>
      <div>
        <label className="text-sm font-medium">Variant</label>
        <select
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          value={variant || "default"}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.variant = e.target.value))
          }
        >
          <option value="default">Default</option>
          <option value="destructive">Destructive</option>
          <option value="outline">Outline</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">Size</label>
        <select
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          value={size || "default"}
          onChange={(e) =>
            nodeProps.setProp(
              (props) =>
                (props.size = e.target.value as
                  | "default"
                  | "sm"
                  | "lg"
                  | "icon"),
            )
          }
        >
          <option value="default">Default</option>
          <option value="sm">Small</option>
          <option value="lg">Large</option>
          <option value="icon">Icon</option>
        </select>
      </div>
    </div>
  );
}

CraftButton.craft = {
  props: {
    text: "Button",
    variant: "default",
    size: "default",
  },
  related: {
    settings: ButtonSettings,
  },
};

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

function InputSettings({ nodeProps }: NodeSettingsProps) {
  const { placeholder } = nodeProps;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Placeholder</label>
        <Input
          value={placeholder || ""}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.placeholder = e.target.value))
          }
        />
      </div>
    </div>
  );
}

CraftInput.craft = {
  props: {
    placeholder: "Input placeholder",
  },
  related: {
    settings: InputSettings,
  },
};

export const CraftTextarea: React.FC<CraftTextareaProps> = ({
  placeholder,
  ...props
}) => {
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
};

function TextareaSettings({ nodeProps }: NodeSettingsProps) {
  const { placeholder } = nodeProps;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Placeholder</label>
        <Input
          value={placeholder || ""}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.placeholder = e.target.value))
          }
        />
      </div>
    </div>
  );
}

CraftTextarea.craft = {
  props: {
    placeholder: "Textarea placeholder",
  },
  related: {
    settings: TextareaSettings,
  },
};

export const CraftCard: React.FC<CraftCardProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

function CardSettings({ nodeProps }: NodeSettingsProps) {
  const { title } = nodeProps;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Card Title</label>
        <Input
          value={title || ""}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.title = e.target.value))
          }
        />
      </div>
    </div>
  );
}

CraftCard.craft = {
  props: {
    title: "Card Title",
  },
  related: {
    settings: CardSettings,
  },
};

// Container component with drag-to-add-children functionality
export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div
      ref={connect}
      className="p-4 border-2 border-dashed border-gray-300 min-h-[200px] relative"
      {...props}
    >
      {children}
    </div>
  );
};

function ContainerSettings() {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Container Settings</label>
        <p className="text-sm text-muted-foreground">
          This is a container element that can hold other components.
        </p>
      </div>
    </div>
  );
}

Container.craft = {
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    settings: ContainerSettings,
  },
};

// Heading component
export const Heading: React.FC<HeadingProps> = ({
  text,
  level = 1,
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
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
    <Tag
      ref={(ref) => ref && connect(drag(ref))}
      className={getClassNames()}
      {...props}
    >
      {text}
    </Tag>
  );
};

function HeadingSettings({ nodeProps }: NodeSettingsProps) {
  const { text, level } = nodeProps;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Heading Text</label>
        <Input
          value={text || ""}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.text = e.target.value))
          }
        />
      </div>
      <div>
        <label className="text-sm font-medium">Heading Level</label>
        <select
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
          value={level || 1}
          onChange={(e) =>
            nodeProps.setProp(
              (props) => (props.level = parseInt(e.target.value)),
            )
          }
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              H{num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Heading.craft = {
  props: {
    text: "Heading",
    level: 1,
  },
  related: {
    settings: HeadingSettings,
  },
};

// Paragraph component
export const Paragraph: React.FC<ParagraphProps> = ({ text, ...props }) => {
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
};

function ParagraphSettings({ nodeProps }: NodeSettingsProps) {
  const { text } = nodeProps;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Text Content</label>
        <Textarea
          value={text || ""}
          onChange={(e) =>
            nodeProps.setProp((props) => (props.text = e.target.value))
          }
        />
      </div>
    </div>
  );
}

Paragraph.craft = {
  props: {
    text: "This is a paragraph of text. Edit it to add your own content.",
  },
  related: {
    settings: ParagraphSettings,
  },
};

// Export the components to be used in the resolvers
const CraftJSEditor: React.FC<CraftJSEditorProps> = ({ initialTemplate }) => {
  const editorRef = React.useRef<any>(null);

  React.useEffect(() => {
    // Load initial template if provided
    if (initialTemplate && editorRef.current) {
      const { actions } = editorRef.current;
      if (actions) {
        actions.deserialize(initialTemplate);
      }
    }
  }, [initialTemplate]);

  return (
    <Editor
      resolver={{
        CraftButton,
        CraftInput,
        CraftTextarea,
        CraftCard,
        Container,
        Heading,
        Paragraph,
      }}
      onRender={RenderNode}
      onMount={(editor) => {
        editorRef.current = editor;
      }}
    >
      <div className="flex h-screen overflow-hidden">
        <div className="flex flex-col border-r w-64">
          <div className="h-1/2 flex flex-col overflow-hidden">
            <ComponentsPanel />
            <div className="px-4">
              <Button
                id="templates-gallery-trigger"
                className="hidden"
                onClick={() => {}}
              />
              <TemplatesGallery />
            </div>
          </div>
          <div className="border-t h-1/2 flex flex-col overflow-hidden">
            <LayersPanel />
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Toolbar />
          <div className="p-4 bg-gray-100 min-h-[calc(100vh-64px)] flex justify-center">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-auto">
              <Frame>
                <Element canvas is={Container}>
                  <Element is={Heading} text="Welcome to Website Builder" />
                  <Element
                    is={Paragraph}
                    text="Start building your website by dragging components from the left sidebar. Use the right sidebar to edit the properties of the selected element."
                  />
                  <Element is={CraftButton} text="Get Started" />
                </Element>
              </Frame>
            </div>
          </div>
        </div>
        <SettingsPanel />
      </div>
    </Editor>
  );
};

export default CraftJSEditor;
