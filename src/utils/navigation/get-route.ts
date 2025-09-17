import { Navigation } from "@/configs/navigation";
import { AvailableRoutePath, Route, RouteHierarchy } from "@/types/navigation";
    
/**
 * Resolves a route object from the navigation config based on a given path.
 *
 * The path can reference either a parent route (returning a `RouteHierarchy`)
 * or a child route (returning a `Route`). If any part of the path does not
 * exist, the function returns `undefined`.
 *
 * @example
 * // Given NavigationConfig:
 * // {
 * //   routes: {
 * //     example: {
 * //       child: { icon: "wow" }
 * //     }
 * //   }
 * // }
 *
 * getRoute("example");
 * // => { child: { icon: "wow" } } (RouteHierarchy)
 *
 * getRoute("example/child");
 * // => { icon: "wow" } (Route)
 *
 * @param path - Absolute route path, from parent to child.
 * @returns The resolved route hierarchy or route, or `undefined` if not found.
 */
export function getRoute(path: AvailableRoutePath): RouteHierarchy | Route | undefined {
  const parts = path.split("/");
  let current: RouteHierarchy | Route = Navigation.routes;

  for (const part of parts) {
    if (isRouteHierarchy(current) && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return current;
}

function isRouteHierarchy(value: RouteHierarchy | Route): value is RouteHierarchy {
  return !("icon" in value);
}
