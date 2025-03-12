import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import templates from "@/components/templates";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const navigate = useNavigate();
  const templateCount = Object.keys(templates).length;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Recent Projects</h3>
          <p className="text-muted-foreground mb-4">3 active projects</p>
          <Button onClick={() => navigate("/projects")}>View All</Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Templates</h3>
          <p className="text-muted-foreground mb-4">
            {templateCount} available templates
          </p>
          <Button onClick={() => navigate("/templates")}>Browse</Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Components</h3>
          <p className="text-muted-foreground mb-4">8 custom components</p>
          <Button onClick={() => navigate("/components")}>Manage</Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
          <p className="text-muted-foreground mb-4">Create a new project</p>
          <Button onClick={() => navigate("/builder/new")}>New Project</Button>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-6">Recent Templates</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.values(templates)
          .slice(0, 3)
          .map((template) => (
            <Card key={template.id} className="overflow-hidden">
              <div className="h-40 bg-muted flex items-center justify-center">
                {template.thumbnail ? (
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-muted-foreground">
                    Template Preview
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.category}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigate(`/builder/new?template=${template.id}`)
                  }
                  className="w-full"
                >
                  Use Template
                </Button>
              </div>
            </Card>
          ))}
      </div>

      <div className="text-center mt-6">
        <Button
          variant="outline"
          onClick={() => navigate("/templates")}
          className="mx-auto"
        >
          View All Templates
        </Button>
      </div>
    </div>
  );
}
