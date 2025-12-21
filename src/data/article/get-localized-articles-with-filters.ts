"server-only"

import { SearchFilters } from "@/types/search-filters";
import { getLocale } from "next-intl/server";
import { getArticles } from "./get-articles";
import { CATEGORY_SLUG_ID_MAP } from "@/constants/categories";
import { sanitizeInput } from "@/lib/sanitize-input";

export async function getLocalizedArticlesWithFilters(searchFilters: SearchFilters) {
  const locale = await getLocale();

  return getArticles({
    locale,
    
    ...(searchFilters.q && {
        "where[title][like]": sanitizeInput(searchFilters.q),
    }),

    ...(searchFilters.category && {
      "where[badge.id][equals]":
        CATEGORY_SLUG_ID_MAP[searchFilters.category],
    }),
  })
}