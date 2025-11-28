"use client";

import { PropsWithChildren, useTransition } from "react";
import { setWidePreference } from "@/actions/set-wide-preference";
import { LayoutContext } from "@/contexts/layout-context";

export function LayoutProviderClient({ children, isWide }: PropsWithChildren<{ isWide: boolean }>) {
  const [pending, startTransition] = useTransition();

  const toggleWide = () => {
    startTransition(() => {
      setWidePreference(!isWide);
    });
  };

  return (
    <LayoutContext.Provider value={{ isWide, toggleWide }}>
      {children}
    </LayoutContext.Provider>
  );
}
