import { ComponentProps } from "react";

export const Paragraph = ({ children, ...props }: ComponentProps<"p">) => (
  <p className="my-4 leading-relaxed text-xl" {...props}>
    {children}
  </p>
);