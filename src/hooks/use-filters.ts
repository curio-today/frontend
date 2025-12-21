import { Category } from "@/types/category"
import { SearchFilters } from "@/types/search-filters"
import { useSearchParams, useRouter } from "next/navigation"

export function useFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const filters: SearchFilters = {
    q: searchParams.get("q") ?? undefined,
    category: (searchParams.get("category") as Category) ?? undefined,
  }

  const setFilter = (key: keyof SearchFilters, value?: string) => {
    const params = new URLSearchParams(searchParams)

    if (!value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }

    router.push(`?${params.toString()}`)
  }

  return { filters, setFilter }
}
