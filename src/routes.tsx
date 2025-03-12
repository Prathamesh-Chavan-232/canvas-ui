import { createBrowserRouter } from "react-router";
import Layout from "./components/common/Layout";
import SiteBuilder from "./pages/SiteBuilder";
import ProjectsPage from "./pages/ProjectsPage";
import SettingsPage from "./pages/SettingsPage";
import CustomComponentsPage from "./pages/CustomComponentsPage";
import DashboardPage from "./pages/DashboardPage";
import TemplatesPage from "./pages/TemplatesPage";
import PreviewPage from "./pages/PreviewPage";
import TemplatePreviewPage from "./pages/TemplatePreviewPage";

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
        element: <SiteBuilder />,
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
        path: "/preview/template/:templateId",
        element: <TemplatePreviewPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
