import React from "react";
import { Element, useEditor } from "@craftjs/core";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  CraftButton,
  CraftInput,
  CraftTextarea,
  CraftCard,
  Container,
  Heading,
  Paragraph,
} from "../Editor";
import { ComponentItemProps } from "../editorTypes";

interface PanelHeadingProps {
  title: string;
}

export const PanelHeading: React.FC<PanelHeadingProps> = ({ title }) => {
  return (
    <div className="h-14 border-b flex items-center justify-between px-4">
      <h2 className="font-medium">{title}</h2>
    </div>
  );
};

const ComponentItem: React.FC<ComponentItemProps> = ({
  title,
  icon,
  component,
}) => {
  const { connectors } = useEditor();

  return (
    <div
      ref={(ref) => ref && connectors.create(ref, component)}
      className="flex items-center p-2 border rounded-md hover:border-primary cursor-move mb-2 bg-background"
    >
      <div className="mr-2 text-muted-foreground">{icon}</div>
      <div className="text-sm">{title}</div>
    </div>
  );
};

export const ComponentsPanel: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-background">
      <PanelHeading title="Components" />
      <ScrollArea className="flex-1">
        <div className="p-4">
          <Accordion type="single" collapsible defaultValue="basics">
            <AccordionItem value="basics">
              <AccordionTrigger className="text-sm font-medium">
                Basic Elements
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <ComponentItem
                  title="Button"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="10" x="3" y="7" rx="2" />
                    </svg>
                  }
                  component={<Element is={CraftButton} text="Button" />}
                />
                <ComponentItem
                  title="Input"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="8" x="3" y="8" rx="2" />
                    </svg>
                  }
                  component={
                    <Element is={CraftInput} placeholder="Input placeholder" />
                  }
                />
                <ComponentItem
                  title="Textarea"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="12" x="3" y="6" rx="2" />
                    </svg>
                  }
                  component={
                    <Element
                      is={CraftTextarea}
                      placeholder="Textarea placeholder"
                    />
                  }
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="layout">
              <AccordionTrigger className="text-sm font-medium">
                Layout
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <ComponentItem
                  title="Container"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                    </svg>
                  }
                  component={<Element canvas is={Container} />}
                />
                <ComponentItem
                  title="Card"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="14" x="3" y="5" rx="2" />
                    </svg>
                  }
                  component={
                    <Element canvas is={CraftCard} title="Card Title">
                      <div>Card content</div>
                    </Element>
                  }
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="text">
              <AccordionTrigger className="text-sm font-medium">
                Typography
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <ComponentItem
                  title="Heading (H1)"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 12h12" />
                      <path d="M6 20V4" />
                      <path d="M18 20V4" />
                    </svg>
                  }
                  component={<Element is={Heading} text="Heading" level={1} />}
                />
                <ComponentItem
                  title="Heading (H2)"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 12h12" />
                      <path d="M6 20V4" />
                      <path d="M18 20V4" />
                    </svg>
                  }
                  component={<Element is={Heading} text="Heading" level={2} />}
                />
                <ComponentItem
                  title="Paragraph"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="17" x2="7" y1="10" y2="10" />
                      <line x1="18" x2="6" y1="14" y2="14" />
                      <line x1="15" x2="9" y1="18" y2="18" />
                    </svg>
                  }
                  component={
                    <Element
                      is={Paragraph}
                      text="This is a paragraph of text. Edit it to add your own content."
                    />
                  }
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sections">
              <AccordionTrigger className="text-sm font-medium">
                Pre-made Sections
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <ComponentItem
                  title="Hero Section"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }
                  component={
                    <Element canvas is={Container}>
                      <Element
                        is={Heading}
                        text="Welcome to our Website"
                        level={1}
                      />
                      <Element
                        is={Paragraph}
                        text="This is a hero section for your website. Add a description about your product or service here."
                      />
                      <Element is={CraftButton} text="Get Started" />
                    </Element>
                  }
                />
                <ComponentItem
                  title="Features Section"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    </svg>
                  }
                  component={
                    <Element canvas is={Container}>
                      <Element is={Heading} text="Features" level={2} />
                      <Element
                        is={Paragraph}
                        text="Discover the amazing features of our product."
                      />
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <Element canvas is={CraftCard} title="Feature 1">
                          <Element
                            is={Paragraph}
                            text="Description of feature 1."
                          />
                        </Element>
                        <Element canvas is={CraftCard} title="Feature 2">
                          <Element
                            is={Paragraph}
                            text="Description of feature 2."
                          />
                        </Element>
                      </div>
                    </Element>
                  }
                />
                <ComponentItem
                  title="Contact Form"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  }
                  component={
                    <Element canvas is={Container}>
                      <Element is={Heading} text="Contact Us" level={2} />
                      <Element
                        is={Paragraph}
                        text="Get in touch with our team."
                      />
                      <div className="space-y-4 mt-4">
                        <Element is={CraftInput} placeholder="Your Name" />
                        <Element is={CraftInput} placeholder="Your Email" />
                        <Element
                          is={CraftTextarea}
                          placeholder="Your Message"
                        />
                        <Element is={CraftButton} text="Send Message" />
                      </div>
                    </Element>
                  }
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ComponentsPanel;
