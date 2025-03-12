import React from "react";
import { useEditor } from "@craftjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PanelHeading } from "./ComponentsPanel";
import { Input } from "@/components/ui/input";

type SpacingValue = string | number | undefined;

interface SpacingControlProps {
  label: string;
  top: SpacingValue;
  right: SpacingValue;
  bottom: SpacingValue;
  left: SpacingValue;
  onTopChange: (value: string) => void;
  onRightChange: (value: string) => void;
  onBottomChange: (value: string) => void;
  onLeftChange: (value: string) => void;
}

export const SpacingControl = ({
  label,
  top,
  right,
  bottom,
  left,
  onTopChange,
  onRightChange,
  onBottomChange,
  onLeftChange,
}: SpacingControlProps) => {
  return (
    <div>
      <Label className="text-xs mb-1 block">{label}</Label>
      <div className="relative border rounded-md p-4">
        {/* Top spacing control */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Input
            className="h-7 w-12 text-center px-1"
            value={top || ""}
            onChange={(e) => onTopChange(e.target.value)}
          />
        </div>

        {/* Right spacing control */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <Input
            className="h-7 w-12 text-center px-1"
            value={right || ""}
            onChange={(e) => onRightChange(e.target.value)}
          />
        </div>

        {/* Bottom spacing control */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Input
            className="h-7 w-12 text-center px-1"
            value={bottom || ""}
            onChange={(e) => onBottomChange(e.target.value)}
          />
        </div>

        {/* Left spacing control */}
        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Input
            className="h-7 w-12 text-center px-1"
            value={left || ""}
            onChange={(e) => onLeftChange(e.target.value)}
          />
        </div>

        {/* Inner box for visual representation */}
        <div className="w-full h-12 bg-muted rounded-sm flex items-center justify-center text-xs text-muted-foreground">
          Box
        </div>
      </div>
    </div>
  );
};

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
  return (
    <div>
      <Label className="text-xs mb-1 block">{label}</Label>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded border overflow-hidden">
          <input
            type="color"
            className="w-10 h-10 transform -translate-x-1 -translate-y-1"
            value={value || "#000000"}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <Input value={value || ""} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
};

interface SizeControlsProps {
  width: string | number | undefined;
  height: string | number | undefined;
  onWidthChange: (value: string) => void;
  onHeightChange: (value: string) => void;
}

export const SizeControls = ({
  width,
  height,
  onWidthChange,
  onHeightChange,
}: SizeControlsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <Label className="text-xs mb-1 block">Width</Label>
        <Input
          placeholder="auto"
          value={width || ""}
          onChange={(e) => onWidthChange(e.target.value)}
        />
      </div>
      <div>
        <Label className="text-xs mb-1 block">Height</Label>
        <Input
          placeholder="auto"
          value={height || ""}
          onChange={(e) => onHeightChange(e.target.value)}
        />
      </div>
    </div>
  );
};

interface TypographyControlsProps {
  fontSize: string | number | undefined;
  fontWeight: string | number | undefined;
  fontStyle: string | undefined;
  textAlign: string | undefined;
  onFontSizeChange: (value: string) => void;
  onFontWeightChange: (value: string) => void;
  onFontStyleChange: (value: string) => void;
  onTextAlignChange: (value: string) => void;
}

export const TypographyControls = ({
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  onFontSizeChange,
  onFontWeightChange,
  onFontStyleChange,
  onTextAlignChange,
}: TypographyControlsProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <Label className="text-xs mb-1 block">Font Size</Label>
          <Input
            placeholder="16px"
            value={fontSize || ""}
            onChange={(e) => onFontSizeChange(e.target.value)}
          />
        </div>
        <div>
          <Label className="text-xs mb-1 block">Font Weight</Label>
          <select
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
            value={fontWeight || ""}
            onChange={(e) => onFontWeightChange(e.target.value)}
          >
            <option value="">Default</option>
            <option value="300">Light (300)</option>
            <option value="400">Regular (400)</option>
            <option value="500">Medium (500)</option>
            <option value="600">Semibold (600)</option>
            <option value="700">Bold (700)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs mb-1 block">Font Style</Label>
          <select
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
            value={fontStyle || ""}
            onChange={(e) => onFontStyleChange(e.target.value)}
          >
            <option value="">Default</option>
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
          </select>
        </div>
        <div>
          <Label className="text-xs mb-1 block">Text Align</Label>
          <select
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
            value={textAlign || ""}
            onChange={(e) => onTextAlignChange(e.target.value)}
          >
            <option value="">Default</option>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </div>
      </div>
    </>
  );
};

interface StyleControlsProps {
  nodeProps: {
    width?: string | number;
    height?: string | number;
    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    color?: string;
    backgroundColor?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    fontStyle?: string;
    textAlign?: string;
    setProp: (cb: (props: any) => void) => void;
  };
}

export const StyleControls = ({ nodeProps }: StyleControlsProps) => {
  const {
    width,
    height,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    color,
    backgroundColor,
    fontSize,
    fontWeight,
    fontStyle,
    textAlign,
    setProp,
  } = nodeProps;

  return (
    <Tabs defaultValue="layout">
      <TabsList className="w-full grid grid-cols-3">
        <TabsTrigger value="layout">Layout</TabsTrigger>
        <TabsTrigger value="typography">Typography</TabsTrigger>
        <TabsTrigger value="decoration">Decoration</TabsTrigger>
      </TabsList>

      <TabsContent value="layout" className="space-y-4 py-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Size</CardTitle>
          </CardHeader>
          <CardContent>
            <SizeControls
              width={width}
              height={height}
              onWidthChange={(value) =>
                setProp((props: any) => {
                  props.width = value;
                })
              }
              onHeightChange={(value) =>
                setProp((props: any) => {
                  props.height = value;
                })
              }
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Padding</CardTitle>
          </CardHeader>
          <CardContent>
            <SpacingControl
              label="Padding"
              top={paddingTop}
              right={paddingRight}
              bottom={paddingBottom}
              left={paddingLeft}
              onTopChange={(value) =>
                setProp((props: any) => {
                  props.paddingTop = value;
                })
              }
              onRightChange={(value) =>
                setProp((props: any) => {
                  props.paddingRight = value;
                })
              }
              onBottomChange={(value) =>
                setProp((props: any) => {
                  props.paddingBottom = value;
                })
              }
              onLeftChange={(value) =>
                setProp((props: any) => {
                  props.paddingLeft = value;
                })
              }
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <SpacingControl
              label="Margin"
              top={marginTop}
              right={marginRight}
              bottom={marginBottom}
              left={marginLeft}
              onTopChange={(value) =>
                setProp((props: any) => {
                  props.marginTop = value;
                })
              }
              onRightChange={(value) =>
                setProp((props: any) => {
                  props.marginRight = value;
                })
              }
              onBottomChange={(value) =>
                setProp((props: any) => {
                  props.marginBottom = value;
                })
              }
              onLeftChange={(value) =>
                setProp((props: any) => {
                  props.marginLeft = value;
                })
              }
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="typography" className="space-y-4 py-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Typography</CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyControls
              fontSize={fontSize}
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textAlign={textAlign}
              onFontSizeChange={(value) =>
                setProp((props: any) => {
                  props.fontSize = value;
                })
              }
              onFontWeightChange={(value) =>
                setProp((props: any) => {
                  props.fontWeight = value;
                })
              }
              onFontStyleChange={(value) =>
                setProp((props: any) => {
                  props.fontStyle = value;
                })
              }
              onTextAlignChange={(value) =>
                setProp((props: any) => {
                  props.textAlign = value;
                })
              }
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="decoration" className="space-y-4 py-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ColorPicker
              label="Text Color"
              value={color || "#000000"}
              onChange={(value) =>
                setProp((props: any) => {
                  props.color = value;
                })
              }
            />
            <ColorPicker
              label="Background Color"
              value={backgroundColor || "transparent"}
              onChange={(value) =>
                setProp((props: any) => {
                  props.backgroundColor = value;
                })
              }
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export const SettingsPanel = () => {
  const { selected, actions } = useEditor((state, query) => {
    const currentNodeId = state.events.selected;
    let selectedData = null;

    if (currentNodeId) {
      selectedData = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        displayName: query.node(currentNodeId).get().displayName,
        props: state.nodes[currentNodeId].data.props,
        hasSettings: query.node(currentNodeId).get().related?.settings,
        nodeSettings: query.node(currentNodeId).get().related?.settings,
        dom: query.node(currentNodeId).get().dom,
      };
    }

    return {
      selected: selectedData,
    };
  });

  return (
    <div className="w-80 border-l h-full flex flex-col bg-background">
      <PanelHeading title="Element Settings" />
      <ScrollArea className="flex-1">
        <div className="p-4">
          {!selected && (
            <p className="text-sm text-muted-foreground">
              Select an element to edit its properties
            </p>
          )}

          {selected && selected.hasSettings && (
            <Tabs defaultValue="properties">
              <TabsList className="w-full">
                <TabsTrigger value="properties" className="flex-1">
                  Properties
                </TabsTrigger>
                <TabsTrigger value="styles" className="flex-1">
                  Styles
                </TabsTrigger>
                <TabsTrigger value="advanced" className="flex-1">
                  Advanced
                </TabsTrigger>
              </TabsList>

              <TabsContent value="properties" className="space-y-4 py-2">
                {/* Node settings from components */}
                {selected.nodeSettings &&
                  React.createElement(selected.nodeSettings, {
                    nodeProps: {
                      ...selected.props,
                      setProp: (cb) => actions.setProp(selected.id, cb),
                    },
                  })}
              </TabsContent>

              <TabsContent value="styles" className="space-y-4 py-2">
                <StyleControls
                  nodeProps={{
                    ...selected.props,
                    setProp: (cb) => actions.setProp(selected.id, cb),
                  }}
                />
              </TabsContent>

              <TabsContent value="advanced" className="space-y-4 py-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Element Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs">Component Type</Label>
                      <div className="mt-1 text-sm font-medium">
                        {selected.displayName}
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs">Node ID</Label>
                      <div className="mt-1 text-sm text-muted-foreground font-mono">
                        {selected.id}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        actions.delete(selected.id);
                      }}
                    >
                      Delete Element
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
