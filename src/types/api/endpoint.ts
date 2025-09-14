import NotStartingWithSlash from "../generics/not-starting-with-slash";

export type ApiEndpoint = {
    list: string;
    detail: (id: string) => string;
}

export default ApiEndpoint;