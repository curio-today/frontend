import { ViewDetail, ViewList } from "@/types/api/views";

export function resolveEndpoint(endpoint: ViewDetail | ViewList, possibleId: string): string {
    if (typeof endpoint === "function") {
        return endpoint();
    }
    return endpoint;

}