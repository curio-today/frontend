"use client"

import { PropsWithDisabled } from "@/lib/types/ui/disabled-props";
import { PropsWithChildren, useCallback, useState } from "react";

export type CollapsibleProps = {
  summary: string,
  defaultIsOpen?: boolean,
  onOpen: () => void,
  onClose: () => void,
}

/**
 * Collapsible Component
 * 
 * A custom component that mimics the native `<details>` and `<summary>` elements,
 * allowing sections of content to be expanded or collapsed.
 */
export const Collapsible = ({ summary, children, defaultIsOpen = false, disabled = false }: PropsWithChildren<PropsWithDisabled<CollapsibleProps>>) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const toggleCollapsible = useCallback(() => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  }, [disabled]);


  return (
    <details onClick={toggleCollapsible} open={isOpen} aria-expanded={isOpen}>
      <summary>{summary}</summary>
      {isOpen && children}
    </details>
  );
};