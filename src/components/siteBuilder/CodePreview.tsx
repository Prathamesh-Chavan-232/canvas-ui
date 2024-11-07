import React from "react";

interface CodePreviewProps {
  code: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  return (
    <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
      <code>{code}</code>
    </pre>
  );
};
