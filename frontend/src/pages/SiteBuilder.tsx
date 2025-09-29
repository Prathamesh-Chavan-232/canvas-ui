import React from "react";
import { useParams } from "react-router";
import { Toaster } from "@/components/ui/toaster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SiteBuilderHome() {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = React.useState("editor");

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
              Website Builder Editor
            </TabsContent>
            <TabsContent
              value="preview"
              className="h-full data-[state=active]:flex flex-col"
            >
              Live Preview
            </TabsContent>
            <TabsContent
              value="code"
              className="h-full data-[state=active]:flex flex-col"
            >
              <div className="flex-1 overflow-auto">
                Code Preview
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}
