import { baseComponents } from "../Components";

interface IgenerateCodeProps {
  elements: { type: string }[];
  componentName: string;
}

export const generateComponentCode = ({
  elements,
  componentName,
}: IgenerateCodeProps) => {
  const imports = new Set();
  elements.forEach((el) => {
    if (el) {
      imports.add(baseComponents[el.type].name);
    }
  });

  return `
        import React from 'react'
        import { ${Array.from(imports).join(", ")} } from "@/components/ui"

        export default function ${componentName}() {
        return (
                <div>
                    ${elements
                      .filter((el) => el)
                      .map(
                        (el) =>
                          `<${el.type}>${el.type === "Input" || el.type === "Textarea" ? "" : el.type}</${el.type}>`,
                      )
                      .join("\n      ")}
                </div>
            )
        }
        `;
};
