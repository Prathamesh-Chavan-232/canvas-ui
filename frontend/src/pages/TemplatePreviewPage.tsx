import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Share2, ArrowLeft, Edit } from "lucide-react";

import { useParams, useNavigate } from "react-router";

const TemplatePreviewPage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [templateData,] = useState(null);
  const [templateHtml,] = useState("");

  if (!templateData) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Template Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The requested template could not be found.
        </p>
        <Button onClick={() => navigate("/templates")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Templates
        </Button>
      </div>
    );
  }

  return (
    <div>
      Template Preview Page
    </div>

  );
};

export default TemplatePreviewPage;
