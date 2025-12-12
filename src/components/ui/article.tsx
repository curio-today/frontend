import { ComponentProps, Fragment, PropsWithChildren } from "react"
import type { Article as ArticleType } from "@/types/api/article";
import { ImageWithFocal } from "@/components/ui/image-with-focal";
import { Badge } from "@/components/core/badge";
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";
import { BadgeInfoIcon } from "lucide-react";
import Link from "next/link";


export const Article = ({ children, ...rest }: ComponentProps<"section"> ) => {
    return (
        <section className="article flex flex-col gap-8 overflow-hidden" {...rest}>
            {children}
        </section>        
    )
}    

export const ArticleActions = ({ children, ...rest }: ComponentProps<"div">) => {
    return (
        <div className="metadata flex flex-row gap-4 align-middle justify-start items-center text-center" {...rest}>
            {children}            
        </div>        
    )
}    

export const ArticleMetadata = ({ children, ...rest }: ComponentProps<"div">) => {
    return (
        <div className="metadata flex flex-row gap-4 align-middle justify-start items-center text-center" {...rest}>
            {children}            
        </div>        
    )
}    


export const ArticleCover = ({ cover, source }: { cover: ArticleType["cover"], source: ArticleType["source"] }) => {
    return (
        <section className="hero flex flex-col justify-center gap-2">
            <figure className="relative w-full h-100 md:h-150 lg:h-200">
                <ImageWithFocal
                    className="rounded-md" 
                    src={cover.url} 
                    alt={cover.alt} 
                    focalX={cover.focalX}
                    focalY={cover.focalY} 
                    fill        
                />
            </figure>
            <figcaption>
                <p className="text-secondary text-center">{source}</p>
            </figcaption>
        </section>        
    )
}    


export type ArticleBadgeProps = {
    id: ArticleType["badge"]["id"],
    name: ArticleType["badge"]["name"],
    isClickable?: boolean,
} & ComponentProps<typeof Badge>;
 
export const ArticleBadge = ({ name, id, isClickable = false, ...rest }: ArticleBadgeProps) => {
    return (
        <Badge 
            variant="secondary"
            asChild={isClickable}
            {...rest}
        >
            {isClickable ? (
                <Link href={`/${CATEGORY_ID_SLUG_MAP[id]}`}>
                    <BadgeInfoIcon />
                    {name}
                </Link>
            ) : (
                <>
                    <BadgeInfoIcon />
                    {name}
                </>
            )}
        </Badge>
    )
}

export const ArticleHead = ({ children, ...rest }: ComponentProps<"div">) => {
    return (
        <div className="container flex flex-col gap-4" {...rest}>
            {children}
        </div>
    )
}

export const ArticleHeadline = ({ children }: PropsWithChildren) => {
    return <h1 className="title font-bold text-2xl md:text-4xl lg:text-6xl">{children}</h1>
}

export const ArticleLead = ({ children }: PropsWithChildren) => {
    return <h3 className="description text-md md:text-xl lg:text-2xl text-blue-400">{children}</h3>;
}

export const ArticleContent = ({ children, ...rest }: ComponentProps<"article">) => {
    return (    
        <article className="prose prose-base md:prose-lg max-w-none [&>p:first-of-type]:text-xl [&>p:first-of-type]:md:text-2xl [&>p:first-of-type]:lg:text-3xl" {...rest}>
            {children}
        </article>
    )
}