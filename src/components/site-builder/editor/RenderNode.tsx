import { useNode, useEditor } from "@craftjs/core";
import React, { useEffect } from "react";

export const RenderNode = ({ render }: { render: React.ReactNode }) => {
  const { id } = useNode();
  const { query } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const { isHover, dom } = useNode((node) => ({
    isHover: node.events.hovered,
    isSelected: node.events.selected,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  useEffect(() => {
    if (dom && id !== "ROOT") {
      if (isHover) {
        dom.classList.toggle("component-hover", isHover);
      } else {
        dom.classList.remove("component-hover");
      }
    }
  }, [dom, id, isHover]);

  return <>{render}</>;
};
