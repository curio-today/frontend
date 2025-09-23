import { usePathname } from "next/navigation";


/**
 * Custom React hook to get the current pathname without the locale prefix.
 *
 * This is especially useful in projects using `next-intl` or similar
 * internationalization strategies where routes are automatically
 * prefixed with a two-letter language code (e.g. `/en/blog`, `/fr/about`).
 *
 * Behavior:
 * - If the first segment of the pathname is a 2-character code (e.g. `en`, `fr`),
 *   it will be stripped out.
 * - If there is no locale prefix, the full path will be returned as-is.
 * - The returned path never has a leading slash.
 *
 * @returns {string} The normalized pathname without the leading locale segment.
 *
 * @example
 * // Current URL: "/en/blog/article"
 * const path = useCleanPathname();
 * console.log(path); // "blog/article"
 *
 * @example
 * // Current URL: "/about"
 * const path = useCleanPathname();
 * console.log(path); // "about"
 *
 * @see {@link https://next-intl-docs.vercel.app} for details about `next-intl` routing.
 * @see {@link https://nextjs.org/docs/app/api-reference/functions/use-pathname} for Next.js `usePathname`.
 */
export function useCleanPathname(): string {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  
  if (segments[0]?.length === 2) {
    segments.shift();
  }

  return segments.join("/");
};

export default useCleanPathname;
