import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Button onClick={() => navigate('/builder/new')}>New Project</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {/* Project cards will go here */}
        <div className="border rounded-lg p-4 hover:border-primary cursor-pointer" 
             onClick={() => navigate('/builder/1')}>
          <h2 className="text-xl font-semibold">Sample Project</h2>
          <p className="text-muted-foreground">Last edited: 2 days ago</p>
        </div>
      </div>
    </div>
  );
} 