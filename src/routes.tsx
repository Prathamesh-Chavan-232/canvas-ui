import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import SiteBuilderHome from "./pages/SiteBuilderHome";
import ProjectsPage from "./pages/ProjectsPage";
import SettingsPage from "./pages/SettingsPage";
import CustomComponentsPage from "./pages/CustomComponentsPage";
import DashboardPage from "./pages/DashboardPage";
import TemplatesPage from "./pages/TemplatesPage";
import PreviewPage from "./pages/PreviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/builder/:projectId",
        element: <SiteBuilderHome />,
      },
      {
        path: "/templates",
        element: <TemplatesPage />,
      },
      {
        path: "/components",
        element: <CustomComponentsPage />,
      },
      {
        path: "/preview/:projectId",
        element: <PreviewPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]); 

export default router;