import ThemeContext from "@/lib/contexts/ThemeContext"
import { Theme } from "@/lib/types/theme"
import { useContext } from "react"

export const useTheme = () => useContext(ThemeContext);

export default useTheme;