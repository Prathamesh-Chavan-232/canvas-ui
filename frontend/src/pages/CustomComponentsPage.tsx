import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Copy, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";

export default function CustomComponentsPage() {
  const navigate = useNavigate();

  const components = [
    {
      id: 1,
      name: "Hero Section",
      description: "A modern hero section with image, heading, and CTA",
      usageCount: 3,
      lastEdited: "2 days ago",
    },
    {
      id: 2,
      name: "Feature Card",
      description: "Showcase features with icon, title, and description",
      usageCount: 5,
      lastEdited: "1 week ago",
    },
    {
      id: 3,
      name: "Contact Form",
      description: "Contact form with validation and submission handling",
      usageCount: 2,
      lastEdited: "3 days ago",
    },
  ];

  return (
    <div className="container py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Custom Components</h1>
          <p className="text-muted-foreground text-lg">
            Create and manage reusable components for your projects
          </p>
        </div>
        <Button onClick={() => navigate("/builder/component/new")}>
          <Plus className="mr-2 h-4 w-4" /> Create Component
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card
            key={component.id}
            className="group hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl">{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Used in {component.usageCount} projects</span>
                  <span>Last edited {component.lastEdited}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      navigate(`/builder/component/${component.id}`)
                    }
                  >
                    <Pencil className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => { }}>
                    <Copy className="mr-2 h-4 w-4" /> Duplicate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive hover:text-white"
                    onClick={() => { }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

