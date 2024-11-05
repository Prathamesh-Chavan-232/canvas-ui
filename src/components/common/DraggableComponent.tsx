import { useDrag, useDrop } from "react-dnd";
import React from "react";

interface IDraggableComponentProps {
  name: string;
  type: string;
  index: number;
  moveComponent?: (dragIndex: number, hoverIndex: number) => void;
  isUIElement?: boolean;
}

const DraggableComponent: React.FC<IDraggableComponentProps> = ({
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
    hover(item: any) {
      if (!moveComponent) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveComponent(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        marginBottom: "8px",
      }}
    >
      {name}
    </div>
  );
};

export default DraggableComponent;
