import { Api } from "@@/api.config";
import { QueryParams } from "@/lib/types/api/query-params";
import Primitive from "@/lib/types/api/primitive";

export const stringifyQuery = (queryParams: QueryParams): string => {
  return (Object.entries(queryParams) as [keyof typeof Api.query.stringfier, Primitive][])
    .map(([key, value]) =>Api.query.stringfier[key]?.(value))
    .join("&");
};

export default stringifyQuery;