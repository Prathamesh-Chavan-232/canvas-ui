import { DraggableItem } from "@/types/common/resources";
import React from "react";
import { useDrop } from "react-dnd";

interface DropZoneProps {
  onDrop: (item: DraggableItem) => void;
  children: React.ReactNode;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onDrop,
  children,
  moveComponent,
}) => {
  const [, drop] = useDrop(() => ({
    accept: "component",
    drop: (item: DraggableItem, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      onDrop(item);
    },
  }));

  return (
    <div
      ref={drop}
      className="min-h-[300px] border-2 border-dashed border-gray-300 bg-transparent p-4 rounded-lg"
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          index,
          moveComponent,
        }),
      )}
    </div>
  );
};
