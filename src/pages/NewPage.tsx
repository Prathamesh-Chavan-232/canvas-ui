import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState, useCallback } from "react";
import DraggableComponent from "@/components/common/DraggableComponent";
import DropZone from "@/components/common/Dropzone";
import AddDialog from "@/components/NewPage/AddDialog";
import PageButton from "@/components/NewPage/PageButtons";
import TabsView from "@/components/NewPage/TabsView";

interface Page {
  name: string;
  elements: string[];
}

const NewPage: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([{ name: "Home", elements: [] }]);
  const [customComponents, setCustomComponents] = useState<string[]>([]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("canvas");

  const handleAddPage = useCallback((name: string) => {
    setPages((prevPages) => [...prevPages, { name, elements: [] }]);
  }, []);

  const handleAddComponent = useCallback((name: string) => {
    setCustomComponents((prevComponents) => [...prevComponents, name]);
  }, []);

  const handleDrop = useCallback(
    (item: { type: string }) => {
      setPages((prevPages) => {
        const newPages = [...prevPages];
        newPages[activePageIndex].elements.push(item.type);
        return newPages;
      });
    },
    [activePageIndex],
  );

  const moveComponent = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setPages((prevPages) => {
        const newPages = [...prevPages];
        const page = newPages[activePageIndex];
        const [movedElement] = page.elements.splice(dragIndex, 1);
        page.elements.splice(hoverIndex, 0, movedElement);
        return newPages;
      });
    },
    [activePageIndex],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <div className="w-1/4 p-4 border-r">
          <AddDialog title="Page" onAdd={handleAddPage} />
          <AddDialog title="Component" onAdd={handleAddComponent} />
          <div className="mt-4">
            <h2 className="font-semibold">Pages</h2>
            {pages.map((page, index) => (
              <PageButton
                key={index}
                name={page.name}
                onClick={() => setActivePageIndex(index)}
                isActive={index === activePageIndex}
              />
            ))}
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Components</h2>
            {customComponents.map((component, index) => (
              <DraggableComponent
                key={index}
                index={index}
                name={component}
                type={component}
                moveComponent={moveComponent}
              />
            ))}
          </div>
        </div>
        <div className="w-3/4 p-4">
          <TabsView
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onDrop={handleDrop}
            moveComponent={moveComponent}
            generateCode={() => JSON.stringify(pages, null, 2)} // Example: converting pages to JSON format
          >
            {pages[activePageIndex].elements.map((element, index) => (
              <DropZone
                onDrop={() => {}}
                key={index}
                index={index}
                type={element}
                moveComponent={moveComponent}
              >
                <DraggableComponent
                  name={element}
                  type={element}
                  index={index}
                  moveComponent={moveComponent}
                />
              </DropZone>
            ))}
          </TabsView>
        </div>
      </div>
    </DndProvider>
  );
};

export default NewPage;
