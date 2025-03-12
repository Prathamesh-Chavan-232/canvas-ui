import React, { ReactElement, useEffect, useRef } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { cn } from "@/utils/cn";

interface RenderNodeProps {
  render: ReactElement;
}

export const RenderNode: React.FC<RenderNodeProps> = ({ render }) => {
  const { id } = useNode();
  const { selected } = useEditor((state) => {
    const selectedNodes = state.events.selected;
    const isSelected =
      typeof selectedNodes === "string"
        ? selectedNodes === id
        : Array.isArray(selectedNodes)
          ? selectedNodes.includes(id)
          : false;

    return {
      selected: isSelected,
    };
  });

  const { connectors } = useNode((node) => ({
    connectors: node.connectors,
  }));

  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentRef.current) {
      connectors.connect(connectors.drag(currentRef.current));
    }
  }, [connectors]);

  return (
    <div
      ref={currentRef}
      className={cn("relative", {
        "craftjs-node-selected": selected,
      })}
    >
      {render}
      {selected && (
        <div
          className="absolute border-2 border-primary pointer-events-none"
          style={{
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            zIndex: 9,
          }}
        />
      )}
      <style>{`
        .craftjs-node-selected > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default RenderNode;
