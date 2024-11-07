import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodePreview } from "@/components/siteBuilder/CodePreview";
import { CustomComponent, DraggableItem, Page } from "@/types/common/resources";
import { generateComponentCode } from "@/lib/codeGenerators/react";
import SiteBuilderSidebar from "@/components/siteBuilder/sidebar/SiteBuilderSidebar";
import { Canvas } from "@/components/siteBuilder/Canvas";

export default function SiteBuilderHome() {
  const [pages, setPages] = useState<Page[]>([{ name: "Home", elements: [] }]);
  const [customComponents, setCustomComponents] = useState<CustomComponent[]>(
    [],
  );
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activeComponentIndex, setActiveComponentIndex] = useState<
    number | null
  >(null);
  const [activeTab, setActiveTab] = useState("canvas");

  const handleDrop = useCallback(
    (item: DraggableItem) => {
      if (activeComponentIndex !== null) {
        setCustomComponents((prev) => {
          const newComponents = [...prev];
          newComponents[activeComponentIndex].elements.push(item);
          return newComponents;
        });
      } else {
        setPages((prev) => {
          const newPages = [...prev];
          newPages[activePageIndex].elements.push(item);
          return newPages;
        });
      }
    },
    [activePageIndex, activeComponentIndex],
  );

  const moveComponent = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (activeComponentIndex !== null) {
        setCustomComponents((prev) => {
          const newComponents = [...prev];
          const draggedComponent =
            newComponents[activeComponentIndex].elements[dragIndex];
          newComponents[activeComponentIndex].elements.splice(dragIndex, 1);
          newComponents[activeComponentIndex].elements.splice(
            hoverIndex,
            0,
            draggedComponent,
          );
          return newComponents;
        });
      } else {
        setPages((prev) => {
          const newPages = [...prev];
          const draggedComponent =
            newPages[activePageIndex].elements[dragIndex];
          newPages[activePageIndex].elements.splice(dragIndex, 1);
          newPages[activePageIndex].elements.splice(
            hoverIndex,
            0,
            draggedComponent,
          );
          return newPages;
        });
      }
    },
    [activePageIndex, activeComponentIndex],
  );

  const addPage = (name: string) => {
    setPages((prev) => [...prev, { name, elements: [] }]);
  };

  const addComponent = (name: string) => {
    setCustomComponents((prev) => [...prev, { name, elements: [] }]);
  };

  const activeElements =
    activeComponentIndex !== null
      ? customComponents[activeComponentIndex].elements
      : pages[activePageIndex].elements;

  const generateCode = () => {
    if (activeComponentIndex !== null) {
      return generateComponentCode({
        elements: activeElements,
        componentName: customComponents[activeComponentIndex].name,
      });
    } else {
      return generateComponentCode({
        elements: activeElements,
        componentName: pages[activePageIndex].name,
      });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full flex min-h-screen">
        <SiteBuilderSidebar
          pages={pages}
          customComponents={customComponents}
          activePageIndex={activePageIndex}
          activeComponentIndex={activeComponentIndex}
          setActivePageIndex={setActivePageIndex}
          setActiveComponentIndex={setActiveComponentIndex}
          addPage={addPage}
          addComponent={addComponent}
        />
        <div className="w-full p-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList>
              <TabsTrigger value="canvas">Canvas</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="canvas">
              <Canvas
                elements={activeElements}
                onDrop={handleDrop}
                moveComponent={moveComponent}
              />
            </TabsContent>
            <TabsContent value="code">
              <CodePreview code={generateCode()} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DndProvider>
  );
}