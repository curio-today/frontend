import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CREDITS } from "@/constants/social-media";
import Link, { LinkProps } from "next/link"
import { ComponentProps, PropsWithChildren } from "react"
import { SocialMedia, SocialMediaIcon as SocialMediaIconType } from "@/types/social-media";
import {
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
    WhatsAppIcon,
    GithubIcon
} from "../content/icons";
import { cn } from "@/lib/utils";


type SocialMediaContact = {
    contact: keyof typeof CREDITS
}

type SocialMediaListProps = {
    socialMedia: Readonly<SocialMedia[]>
} & ComponentProps<"div">

const socialMediaIcon: SocialMediaIconType = {
    "instagram": <InstagramIcon width="24" />,
    "facebook": <FacebookIcon width="24" />,
    "telegram": <TelegramIcon width="24" />,
    "whatsapp": <WhatsAppIcon width="24" />,
    "github": <GithubIcon width="24" />
}

const SocialMediaLink = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
    return (
        <Link target="_blank" className="text-secondary hover:text-primary" {...rest}>
            {children}
        </Link>
    )
}

export const SocialMediaList = ({ socialMedia, className, ...props }: SocialMediaListProps) => {
    return (
        <div className={cn("flex gap-4 flex-row", className)} {...props}>
            {socialMedia.map(({ href, name }) => (
                <SocialMediaLink key={name} href={href}>
                    {socialMediaIcon[name]}
                </SocialMediaLink>
            ))}
        </div>
    )
}

export const SocialMediaHoverCard = ({ contact }: SocialMediaContact) => {
    const { avatar, description, socialMedia } = CREDITS[contact];

    return (
        <HoverCard>
            <HoverCardTrigger>
                <Button className="text-inherit" variant="link">{contact}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={avatar?.src} alt={contact} />
                        <AvatarFallback>{avatar?.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h3 className="text-sm font-medium">{contact}</h3>
                        <h4 className="text-sm text-secondary">{description}</h4>
                    </div>
                </div>
                <SocialMediaList socialMedia={socialMedia} />
            </HoverCardContent>
        </HoverCard>
    )
}