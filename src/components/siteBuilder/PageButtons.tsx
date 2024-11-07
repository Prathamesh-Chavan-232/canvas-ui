import React from "react";
import { Button } from "@/components/ui/button";

interface PageButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({ name, isActive, onClick }) => (
  <Button
    variant={isActive ? "default" : "outline"}
    className="w-full mb-2"
    onClick={onClick}
  >
    {name}
  </Button>
);

export default PageButton;
