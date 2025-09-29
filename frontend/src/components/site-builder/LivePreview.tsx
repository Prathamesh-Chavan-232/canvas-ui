import { useEffect, useRef } from "react";
import { useEditor } from "@craftjs/core";
import { generateHTML } from "@/utils/jsx-generator";

export const LivePreview = () => {
  const { query } = useEditor();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const json = query.serialize();
    const html = generateHTML(json);

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();
    }
  }, [query]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Live Preview</h2>
        <p className="text-sm text-muted-foreground">
          This is a live preview of your website as it would appear to visitors.
        </p>
      </div>
      <div className="flex-1 p-4">
        <iframe
          ref={iframeRef}
          className="w-full h-full border rounded-lg"
          title="Preview"
        />
      </div>
    </div>
  );
};
