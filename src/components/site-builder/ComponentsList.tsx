import React from "react";
import { IUIComponent } from "@/lib/Components";
import { DraggableComponent } from "../common/DraggableComponent";

interface ComponentListProps {
  title: string;
  components: Record<string, IUIComponent>;
  isUIElement?: boolean;
}

export const ComponentList: React.FC<ComponentListProps> = ({
  title,
  components,
  isUIElement = false,
}) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {Object.entries(components).map(([key, value]) => (
        <DraggableComponent
          key={key}
          name={value.name}
          type={key}
          index={-1}
          moveComponent={() => {}}
          isUIElement={isUIElement}
        />
      ))}
    </>
  );
};
