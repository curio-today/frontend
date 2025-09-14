import NotStartingWithSlash from "../generics/not-starting-with-slash";

/**
 * Represents a API endpoint.
 *
 * @typedef {Object} ApiEndpoint
 * @property {string} list - The endpoint URL for view list of the resource.
 * @property {(id: string) => string} detail - A function that generates the endpoint URL for a specific resource by its ID.
 */
export type ApiEndpoint = {
    list: string;
    detail: (id: string) => string;
}

export default ApiEndpoint;