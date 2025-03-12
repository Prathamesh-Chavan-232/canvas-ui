import React from "react";
import { Editor, Frame } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import { SettingsPanel } from "./editor/SettingsPanel";
import { Toolbar } from "./editor/Toolbar";
import { ComponentsPanel } from "./editor/ComponentsPanel";
import { LayersPanel } from "./editor/LayersPanel";
import { RenderNode } from "./editor/RenderNode";
import TemplatesGallery from "./editor/TemplatesGallery";
import {
  Container,
  CraftButton,
  CraftCard,
  CraftInput,
  CraftTextarea,
  Heading,
  Paragraph,
} from "./nodes/nodes";

interface CraftJSEditorProps {
  initialTemplate?: unknown;
}

const CraftJSEditor: React.FC<CraftJSEditorProps> = ({ initialTemplate }) => {
  const editorRef = React.useRef<any>(null);

  React.useEffect(() => {
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
              <Frame></Frame>
            </div>
          </div>
        </div>
        <SettingsPanel />
      </div>
    </Editor>
  );
};

export default CraftJSEditor;
