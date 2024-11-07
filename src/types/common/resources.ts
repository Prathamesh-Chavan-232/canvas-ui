export interface ComponentType {
  name: string;
  render: () => React.ReactNode;
}

export interface DraggableItem {
  name: string;
  type: string;
  isUIElement?: boolean;
}

export interface Page {
  name: string;
  elements: DraggableItem[];
}

export interface CustomComponent {
  name: string;
  elements: DraggableItem[];
}
