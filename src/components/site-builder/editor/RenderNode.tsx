import React, { useEffect, useRef } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { RenderNodeProps } from "../editorTypes";
import { cn } from "@/utils/cn";

export const RenderNode: React.FC<RenderNodeProps> = ({ render }) => {
  const { id } = useNode();
  const { isActive } = useEditor((query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    dom: node.dom,
    connectors: node.connectors,
  }));

  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentRef.current) {
      connect(drag(currentRef.current));
    }
  }, [connect, drag]);

  return (
    <div
      ref={currentRef}
      className={cn("relative", {
        "craftjs-node-selected": isActive,
      })}
    >
      {render}
      {isActive && (
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
