import { useRef, useState } from 'react';

export function useDroppable() {
  const dropRef = useRef<HTMLDivElement>(null);
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => setIsOver(false);
  const handleDrop = () => setIsOver(false);

  return {
    dropRef,
    isOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
}