import { NodeData } from "@craftjs/core";

// Helper function to convert styles object to CSS string
const toCSS = (styles: Record<string, any>) => {
  return Object.entries(styles)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case
      const property = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${property}: ${value};`;
    })
    .join(" ");
};

// Helper to convert props to CSS
const propsToCSS = (props: Record<string, any>) => {
  // Extract only style-related props
  const styleProps: Record<string, any> = {};

  // Size
  if (props.width) styleProps.width = props.width;
  if (props.height) styleProps.height = props.height;

  // Padding
  if (props.paddingTop) styleProps.paddingTop = props.paddingTop;
  if (props.paddingRight) styleProps.paddingRight = props.paddingRight;
  if (props.paddingBottom) styleProps.paddingBottom = props.paddingBottom;
  if (props.paddingLeft) styleProps.paddingLeft = props.paddingLeft;

  // Margin
  if (props.marginTop) styleProps.marginTop = props.marginTop;
  if (props.marginRight) styleProps.marginRight = props.marginRight;
  if (props.marginBottom) styleProps.marginBottom = props.marginBottom;
  if (props.marginLeft) styleProps.marginLeft = props.marginLeft;

  // Colors
  if (props.color) styleProps.color = props.color;
  if (props.backgroundColor) styleProps.backgroundColor = props.backgroundColor;

  // Typography
  if (props.fontSize) styleProps.fontSize = props.fontSize;
  if (props.fontWeight) styleProps.fontWeight = props.fontWeight;
  if (props.fontStyle) styleProps.fontStyle = props.fontStyle;
  if (props.textAlign) styleProps.textAlign = props.textAlign;

  return toCSS(styleProps);
};

// Helper to format and indent code
const formatCode = (code: string, level = 0) => {
  const indent = "  ".repeat(level);
  return code
    .split("\n")
    .map((line) => (line.trim() ? `${indent}${line}` : ""))
    .join("\n");
};

// Get component specific props
const getComponentProps = (displayName: string, props: Record<string, any>) => {
  switch (displayName) {
    case "CraftButton":
      return {
        text: props.text || "Button",
        variant: props.variant || "default",
        size: props.size || "default",
      };
    case "CraftInput":
      return {
        placeholder: props.placeholder || "",
      };
    case "CraftTextarea":
      return {
        placeholder: props.placeholder || "",
      };
    case "CraftCard":
      return {
        title: props.title || "Card Title",
      };
    case "Heading":
      return {
        level: props.level || 1,
        text: props.text || "Heading",
      };
    case "Paragraph":
      return {
        text: props.text || "Paragraph",
      };
    default:
      return {};
  }
};

// Generate JSX for a single node
const generateJSXForNode = (
  nodeId: string,
  nodes: Record<string, NodeData>,
  level = 0,
): string => {
  const node = nodes[nodeId];
  if (!node) return "";

  const { type, displayName, props, isCanvas, nodes: childNodeIds } = node.data;
  const componentProps = getComponentProps(displayName, props);
  const hasChildren = isCanvas && childNodeIds.length > 0;

  // Convert style props to inline style
  const styleString = props ? propsToCSS(props) : "";
  const styleAttribute = styleString ? ` style={{${styleString}}}` : "";

  // Special cases for certain components
  switch (displayName) {
    case "Heading": {
      const level = componentProps.level || 1;
      const text = componentProps.text || "Heading";
      return `<h${level}${styleAttribute}>${text}</h${level}>`;
    }
    case "Paragraph": {
      const text = componentProps.text || "Paragraph";
      return `<p${styleAttribute}>${text}</p>`;
    }
    case "CraftButton": {
      const variant = componentProps.variant
        ? ` variant="${componentProps.variant}"`
        : "";
      const size = componentProps.size ? ` size="${componentProps.size}"` : "";
      const text = componentProps.text || "Button";
      return `<Button${variant}${size}${styleAttribute}>${text}</Button>`;
    }
    case "CraftInput": {
      const placeholder = componentProps.placeholder
        ? ` placeholder="${componentProps.placeholder}"`
        : "";
      return `<Input${placeholder}${styleAttribute} />`;
    }
    case "CraftTextarea": {
      const placeholder = componentProps.placeholder
        ? ` placeholder="${componentProps.placeholder}"`
        : "";
      return `<Textarea${placeholder}${styleAttribute} />`;
    }
    case "CraftCard": {
      const title = componentProps.title || "Card Title";
      if (hasChildren) {
        const childrenJSX = childNodeIds
          .map((childId) => generateJSXForNode(childId, nodes, level + 1))
          .join("\n");

        return `<Card${styleAttribute}>
  <CardHeader>
    <CardTitle>${title}</CardTitle>
  </CardHeader>
  <CardContent>
${formatCode(childrenJSX, 2)}
  </CardContent>
</Card>`;
      } else {
        return `<Card${styleAttribute}>
  <CardHeader>
    <CardTitle>${title}</CardTitle>
  </CardHeader>
  <CardContent></CardContent>
</Card>`;
      }
    }
    case "Container": {
      if (hasChildren) {
        const childrenJSX = childNodeIds
          .map((childId) => generateJSXForNode(childId, nodes, level + 1))
          .join("\n");

        return `<div${styleAttribute}>
${formatCode(childrenJSX, 1)}
</div>`;
      } else {
        return `<div${styleAttribute}></div>`;
      }
    }
    default:
      return `<div${styleAttribute}>Unknown component: ${displayName}</div>`;
  }
};

// Generate imports based on used components
const generateImports = (nodes: Record<string, NodeData>) => {
  const componentTypes = new Set<string>();

  // Collect all component types
  Object.values(nodes).forEach((node) => {
    const { displayName } = node.data;
    if (displayName) componentTypes.add(displayName);
  });

  // Generate import statements
  let imports = 'import React from "react";\n';

  // UI components
  const uiComponents = [];
  if (componentTypes.has("CraftButton")) uiComponents.push("Button");
  if (componentTypes.has("CraftInput")) uiComponents.push("Input");
  if (componentTypes.has("CraftTextarea")) uiComponents.push("Textarea");
  if (componentTypes.has("CraftCard")) {
    uiComponents.push("Card", "CardHeader", "CardTitle", "CardContent");
  }

  if (uiComponents.length > 0) {
    imports += `import { ${uiComponents.join(", ")} } from "@/components/ui";\n`;
  }

  return imports;
};

// Main function to generate React component code
export const generateComponent = (data: any, componentName = "MyComponent") => {
  const { nodes, ROOT } = data;

  // Generate imports
  const imports = generateImports(nodes);

  // Generate JSX for the component body
  let jsx = "";
  const rootNode = nodes.ROOT;
  if (rootNode && rootNode.data && rootNode.data.nodes) {
    jsx = rootNode.data.nodes
      .map((nodeId) => generateJSXForNode(nodeId, nodes))
      .join("\n");
  }

  // Complete component code
  return `${imports}
export default function ${componentName}() {
  return (
${formatCode(jsx, 2)}
  );
}
`;
};

// Main function to generate HTML code (for export)
export const generateHTML = (data: any) => {
  const { nodes, ROOT } = data;

  // Generate CSS
  const css = `
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    background-color: #000;
    color: #fff;
    border: none;
  }
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #ccc;
  }
  .card {
    border-radius: 0.5rem;
    border: 1px solid #eee;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .card-header {
    padding: 1rem;
  }
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .card-content {
    padding: 1rem;
    padding-top: 0;
  }
