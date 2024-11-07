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
import { CustomComponent } from "@/types/common/resources";

interface CustomComponentListProps {
  components: CustomComponent[];
  activeComponentIndex: number | null;
  setActiveComponentIndex: (index: number) => void;
  setActivePageIndex: (index: number) => void;
  addComponent: (name: string) => void;
}

export const CustomComponentList: React.FC<CustomComponentListProps> = ({
  components,
  activeComponentIndex,
  setActiveComponentIndex,
  setActivePageIndex,
  addComponent,
}) => {
  const [isComponentDialogOpen, setIsComponentDialogOpen] =
    React.useState(false);
  const [newComponentName, setNewComponentName] = React.useState("");

  const handleAddComponent = () => {
    addComponent(newComponentName);
    setNewComponentName("");
    setIsComponentDialogOpen(false);
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Custom Components</h2>
      {components.map((component, index) => (
        <Button
          key={component.name}
          variant={activeComponentIndex === index ? "default" : "outline"}
          className="w-full mb-2"
          onClick={() => {
            setActiveComponentIndex(index);
            setActivePageIndex(0);
          }}
        >
          {component.name}
        </Button>
      ))}
      <Dialog
        open={isComponentDialogOpen}
        onOpenChange={setIsComponentDialogOpen}
      >
        <DialogTrigger asChild>
          <Button className="w-full">Add Component</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Component</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newComponentName}
                onChange={(e) => setNewComponentName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleAddComponent}>Add Component</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
