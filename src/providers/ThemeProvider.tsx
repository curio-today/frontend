"use client"

import ThemeContext from "@/contexts/ThemeContext";
import { Theme } from "@/types/theme";
import { loadTheme, saveTheme } from "@/utils/storage/theme";
import { ThemeConfig } from "@@/theme.config";
import { PropsWithChildren, useEffect, useState } from "react";


export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(ThemeConfig.defaultTheme);

  useEffect(() => {
    const initialTheme = loadTheme();
    
    if (initialTheme !== "dark") {
      setTheme(initialTheme);
      saveTheme(initialTheme);
      // Magic trick to make Tailwind CS see that we've changed theme.
      document.documentElement.classList.add(initialTheme);

      // TODO: Rerender a page after changing theme
    }

  }, [setTheme])


  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
    </ThemeContext.Provider>
  )
};