import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Eye, Code, Share2 } from "lucide-react";

export default function PreviewPage() {
  const { projectId } = useParams();

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Preview</h1>
        <div className="space-x-4">
          <Button variant="outline">
            <Code className="mr-2 h-4 w-4" /> View Code
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button>
            <Eye className="mr-2 h-4 w-4" /> Live Preview
          </Button>
        </div>
      </div>
      <div className="border rounded-lg h-[600px] flex items-center justify-center">
        <p className="text-muted-foreground">Preview of project {projectId}</p>
      </div>
    </div>
  );
}
