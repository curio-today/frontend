import { Heading } from "@/shared/data.types";
import { Endpoint } from "@/shared/network";

/**
 * @deprecated
 */
export function getArticleUrl({ heading, slug }:{ heading: Heading, slug: string }): string {
    return `/feed/${heading}/${slug}`
}


/**
 * @deprecated
 */
export function getAdmin(): (endpoint: Endpoint) => string {
    return (endpoint: Endpoint) => (`https://admin.curio.today${endpoint}`)
}