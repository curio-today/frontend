"use client"

import ThemeContext from "@/contexts/ThemeContext";
import { Theme } from "@/lib/types/theme";
import { loadTheme, saveTheme } from "@/lib/utils/storage/theme";
import { ThemeConfig } from "@@/theme.config";
import { PropsWithChildren, useEffect, useState } from "react";


export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, applyTheme] = useState<Theme>(ThemeConfig.defaultTheme);

  useEffect(() => {
    const savedTheme = loadTheme();
    applyTheme(savedTheme);
  }, [])

  useEffect(() => {
    const rootClassList = document.documentElement.classList;
    const opposite = theme === "dark" ? "light" : "dark";

    rootClassList.remove(opposite);
    rootClassList.add(theme);

    saveTheme(theme);
  }, [theme])


  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
    </ThemeContext.Provider>
  )
};