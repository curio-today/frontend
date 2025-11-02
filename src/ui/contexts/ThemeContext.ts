import { Theme } from "@/lib/types/theme";
import { ThemeConfig } from "@@/theme.config";
import { createContext } from "react";

export const ThemeContext = createContext<[Theme, () => void]>([
    ThemeConfig.defaultTheme,
    () => {},
]);

export default ThemeContext;