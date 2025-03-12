import { ReactNode } from "react";

// Template interface
export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  data: any; // The serialized CraftJS data
}

// Template collection type
export interface TemplateCollection {
  [key: string]: Template;
}

// Props types for CraftJS components
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
  [key: string]: any;
}

export interface CraftInputProps {
  placeholder: string;
  [key: string]: any;
}

export interface CraftTextareaProps {
  placeholder: string;
  [key: string]: any;
}

export interface CraftCardProps {
  title: string;
  children?: ReactNode;
  [key: string]: any;
}

export interface ContainerProps {
  children?: ReactNode;
  [key: string]: any;
}

export interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  [key: string]: any;
}

export interface ParagraphProps {
  text: string;
  [key: string]: any;
}

// Settings component props
export interface NodeSettingsProps {
  nodeProps: {
    [key: string]: any;
    setProp: (cb: (props: any) => void) => void;
  };
}

// RenderNode props
export interface RenderNodeProps {
  render: ReactNode;
}

// ComponentItem props
export interface ComponentItemProps {
  title: string;
  icon: ReactNode;
  component: ReactNode;
}

// TemplatesGallery props
export interface TemplatesGalleryProps {
  id?: string;
}

// CraftJSEditor props
export interface CraftJSEditorProps {
  initialTemplate?: any;
}
