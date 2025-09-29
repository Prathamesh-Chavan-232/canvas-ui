import portfolio from "./portfolio";
import blog from "./blog";
import { Template } from "../site-builder/editorTypes";
import landing from "./landing";

export const templates: Record<string, Template> = {
  "landing-page": {
    id: "landing-page",
    name: "Landing Page",
    description:
      "Modern landing page template with hero section, features, and CTA",
    thumbnail: "https://placehold.co/600x400?text=Landing+Page",
    category: "Marketing",
    data: landing,
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio",
    description: "Showcase your work with this elegant portfolio template",
    thumbnail: "https://placehold.co/600x400?text=Portfolio",
    category: "Personal",
    data: portfolio,
  },
  blog: {
    id: "blog",
    name: "Blog",
    description:
      "Clean blog layout with sidebar, featured posts, and newsletter signup",
    thumbnail: "https://placehold.co/600x400?text=Blog",
    category: "Content",
    data: blog,
  },
};

// Add additional helper functions for templates
export const getTemplateByCategory = (category) => {
  return Object.values(templates).filter(
    (template) => template.category === category,
  );
};

export const getAllCategories = () => {
  const categories = new Set();
  Object.values(templates).forEach((template) => {
    categories.add(template.category);
  });
  return Array.from(categories);
};

export default templates;
