type QueryParamsName = "limit" | "page" | "locale" | "slug" | "_status" | "heading" | (string & {});

export type QueryParams = {
    [Q in QueryParamsName]: string;
}