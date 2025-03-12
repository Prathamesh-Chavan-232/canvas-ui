import React from "react";
import { useEditor } from "@craftjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils/cn";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  EyeOpenIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { PanelHeading } from "./ComponentsPanel";

export const LayersPanel = () => {
  const { query, actions } = useEditor((state) => ({
    nodes: state.nodes,
    enabled: state.options.enabled,
  }));

  const [layersTree, setLayersTree] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (!query) return;

    const ROOT_NODE = "ROOT";

    // Build tree from nodes
    const buildTree = () => {
      const tree: any[] = [];
      const nodeMap = query.getState().nodes;

      // Helper to recursively build tree
      const buildNodeTree = (nodeId: string, parent: any[] = tree) => {
        const node = nodeMap[nodeId];
        if (!node) return;

        // Skip the root node
        if (nodeId === ROOT_NODE) {
          // Process children of root
          if (node.data.nodes && node.data.nodes.length > 0) {
            node.data.nodes.forEach((childId: string) =>
              buildNodeTree(childId, parent),
            );
          }
          return;
        }

        const nodeInfo = {
          id: nodeId,
          name:
            node.data.custom?.displayName || node.data.displayName || "Unknown",
          type: node.data.type,
          children: [],
          isCanvas: node.data.isCanvas,
          hidden: node.data.custom?.hidden || false,
          expanded: true, // Default expanded state
        };

        parent.push(nodeInfo);

        // If this is a canvas node, process its children
        if (node.data.nodes && node.data.nodes.length > 0) {
          node.data.nodes.forEach((childId: string) =>
            buildNodeTree(childId, nodeInfo.children),
          );
        }
      };

      // Start from the root
      buildNodeTree(ROOT_NODE);
      return tree;
    };

    setLayersTree(buildTree());
  }, [query]);

  const handleNodeSelect = (nodeId: string) => {
    actions.selectNode(nodeId);
  };

  const toggleNodeVisibility = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    actions.setProp(nodeId, (props: any) => {
      props.hidden = !props.hidden;
    });

    setLayersTree((prevTree) => {
      const newTree = JSON.parse(JSON.stringify(prevTree));

      const findAndUpdateNode = (nodes: any[]): boolean => {
        for (let i = 0; i < nodes.length; i++) {
          if (nodes[i].id === nodeId) {
            nodes[i].hidden = !nodes[i].hidden;
            return true;
          }
          if (nodes[i].children && nodes[i].children.length > 0) {
            if (findAndUpdateNode(nodes[i].children)) {
              return true;
            }
          }
        }
        return false;
      };

      findAndUpdateNode(newTree);
      return newTree;
    });
  };

  const toggleNodeExpanded = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();

    setLayersTree((prevTree) => {
      const newTree = JSON.parse(JSON.stringify(prevTree));

      const findAndUpdateNode = (nodes: any[]): boolean => {
        for (let i = 0; i < nodes.length; i++) {
          if (nodes[i].id === nodeId) {
            nodes[i].expanded = !nodes[i].expanded;
            return true;
          }
          if (nodes[i].children && nodes[i].children.length > 0) {
            if (findAndUpdateNode(nodes[i].children)) {
              return true;
            }
          }
        }
        return false;
      };

      findAndUpdateNode(newTree);
      return newTree;
    });
  };

  const deleteNode = (nodeId: string) => {
    actions.delete(nodeId);
  };

  const renderNode = (node: any, level = 0) => {
    const isSelected = query.getEvent("selected").contains(node.id);

    return (
      <ContextMenu key={node.id}>
        <ContextMenuTrigger>
          <div
            className={cn(
              "flex items-center px-2 py-1 cursor-pointer hover:bg-accent/50 rounded",
              isSelected && "bg-accent text-accent-foreground",
              node.hidden && "opacity-50",
            )}
            style={{ paddingLeft: `${(level + 1) * 12}px` }}
            onClick={() => handleNodeSelect(node.id)}
          >
            {node.children && node.children.length > 0 ? (
              <button
                className="mr-1 p-1 rounded hover:bg-accent"
                onClick={(e) => toggleNodeExpanded(node.id, e)}
              >
                {node.expanded ? (
                  <ChevronDownIcon className="h-3 w-3" />
                ) : (
                  <ChevronRightIcon className="h-3 w-3" />
                )}
              </button>
            ) : (
              <div className="ml-4"></div>
            )}

            <div className="flex items-center flex-1 text-xs">
              <span className="font-medium">{node.name}</span>
              <span className="ml-1 text-muted-foreground text-xs">
                ({node.type})
              </span>
            </div>

            <button
              className="p-1 rounded hover:bg-accent"
              onClick={(e) => toggleNodeVisibility(node.id, e)}
            >
              {node.hidden ? (
                <EyeNoneIcon className="h-3 w-3" />
              ) : (
                <EyeOpenIcon className="h-3 w-3" />
              )}
            </button>
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent className="w-48">
          <ContextMenuItem onClick={() => handleNodeSelect(node.id)}>
            Select
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() =>
              toggleNodeVisibility(node.id, {} as React.MouseEvent)
            }
          >
            {node.hidden ? "Show" : "Hide"}
          </ContextMenuItem>
          <ContextMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => deleteNode(node.id)}
          >
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  };

  // Recursive function to render node and its children
  const renderTree = (node: any, level = 0) => {
    return (
      <React.Fragment key={node.id}>
        {renderNode(node, level)}
        {node.expanded && node.children && node.children.length > 0 && (
          <div>
            {node.children.map((child: any) => renderTree(child, level + 1))}
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="h-full flex flex-col bg-background">
      <PanelHeading title="Layers" />
      <ScrollArea className="flex-1">
        <div className="p-4">
          {layersTree.length === 0 ? (
            <div className="text-sm text-muted-foreground">
              No elements found in the editor.
            </div>
          ) : (
            <div className="space-y-1">
              {layersTree.map((node) => renderTree(node))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
