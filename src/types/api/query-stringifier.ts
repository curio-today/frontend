/**
 * A mapping of query parameter keys to functions that convert their values to strings.
 *
 * Each key in `QueryParams` corresponds to a function that accepts a value
 * (`string`, `number`, or `boolean`) and returns a string representation
 * suitable for use in a URL query string.
 *
 * @template QueryParams - The set of keys representing the query parameters.
 *
 * @example ApiConfig example 
 * @see ApiConfig
 *      ...
        query: {
            stringfier: {
                limit: (value) => `limit=${value}`,
                locale: (value) => `locale=${value}`,
                page: (value) => `page=${value}`,
                slug: (value) => `where[slug][equals]=${value}`,
                _status: (value) => `where[_status][equals]=${value}`,
                heading: (value) => `where[heading][equals]=${value}`
            }
        }
 */
export type QueryStringifier = {
    [K: string]: (value: string | number | boolean) => string;
}