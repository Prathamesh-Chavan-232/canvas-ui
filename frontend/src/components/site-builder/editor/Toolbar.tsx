import { useEditor } from "@craftjs/core";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/useToast";

export const Toolbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const saveData = () => {
    const json = query.serialize();
    localStorage.setItem("craftjs-demo", json);
    toast({
      title: "Design Saved",
      description: "Your design has been saved to local storage.",
    });
  };

  const loadData = () => {
    const json = localStorage.getItem("craftjs-demo");
    if (json) {
      actions.deserialize(json);
      toast({
        title: "Design Loaded",
        description: "Your saved design has been loaded.",
      });
    }
  };

  const generateCode = () => {
    // In a real app, you would transform the craft.js tree into actual code
    const json = query.serialize();
    console.log("Generated Code Data:", json);
    toast({
      title: "Code Generated",
      description: "Check the console for the generated JSON representation.",
    });
  };

  const exportHTML = () => {
    // This is a simplified example - real implementation would convert to HTML
    const editorDOM = document.querySelector(".craftjs-renderer");
    const html = editorDOM?.innerHTML || "";

    // Create a blob and download
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported-design.html";
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Design Exported",
      description: "Your design has been exported as HTML.",
    });
  };

  return (
    <TooltipProvider>
      <div className="h-14 border-b flex items-center px-4 justify-between">
        <div className="flex items-center">
          <h1 className="text-lg font-bold mr-6">Website Builder</h1>
          <div className="flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant={enabled ? "default" : "outline"}
                  onClick={() =>
                    actions.setOptions(
                      (options) => (options.enabled = !enabled),
                    )
                  }
                >
                  {enabled ? "Editing Mode" : "Preview Mode"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {enabled ? "Switch to preview mode" : "Switch to editing mode"}
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => actions.history.undo()}
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
                    className="lucide lucide-undo"
                  >
                    <path d="M3 7v6h6" />
                    <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById("templates-gallery-trigger")
                      ?.click()
                  }
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
                  </svg>
                  Templates
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Browse and use pre-built templates
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline" onClick={saveData}>
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
                  className="lucide lucide-save mr-1"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                Save
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save the current design</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline" onClick={loadData}>
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
                  className="lucide lucide-folder-open mr-1"
                >
                  <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
                </svg>
                Load
              </Button>
            </TooltipTrigger>
            <TooltipContent>Load a saved design</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline" onClick={generateCode}>
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
                  className="lucide lucide-code mr-1"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Code
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Generate code from the current design
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="default" onClick={exportHTML}>
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
                  className="lucide lucide-download mr-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Export
              </Button>
            </TooltipTrigger>
            <TooltipContent>Export the current design as HTML</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};
