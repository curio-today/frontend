import { Theme } from "@/types/theme";


/**
 * Only works on Client Side!
 */
export function loadTheme(): Theme {
    const theme = localStorage.getItem("theme") as Theme;
    
    if (theme) {
        return theme; 
    }

    console.log(`No theme was found. Loading default theme: dark`);
    return "dark";
}

/**
 * Only works on Client Side!
 */
export function saveTheme(newTheme: Theme) {
    localStorage.setItem("theme", newTheme);
}
