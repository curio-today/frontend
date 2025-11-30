/**
 * Because our backend returns a id of category, we have to check it manually to create human-friendly url. Needs to be fix on the backend
 */
export const categoryIdSlugMap: Record<string, string> = {
    "68a4285edff1cb31b03d438e": "inspires",
    "68a06acca7da60cbf9116d42": "informs",
    "68a42704dff1cb31b03d40f3": "amazes",
    "68a42852dff1cb31b03d4371": "amuses",
}

export default categoryIdSlugMap;