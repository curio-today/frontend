import ThemeContext from "@/contexts/ThemeContext"
import { Theme } from "@/types/theme"
import { useContext } from "react"

export const useTheme = () => useContext(ThemeContext);

export default useTheme;