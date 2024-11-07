import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Page } from "@/types/common/resources";

interface PageListProps {
  pages: Page[];
  activePageIndex: number;
  setActivePageIndex: (index: number) => void;
  setActiveComponentIndex: (index: number | null) => void;
  addPage: (name: string) => void;
}

export const PageList: React.FC<PageListProps> = ({
  pages,
  activePageIndex,
  setActivePageIndex,
  setActiveComponentIndex,
  addPage,
}) => {
  const [isPageDialogOpen, setIsPageDialogOpen] = React.useState(false);
  const [newPageName, setNewPageName] = React.useState("");

  const handleAddPage = () => {
    addPage(newPageName);
    setNewPageName("");
    setIsPageDialogOpen(false);
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Pages</h2>
      {pages.map((page, index) => (
        <Button
          key={page.name}
          variant={activePageIndex === index ? "default" : "outline"}
          className="w-full mb-2"
          onClick={() => {
            setActivePageIndex(index);
            setActiveComponentIndex(null);
          }}
        >
          {page.name}
        </Button>
      ))}
      <Dialog open={isPageDialogOpen} onOpenChange={setIsPageDialogOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Add Page</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Page</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newPageName}
                onChange={(e) => setNewPageName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleAddPage}>Add Page</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
