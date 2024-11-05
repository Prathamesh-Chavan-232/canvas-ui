import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { PlusCircle, File } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PagesListProps {
  pages: any[];
  currentPage: any;
  onSelectPage: (page: any) => void;
  onAddPage: () => void;
}

export function PagesList({ pages, currentPage, onSelectPage, onAddPage }: PagesListProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <Button onClick={onAddPage} variant="outline" className="w-full">
          <PlusCircle className="w-4 h-4 mr-2" />
          New Page
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {pages.map((page) => (
            <button
              key={page.id}
              className={cn(
                "flex items-center gap-2 w-full p-2 rounded-md text-left",
                currentPage?.id === page.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              )}
              onClick={() => onSelectPage(page)}
            >
              <File className="w-4 h-4" />
              {page.name}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}