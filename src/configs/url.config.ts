import { Heading } from "@/shared/data.types";

export function getHeadingUrl(heading: Heading, url: string): string {
    return `/${heading}/${url}`
}

