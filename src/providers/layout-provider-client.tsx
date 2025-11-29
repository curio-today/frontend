"use client";

import { PropsWithChildren } from "react";
import { LayoutContext } from "@/contexts/layout-context";

export function LayoutProviderClient({ children, isWide }: PropsWithChildren<{ isWide: boolean }>) {
  return (
    <LayoutContext.Provider value={{ isWide }}>
      {children}
    </LayoutContext.Provider>
  );
}
