import { useState } from 'react';

export function usePages() {
  const [pages, setPages] = useState([
    { id: 1, name: 'Home', components: [] },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [components, setComponents] = useState([]);

  const addPage = () => {
    const newPage = {
      id: Date.now(),
      name: `Page ${pages.length + 1}`,
      components: [],
    };
    setPages([...pages, newPage]);
    setCurrentPage(newPage);
  };

  const updatePageContent = (updatedPage: any) => {
    setPages(pages.map(page => 
      page.id === updatedPage.id ? updatedPage : page
    ));
    setCurrentPage(updatedPage);
  };

  const addComponent = (component: any) => {
    setComponents([...components, component]);
  };

  const updateComponent = (id: string, content: any) => {
    setComponents(components.map(component =>
      component.id === id ? { ...component, ...content } : component
    ));
  };

  return {
    pages,
    currentPage,
    components,
    setCurrentPage,
    addPage,
    updatePageContent,
    addComponent,
    updateComponent,
  };
}