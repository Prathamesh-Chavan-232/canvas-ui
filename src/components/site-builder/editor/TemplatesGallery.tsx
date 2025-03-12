import React, { useState } from "react";
import { useEditor } from "@craftjs/core";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/useToast";
import templates from "@/components/templates";
import { TemplatesGalleryProps } from "../editorTypes";

export const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({ id }) => {
  const { actions } = useEditor();
  const [isOpen, setIsOpen] = useState(false);

  const loadTemplate = (templateId: string) => {
    const template = templates[templateId];
    if (template) {
      if (
        confirm(
          "Loading a template will replace your current design. Continue?",
        )
      ) {
        actions.deserialize(template.data);
        toast({
          title: "Template Applied",
          description: `"${template.name}" template has been loaded successfully.`,
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <Button
        id={id || "templates-gallery-trigger"}
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="w-full mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="4" height="4" x="8" y="8" rx="1" />
          <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.3" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
        </svg>
        Browse Templates
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Choose a Template</DialogTitle>
            <DialogDescription>
              Select a pre-built template to get started quickly.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 px-1">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pb-4">
              {Object.values(templates).map((template) => (
                <Card
                  key={template.id}
                  className="overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    {template.thumbnail ? (
                      <img
                        src={template.thumbnail}
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-muted">
                        <span className="text-muted-foreground">
                          Template Preview
                        </span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                        {template.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{template.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0 pb-3">
                    <Button
                      size="sm"
                      variant="default"
                      className="w-full"
                      onClick={() => loadTemplate(template.id)}
                    >
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TemplatesGallery;
