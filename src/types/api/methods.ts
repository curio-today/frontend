import { ApiConfig } from "../configs"
import ApiEndpoint from "./endpoint"

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE"
export type EndpointViewMethod = keyof ApiEndpoint;