</style>`;

  // Convert React component names to HTML
  const convertToHTML = (jsx: string) => {
    return jsx
      .replace(/<Button([^>]*)>(.*?)<\/Button>/g, "<button$1>$2</button>")
      .replace(/<Input([^>]*)\s*\/>/g, "<input$1>")
      .replace(/<Textarea([^>]*)\s*\/>/g, "<textarea$1></textarea>")
      .replace(/<Card([^>]*)>/g, '<div class="card"$1>')
      .replace(/<\/Card>/g, "</div>")
      .replace(/<CardHeader([^>]*)>/g, '<div class="card-header"$1>')
      .replace(/<\/CardHeader>/g, "</div>")
      .replace(
        /<CardTitle([^>]*)>(.*?)<\/CardTitle>/g,
        '<h3 class="card-title"$1>$2</h3>',
      )
      .replace(/<CardContent([^>]*)>/g, '<div class="card-content"$1>')
      .replace(/<\/CardContent>/g, "</div>");
  };

  // Generate JSX then convert to HTML
  let jsx = "";
  const rootNode = nodes.ROOT;
  if (rootNode && rootNode.data && rootNode.data.nodes) {
    jsx = rootNode.data.nodes
      .map((nodeId) => generateJSXForNode(nodeId, nodes))
      .join("\n");
  }

  const html = convertToHTML(jsx);

  // Complete HTML document
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Website</title>
  ${css}
</head>
<body>
  <div class="container">
${formatCode(html, 2)}
  </div>
</body>
</html>`;
};
