import { baseComponents } from "@/lib/Components";
import { DraggableItem } from "@/types/common/resources";
import React from "react";
import { useDrag, useDrop } from "react-dnd";

interface DraggableComponentProps {
  name: string;
  type: string;
  index: number;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  isUIElement?: boolean;
}

export const DraggableComponent: React.FC<DraggableComponentProps> = ({
  name,
  type,
  index,
  moveComponent,
  isUIElement = false,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    item: { name, type, index, isUIElement },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "component",
    hover(item: DraggableItem & { index: number }) {
      if (!moveComponent) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveComponent(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  }));

  const renderComponent = baseComponents[type]
    ? baseComponents[type].render
    : () => <div>Unknown Component</div>;

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        marginBottom: "8px",
      }}
    >
      {renderComponent()}
    </div>
  );
};
