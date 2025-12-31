import { Button } from "../core/button";
import { 
    Avatar,
    AvatarFallback,
    AvatarImage, 
} from "../core/avatar";
import { 
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
 } from "../core/hover-card";
import { SocialMediaList } from "./social";
import { SocialMediaData } from "@/types/social-media-data";

type CreditsProps = {
    name: string,
    description: string,
    socialMediaData: SocialMediaData[],
};

export const Credits = ({ name, description, socialMediaData }: CreditsProps) => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <Button className="text-secondary" variant="link">{name}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://" alt={name}/>
                        <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h3 className="text-sm font-medium">{name}</h3>
                        <h4 className="text-sm text-secondary">{description}</h4>
                    </div>
                </div>
                <SocialMediaList data={socialMediaData}/>
            </HoverCardContent>
        </HoverCard>
    )
}