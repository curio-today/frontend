import { Api } from "@@/api.config";
import { QueryParams } from "@/types/api/query-params";

export const stringifyQuery = (queryParams: QueryParams): string => {
  return (Object.entries(queryParams) as [keyof typeof Api.query.stringfier, string | number | boolean][])
    .map(([key, value]) => Api.query.stringfier[key]?.(value))
    .join("&");
};

export default stringifyQuery;