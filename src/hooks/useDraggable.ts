import { useRef, useState } from 'react';

export function useDraggable() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return {
    dragRef,
    isDragging,
    handleDragStart,
    handleDragEnd,
  };
}