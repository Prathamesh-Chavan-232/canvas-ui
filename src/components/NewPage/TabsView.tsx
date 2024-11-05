import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DropZone from "../common/Dropzone";

interface TabsViewProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  onDrop: (item: any) => void;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
  generateCode: () => string;
}

const TabsView: React.FC<TabsViewProps> = ({
  activeTab,
  setActiveTab,
  onDrop,
  moveComponent,
  children,
  generateCode,
}) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
    <TabsList>
      <TabsTrigger value="canvas">Canvas</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="canvas">
      <DropZone onDrop={onDrop} type="" index={0} moveComponent={moveComponent}>
        {children}
      </DropZone>
    </TabsContent>
    <TabsContent value="code">
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
        <code>{generateCode()}</code>
      </pre>
    </TabsContent>
  </Tabs>
);

export default TabsView;
