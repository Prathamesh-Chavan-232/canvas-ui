import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useDraggable } from '@/hooks/useDraggable';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

const components = {
  layout: [
    { name: 'Container', icon: 'Box' },
    { name: 'Grid', icon: 'Grid' },
    { name: 'Stack', icon: 'Layers' },
  ],
  ui: [
    { name: 'Button', icon: 'Square' },
    { name: 'Input', icon: 'Input' },
    { name: 'Textarea', icon: 'AlignLeft' },
    { name: 'Label', icon: 'Tag' },
    { name: 'Dialog', icon: 'MessageSquare' },
    { name: 'Card', icon: 'CreditCard' },
  ],
  navigation: [
    { name: 'Link', icon: 'Link' },
    { name: 'Tabs', icon: 'Layout' },
    { name: 'Breadcrumb', icon: 'ChevronRight' },
  ],
};

interface ComponentLibraryProps {
  onAddComponent: (component: any) => void;
}

export function ComponentLibrary({ onAddComponent }: ComponentLibraryProps) {
  const { dragRef, isDragging } = useDraggable();

  const renderComponent = (item: { name: string; icon: string }) => {
    const Icon = Icons[item.icon as keyof typeof Icons];
    
    return (
      <div
        key={item.name}
        ref={dragRef}
        className={cn(
          "flex items-center gap-2 p-2 rounded-md cursor-move hover:bg-accent",
          isDragging && "opacity-50"
        )}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('component', JSON.stringify(item));
        }}
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{item.name}</span>
      </div>
    );
  };

  return (
    <ScrollArea className="h-full px-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="layout">
          <AccordionTrigger>Layout Components</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {components.layout.map(renderComponent)}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ui">
          <AccordionTrigger>UI Elements</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {components.ui.map(renderComponent)}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="navigation">
          <AccordionTrigger>Navigation</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {components.navigation.map(renderComponent)}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );
}