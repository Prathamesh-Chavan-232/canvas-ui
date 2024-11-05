import React, { ReactNode } from "react";
import { useDrop } from "react-dnd";

interface IDropZoneProps {
  onDrop: (item: any) => void;
  type: string;
  index: number;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  children: ReactNode;
}

const DropZone: React.FC<IDropZoneProps> = ({ onDrop, children }) => {
  const [, drop] = useDrop(() => ({
    accept: "component",
    drop: (item, monitor) => {
      if (!monitor.didDrop()) {
        onDrop(item);
      }
    },
  }));

  return (
    <div
      ref={drop}
      style={{
        minHeight: "300px",
        border: "2px dashed #ccc",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;
