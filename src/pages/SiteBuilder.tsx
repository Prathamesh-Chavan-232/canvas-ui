import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Toaster } from "@/components/ui/toaster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodePreview } from "@/components/site-builder/CodePreview";
import CraftJSEditor from "@/components/site-builder/Editor";
import templates from "@/components/templates";
import { LivePreview } from "@/components/site-builder/LivePreview";

export default function SiteBuilderHome() {
  const { projectId } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState("editor");
  const [initialTemplate, setInitialTemplate] = React.useState<unknown>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const templateId = searchParams.get("template");
    if (templateId && templates[templateId]) {
      setInitialTemplate(templates[templateId].data);
    }
  }, [location]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="container flex items-center justify-between">
            <TabsList className="h-16">
              <TabsTrigger value="editor" className="text-sm">
                Editor
              </TabsTrigger>
              <TabsTrigger value="preview" className="text-sm">
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="text-sm">
                Code
              </TabsTrigger>
            </TabsList>
            <div className="text-sm text-muted-foreground">
              {projectId ? `Editing Project ${projectId}` : "New Project"}
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <TabsContent
              value="editor"
              className="h-full data-[state=active]:flex flex-col"
            >
              <CraftJSEditor initialTemplate={initialTemplate} />
            </TabsContent>
            <TabsContent
              value="preview"
              className="h-full data-[state=active]:flex flex-col"
            >
              <LivePreview />
            </TabsContent>
            <TabsContent
              value="code"
              className="h-full data-[state=active]:flex flex-col"
            >
              <div className="flex-1 overflow-auto">
                <CodePreview />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
