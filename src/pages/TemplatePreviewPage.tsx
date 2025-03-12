import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Share2, ArrowLeft, Edit } from "lucide-react";

import templates from "@/components/templates";
import { generateHTML } from "@/utils/jsx-generator";
import { useParams, useNavigate } from "react-router";

const TemplatePreviewPage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [templateData, setTemplateData] = useState(null);
  const [templateHtml, setTemplateHtml] = useState("");

  useEffect(() => {
    if (templateId && templates[templateId]) {
      setTemplateData(templates[templateId]);

      try {
        // Generate HTML preview (this may need additional work to properly generate HTML)
        const html = generateHTML(templates[templateId].data);
        setTemplateHtml(html);
      } catch (err) {
        console.error("Error generating HTML preview:", err);
      }
    }
  }, [templateId]);

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
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Button
            variant="outline"
            onClick={() => navigate("/templates")}
            className="mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <h1 className="text-3xl font-bold">{templateData.name} Template</h1>
        </div>
        <div className="space-x-4">
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button variant="outline">
            <Code className="mr-2 h-4 w-4" /> View Code
          </Button>
          <Button
            onClick={() => navigate(`/builder/new?template=${templateId}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Edit Template
          </Button>
        </div>
      </div>

      <div className="border rounded-lg h-[600px] bg-white overflow-hidden flex items-center justify-center">
        <iframe
          className="w-full h-full border-0"
          srcDoc={templateHtml}
          title={`${templateData.name} Preview`}
          sandbox="allow-same-origin"
        />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Template Details</h2>
          <p className="text-muted-foreground mb-4">
            {templateData.description}
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-medium">Category:</span>{" "}
            {templateData.category}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="flex flex-col gap-3">
            <Button
              className="w-full md:w-auto"
              onClick={() => navigate(`/builder/new?template=${templateId}`)}
            >
              <Edit className="mr-2 h-4 w-4" /> Use This Template
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              <Code className="mr-2 h-4 w-4" /> Export Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewPage;
