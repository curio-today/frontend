import { SOCIAL_MEDIA_DATA } from "@/constants/social-media"
import { SocialMediaData } from "@/types/social-media-data"
import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"

export const SocialMediaList = ({ data = SOCIAL_MEDIA_DATA }: { data?: SocialMediaData[] }) => {
    return (
        <div className="flex flex-row gap-4">
            {data.map(({ href, icon, name }) => (
                <SocialMediaItem key={name} href={href}>
                    {icon}
                </SocialMediaItem>    
            ))}
        </div>
    )
}

const SocialMediaItem = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
    return (
        <Link target="_blank" className="text-secondary hover:text-primary" {...rest}>
            {children}
        </Link>
    )
}