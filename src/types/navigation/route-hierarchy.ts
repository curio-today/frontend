import { Route } from "./route"

export type RouteHierarchy = {
    [name: string]: RouteHierarchy | Route
}
