import { DraggableItem } from "@/types/common/resources";
import { DraggableComponent } from "../common/DraggableComponent";
import { DropZone } from "../common/Dropzone";

interface CanvasProps {
  elements: DraggableItem[];
  onDrop: (item: DraggableItem) => void;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  onDelete: (index: number) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  elements,
  onDrop,
  moveComponent,
  onDelete,
}) => {
  return (
    <DropZone onDrop={onDrop} moveComponent={moveComponent}>
      {elements.filter(element => element && element.name).map((element, index) => (
        <DraggableComponent
          key={index}
          index={index}
          name={element.name}
          type={element.type}
          isUIElement={element.isUIElement}
          moveComponent={moveComponent}
          onDelete={() => onDelete(index)}
        />
      ))}
    </DropZone>
  );
};
