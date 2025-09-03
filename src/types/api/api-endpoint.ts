import { ApiPath } from "./api-path";

export type ApiEndpoint = {
    path: ApiPath 
    method: "GET" | "POST" | "PUT" | "DELETE";
}