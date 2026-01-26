import { ReactNode } from "react"

export type SocialMediaName = "instagram" | "facebook" | "telegram" | "whatsapp" | "github" | "linkedin"

export type SocialMediaIcon = {
    [name in SocialMediaName]: ReactNode
}

export type SocialMedia = {
    name: SocialMediaName,
    href: string,
}