import { AvailableRoutePath } from "@/lib/types/navigation";
import useCleanPathname from "./use-clean-pathname";
import { getRoute } from "@/lib/utils/navigation";

type ReturnParams = {
    path: AvailableRoutePath,
    route: ReturnType<typeof getRoute>,
}


/**
 * Custom React hook to get the current normalized route.
 *
 * Combines the cleaned pathname (without language prefix) with the
 * route configuration, returning both in a single object.
 *
 * Behavior:
 * - Uses `useCleanPathname` to strip locale prefixes (e.g. `/en`, `/fr`).
 * - Casts the result to `AvailableRoutePath` to ensure only valid routes are used.
 * - Resolves the corresponding route configuration using `getRoute`.
 *
 * @returns {ReturnParams} An object containing:
 * - `path` {AvailableRoutePath} – the current path without locale prefix.
 * - `route` {RouteConfig} – the matched route configuration for the given path.
 *
 * @example
 * // If the current URL is "/en/blog/article":
 * const { path, route } = useCurrentRoute();
 * console.log(path); // "blog/article"
 * console.log(route); // e.g. { name: "BlogArticle", layout: "default", ... }
 *
 * @see useCleanPathname – for stripping locale prefixes from the path.
 * @see getRoute – for mapping a path to a route configuration.
 */
export function useCurrentRoute(): ReturnParams {
  const pathname = useCleanPathname() as AvailableRoutePath;

  return {
    path: pathname,
    route: getRoute(pathname),
  };
}