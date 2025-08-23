import { Heading } from "@/shared/data.types";
import { Endpoint } from "@/shared/network";

export function getArticleUrl({ heading, slug }:{ heading: Heading, slug: string }): string {
    return `/feed/${heading}/${slug}`
}

export function getAdmin(): (endpoint: Endpoint) => string {
    return (endpoint: Endpoint) => (`https://admin.curio.today${endpoint}`)
}