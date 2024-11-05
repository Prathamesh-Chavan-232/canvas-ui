import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentLibrary } from "@/components/ComponentLibrary";
import { Canvas } from "@/components/Canvas";
import { CodePreview } from "@/components/CodePreview";
import { PagesList } from "@/components/PagesList";
import { usePages } from "@/hooks/usePages";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const NewCanvas = () => {
  const {
    pages,
    currentPage,
    components,
    setCurrentPage,
    addPage,
    updatePageContent,
    updateComponent,
  } = usePages();

  return (
    <ThemeProvider>
      <div className="h-screen w-screen overflow-hidden bg-background">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Sidebar */}
          <ResizablePanel defaultSize={20} minSize={15}>
            <div className="h-full border-r">
              <Tabs defaultValue="pages" className="h-full">
                <TabsList className="w-full justify-start rounded-none border-b">
                  <TabsTrigger value="pages">Pages</TabsTrigger>
                  <TabsTrigger value="components">Components</TabsTrigger>
                </TabsList>
                <TabsContent value="pages" className="h-[calc(100%-40px)]">
                  <PagesList
                    pages={pages}
                    currentPage={currentPage}
                    onSelectPage={setCurrentPage}
                    onAddPage={addPage}
                  />
                </TabsContent>
                <TabsContent value="components" className="h-[calc(100%-40px)]">
                  <ComponentLibrary />
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          {/* Main Content */}
          <ResizablePanel defaultSize={60}>
            <Canvas
              currentPage={currentPage}
              components={components}
              onUpdatePage={updatePageContent}
              onUpdateComponent={updateComponent}
            />
          </ResizablePanel>

          <ResizableHandle />

          {/* Right Sidebar - Code Preview */}
          <ResizablePanel defaultSize={20} minSize={15}>
            <ScrollArea className="h-full">
              <CodePreview currentPage={currentPage} components={components} />
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default NewCanvas;
