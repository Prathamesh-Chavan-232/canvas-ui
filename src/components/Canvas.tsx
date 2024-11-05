import { useDroppable } from "@/hooks/useDroppable";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Icons from "lucide-react";
import { Trash2 } from "lucide-react";

interface CanvasProps {
  currentPage: any;
  components: any[];
  onUpdatePage: (content: any) => void;
  onUpdateComponent: (id: string, content: any) => void;
}

export function Canvas({ currentPage, onUpdatePage }: CanvasProps) {
  const { dropRef, isOver } = useDroppable();
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleDrop = (e: React.DragEvent) => {
    const component = JSON.parse(e.dataTransfer.getData("component"));
    const position = {
      x: e.clientX - dropRef.current?.getBoundingClientRect().left,
      y: e.clientY - dropRef.current?.getBoundingClientRect().top,
    };

    onUpdatePage({
      ...currentPage,
      components: [
        ...(currentPage.components || []),
        { ...component, id: Date.now(), position },
      ],
    });
  };

  const handleComponentClick = (component: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedComponent(component);
  };

  const handleCanvasClick = () => {
    setSelectedComponent(null);
  };

  const handleRemoveComponent = (componentId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdatePage({
      ...currentPage,
      components: currentPage.components.filter(
        (c: any) => c.id !== componentId,
      ),
    });
    setSelectedComponent(null);
  };

  return (
    <div className="h-full relative">
      <div className="absolute inset-0 p-4">
        <ScrollArea className="h-full w-full">
          <div
            ref={dropRef}
            className={cn(
              "relative min-h-full w-full rounded-lg border-2 border-dashed p-8",
              isOver && "border-primary bg-primary/10",
            )}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleCanvasClick}
          >
            {currentPage?.components?.map((component: any) => {
              const Icon = Icons[component.icon as keyof typeof Icons];
              const isSelected = selectedComponent?.id === component.id;

              return (
                <div
                  key={component.id}
                  className={cn(
                    "absolute p-4 rounded-md border cursor-move bg-background",
                    isSelected && "ring-2 ring-primary",
                  )}
                  style={{
                    left: component.position.x,
                    top: component.position.y,
                  }}
                  onClick={(e) => handleComponentClick(component, e)}
                  draggable
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{component.name}</span>
                    {isSelected && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={(e) => handleRemoveComponent(component.id, e)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

