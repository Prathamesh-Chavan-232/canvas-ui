import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Page, CustomComponent } from "@/types/common/resources";
import { ComponentList } from "../ComponentsList";
import { PageList } from "./PagesList";
import { baseComponents } from "@/lib/Components";
import { CustomComponentList } from "./CustomComponentsList";

interface SidebarProps {
  pages: Page[];
  customComponents: CustomComponent[];
  activePageIndex: number;
  activeComponentIndex: number | null;
  setActivePageIndex: (index: number) => void;
  setActiveComponentIndex: (index: number | null) => void;
  addPage: (name: string) => void;
  addComponent: (name: string) => void;
}

const SiteBuilderSidebar: React.FC<SidebarProps> = ({
  pages,
  customComponents,
  activePageIndex,
  activeComponentIndex,
  setActivePageIndex,
  setActiveComponentIndex,
  addPage,
  addComponent,
}) => {
  return (
    <ScrollArea className="h-[calc(100vh-2rem)]">
      <div className="p-4 border-r">
        <ComponentList
          title="UI Elements"
          components={baseComponents}
          isUIElement={true}
        />
        <Separator className="my-4" />
        {/* <ComponentList title="Components" components={components} /> */}
        <Separator className="my-4" />
        <PageList
          pages={pages}
          activePageIndex={activePageIndex}
          setActivePageIndex={setActivePageIndex}
          setActiveComponentIndex={setActiveComponentIndex}
          addPage={addPage}
        />
        <Separator className="my-4" />
        <CustomComponentList
          components={customComponents}
          activeComponentIndex={activeComponentIndex}
          setActiveComponentIndex={setActiveComponentIndex}
          setActivePageIndex={setActivePageIndex}
          addComponent={addComponent}
        />
      </div>
    </ScrollArea>
  );
};

export default SiteBuilderSidebar;
