import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateComponent, generateHTML } from "@/utils/jsx-generator";
import { useEditor } from "@craftjs/core";

export const CodePreview = () => {
  const { query } = useEditor();
  const [tab, setTab] = React.useState("jsx");
  const [componentName] = React.useState("MyComponent");

  const generateJSX = () => {
    const json = query.serialize();
    return generateComponent(json, componentName);
  };

  const generateHTMLOutput = () => {
    const json = query.serialize();
    return generateHTML(json);
  };

  const copyToClipboard = () => {
    const code = tab === "jsx" ? generateJSX() : generateHTMLOutput();
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const code = tab === "jsx" ? generateJSX() : generateHTMLOutput();
    const fileName = tab === "jsx" ? `${componentName}.jsx` : "index.html";
    const mimeType = tab === "jsx" ? "text/javascript" : "text/html";

    const blob = new Blob([code], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Export Code</h2>
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="jsx">React/JSX</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Copy
          </Button>
          <Button size="sm" onClick={downloadCode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <pre className="p-4 text-sm">
          <code>{tab === "jsx" ? generateJSX() : generateHTMLOutput()}</code>
        </pre>
      </ScrollArea>
    </div>
  );
};
