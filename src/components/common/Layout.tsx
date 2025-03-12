import { Link, Outlet } from "react-router";
import { Button } from "../ui/button";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between h-14 px-2">
          <Link to="/" className="font-bold text-xl">
            Site Builder
          </Link>
          <nav className="space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/settings">Settings</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
