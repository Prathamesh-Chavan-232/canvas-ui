import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddDialogProps {
  title: string;
  onAdd: (name: string) => void;
}

const AddDialog: React.FC<AddDialogProps> = ({ title, onAdd }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleAdd = () => {
    onAdd(newItemName);
    setNewItemName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Add {title}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New {title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <Button onClick={handleAdd}>Add {title}</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;
