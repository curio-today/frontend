import { RouteHierarchy } from "../routes/route-hierarchy";
import { Platform } from "../platform";

export type NavigationConfig = {
    routes: RouteHierarchy
    platforms?: {
        [platform in Platform]: {
            routes: RouteHierarchy,
        }
    }
}