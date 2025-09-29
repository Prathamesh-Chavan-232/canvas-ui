import { ReactNode, ComponentType } from "react";

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  data: unknown;
}

export interface TemplateCollection {
  [key: string]: Template;
}

export interface CraftButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  [key: string]: unknown;
}

export interface CraftInputProps {
  placeholder: string;
  [key: string]: unknown;
}

export interface CraftTextareaProps {
  placeholder: string;
  [key: string]: unknown;
}

export interface CraftCardProps {
  title: string;
  children?: ReactNode;
  [key: string]: unknown;
}

export interface ContainerProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  [key: string]: unknown;
}

export interface ParagraphProps {
  text: string;
  [key: string]: unknown;
}

export interface NodeProps {
  [key: string]: unknown;
  setProp: (cb: (props: Record<string, unknown>) => void) => void;
}

export interface NodeSettingsProps {
  nodeProps: NodeProps;
}

export interface CraftComponentConfig<T = Record<string, unknown>> {
  props?: Partial<T>;
  rules?: {
    canDrag?: () => boolean;
  };
  related?: {
    settings?: ComponentType<NodeSettingsProps>;
  };
}
