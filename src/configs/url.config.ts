import { Heading } from "@/shared/data.types";
import { Endpoint } from "@/shared/network";

export function getHeadingUrl(heading: Heading, url: string): string {
    return `/${heading}/${url}`
}

export function getAdmin(): (endpoint: Endpoint) => string {
    return (endpoint: Endpoint) => (`https://admin.curio.today${endpoint}`)
}