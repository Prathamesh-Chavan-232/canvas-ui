import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Recent Projects</h3>
          <p className="text-muted-foreground mb-4">3 active projects</p>
          <Button onClick={() => navigate('/projects')}>View All</Button>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Templates</h3>
          <p className="text-muted-foreground mb-4">12 available templates</p>
          <Button onClick={() => navigate('/templates')}>Browse</Button>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Components</h3>
          <p className="text-muted-foreground mb-4">8 custom components</p>
          <Button onClick={() => navigate('/components')}>Manage</Button>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
          <p className="text-muted-foreground mb-4">Create a new project</p>
          <Button onClick={() => navigate('/builder/new')}>New Project</Button>
        </Card>
      </div>
    </div>
  );
} 