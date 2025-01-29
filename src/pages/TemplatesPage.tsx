import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Eye, ArrowRight } from "lucide-react";

export default function TemplatesPage() {
  const navigate = useNavigate();
  
  const templates = [
    { 
      id: 1, 
      name: "Landing Page", 
      description: "Modern landing page template with hero section, features, and CTA",
      thumbnail: "https://placehold.co/600x400",
      category: "Marketing"
    },
    { 
      id: 2, 
      name: "Blog", 
      description: "Clean blog layout with sidebar, featured posts, and newsletter signup",
      thumbnail: "https://placehold.co/600x400",
      category: "Content"
    },
    { 
      id: 3, 
      name: "Portfolio", 
      description: "Showcase your work with this elegant portfolio template",
      thumbnail: "https://placehold.co/600x400",
      category: "Personal"
    },
    { 
      id: 4, 
      name: "E-commerce", 
      description: "Complete online store template with product grid and cart",
      thumbnail: "https://placehold.co/600x400",
      category: "Business"
    },
  ];

  return (
    <div className="container py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Templates</h1>
          <p className="text-muted-foreground text-lg">Start with a pre-built template and customize it to your needs</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="group hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src={template.thumbnail} 
                alt={template.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {template.category}
                </span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(`/preview/template/${template.id}`, '_blank')}
              >
                <Eye className="mr-2 h-4 w-4" /> Preview
              </Button>
              <Button 
                size="sm"
                onClick={() => navigate(`/builder/new?template=${template.id}`)}
              >
                Use Template <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 