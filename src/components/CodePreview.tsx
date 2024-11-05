import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CodePreviewProps {
  currentPage: any;
  components: any[];
}

export function CodePreview({ currentPage, components }: CodePreviewProps) {
  const { toast } = useToast();

  const generateCode = () => {
    if (!currentPage) return '';

    const imports = new Set(['import React from "react"']);
    const componentCode = currentPage.components?.map((component: any) => {
      imports.add(`import { ${component.name} } from '@/components/ui/${component.name.toLowerCase()}'`);
      return `<${component.name} />`; // Simplified for demo
    }).join('\n      ') || '';

    const code = `${Array.from(imports).join('\n')}

export default function ${currentPage.name}() {
  return (
    <div className="relative">
      ${componentCode}
    </div>
  );
}`;

    return code;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
    toast({
      title: "Code copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Code Preview</h3>
        <Button variant="ghost" size="icon" onClick={copyCode}>
          <Copy className="w-4 h-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">
        <pre className="text-sm">
          <code>{generateCode()}</code>
        </pre>
      </ScrollArea>
    </div>
  );
}