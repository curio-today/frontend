import { ComponentProps } from "react";

export const ParagraphItalic = ({ children, ...props }: ComponentProps<"p">) => (
  <em className="text-blue-400" {...props}>
    {children}
  </em>
);