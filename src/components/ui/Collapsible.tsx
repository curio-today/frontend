"use client"

import { PropsWithDisabled } from "@/types/ui/disabled-props";
import { KeyboardEvent, PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "./buttons";

export type CollapsibleProps = {
  label?: ButtonProps["label"],
  icon?: ButtonProps["icon"],

  defaultIsOpen?: boolean,
  onOpen: () => void,
  onClose: () => void,
}

export const Collapsible = ({ label, children, defaultIsOpen = false, disabled = false }: PropsWithChildren<PropsWithDisabled<CollapsibleProps>>) => {
 
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const toggleCollapsible = useCallback(() => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  }, [disabled]);


  return (
    <details className="collapsible" onClick={toggleCollapsible} open={isOpen}>
      <summary>{label}</summary>
      {isOpen && children}
    </details>
  );
};