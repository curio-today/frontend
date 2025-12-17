"use client"

import { 
  useState, 
  useCallback, 
  useEffect, 
  useRef, 
  Dispatch, 
  SetStateAction, 
  KeyboardEvent
} from "react"
import { useRouter, useSearchParams } from "next/navigation"

/**
 * Options for the `useSearch` hook.
 */
interface UseSearchOptions {
  /**
   * Debounce delay in milliseconds before automatically submitting
   * the search when the query changes.
   *
   * @default 0
   */
  debounceMs?: number;
}

/**
 * Return type for the `useSearch` hook.
 */
interface UseSearchReturn {
  /**
   * Current search query value.
   */
  query: string;

  /**
   * State setter for updating the search query.
   */
  setQuery: Dispatch<SetStateAction<string>>;

  /**
   * Immediately submits the current search query by updating
   * the URL search parameters.
   */
  submitSearch: () => void;

  /**
   * Keyboard event handler intended for search inputs.
   * Submits the search when the Enter key is pressed.
   */
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => unknown;
}

/**
 * React hook for managing search query state synchronized with
 * URL search parameters.
 *
 * Features:
 * - Initializes the query from the `q` URL parameter
 * - Updates the URL when a search is submitted
 * - Optional debounced auto-submit behavior
 * - Manual submit support via Enter key
 *
 * @param {UseSearchOptions} options Configuration options
 * @param {number} [options.debounceMs=0]
 * Time in milliseconds to debounce automatic search submission.
 * If set to `0`, debouncing is disabled.
 *
 * @returns {UseSearchReturn} Search state and helper functions
 *
 * @example
 * const { query, setQuery, onKeyDown } = useSearch({ debounceMs: 300 });
 *
 * <input
 *   value={query}
 *   onChange={e => setQuery(e.target.value)}
 *   onKeyDown={onKeyDown}
 * />
 */
export function useSearch({ debounceMs = 0 }: UseSearchOptions): UseSearchReturn {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") ?? ""
  const [query, setQuery] = useState(initialQuery)
  const debounceRef = useRef<number | undefined>(undefined)

  const submitSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const value = query.trim()

    if (!value) {
      params.delete("q")
    } else {
      params.set("q", value)
    }

    router.push(`/search?${params.toString()}`)
  }, [query, router, searchParams])

  useEffect(() => {
    if (debounceMs <= 0) return
    if (!query.trim()) return

    window.clearTimeout(debounceRef.current)
    debounceRef.current = window.setTimeout(() => {
      submitSearch()
    }, debounceMs)

    return () => window.clearTimeout(debounceRef.current)
  }, [query, debounceMs, submitSearch])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        window.clearTimeout(debounceRef.current) 
        submitSearch()
      }
    },
    [submitSearch]
  )

  return {
    query,
    setQuery,
    submitSearch,
    onKeyDown,
  }
}
