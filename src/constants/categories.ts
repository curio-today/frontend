import { Category } from "@/types/category";

/**
 * Constant to save a categories
 */
export const CATEGORY_LIST = ["amazes", "informs", "amuses", "inspires"] as const;

/**
 * Because our backend returns a id of category, we have to check it manually to create human-friendly url. Needs to be fix on the backend
 */
export const CATEGORY_ID_SLUG_MAP: Record<string, string> = {
    "68a4285edff1cb31b03d438e": "inspires",
    "68a06acca7da60cbf9116d42": "informs",
    "68a42704dff1cb31b03d40f3": "amazes",
    "68a42852dff1cb31b03d4371": "amuses",
}

export const CATEGORY_PATHNAME_MAP: Record<string, Category> = {
    "/amazes": "amazes",
    "/amuses": "amuses",
    "/inspires": "inspires",
    "/informs": "informs",
}
