import { ApiEndpoint } from "./endpoint";

/**
 * @deprecated use ApiRequest from "./new-request.ts" instead.
 */
export type ApiRequest = {
    endpoint: ApiEndpoint,
    method: "GET" | "POST" | "PUT" | "DELETE",
}