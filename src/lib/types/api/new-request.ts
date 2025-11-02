import { QueryParams } from "./query-params";
import { ApiEndpoint } from "./endpoint";
import { RequestMethod } from "./methods";

export type ApiRequest = {
    endpoint: ApiEndpoint;
    method: RequestMethod;
    query: QueryParams;
}

export default ApiRequest;