import { RouteHierarchy } from "../navigation/route-hierarchy";
import { Platform } from "../platform";

export type NavigationConfig = {
    navigationBar: {
        links: string[]
    }
    routes: RouteHierarchy
    platforms?: {
        [platform in Platform]: {
            routes: RouteHierarchy,
        }
    }
}