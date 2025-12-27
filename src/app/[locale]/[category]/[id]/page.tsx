import { getArticle } from "@/data/article/get-article";
import { Separator } from "@/components/core/separator";
import { getLocale } from "next-intl/server";
import { ContentRenderer } from "@/components/content/content-renderer";
import { Paragraph } from "@/components/typography/paragraph";
import { ParagraphItalic } from "@/components/typography/paragraph-italic";
import { Time } from "@/components/ui/time";
import { Activity, cache } from "react";
import { Metadata } from "next";
import { ShareButton } from "@/components/ui/share-button";
import { draftMode } from "next/headers";


import {
    Article,
    ArticleMetadata,
    ArticleCover,
    ArticleActions,
    ArticleHead,
    ArticleBadge,
    ArticleHeadline,
    ArticleLead,
    ArticleContent,
    ArticleReadAlso,
} from "@/components/ui/article"
import { ArticlesList } from "@/components/ui/articles-list";
import { CATEGORY_ID_SLUG_MAP } from "@/constants/categories";

const cachedGetArticle = cache(getArticle);

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    const locale = await getLocale();
    const { title, subtitle, cover } = await cachedGetArticle(id, {
        locale,
        limit: 1,
    })


    return {
        title,
        description: subtitle,
        keywords: subtitle,
        openGraph: {
            title,
            description: subtitle,
            images: [
                cover.url
            ]
        }
    }
}


export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const locale = await getLocale();
    const { id } = await params;
    const { isEnabled: isDraftModeEnabled } = await draftMode();
    const { title, subtitle, cover, createdAt, source, badge, content } = await getArticle(id, {
        locale,
        limit: 1,
        draft: isDraftModeEnabled
    });

    return (
        <Article className="article flex flex-col gap-8 overflow-hidden">
            <ArticleMetadata>
                <Time 
                    className="font-thin text-xs align-middle text-center" 
                    iso={createdAt}
                />
                <ArticleBadge 
                    className="bg-primary"
                    id={badge.id} 
                    name={badge.name} 
                    isClickable
                />
                <ArticleActions className="flex flex-1 justify-end items-center">
                    <ShareButton />
                </ArticleActions>
            </ArticleMetadata>
            <ArticleHead>
                <ArticleHeadline>
                    {title}
                </ArticleHeadline>
                <ArticleLead>
                    {subtitle}
                </ArticleLead>
            </ArticleHead>
            <Separator />
            <ArticleCover cover={cover} source={source}/>
            <ArticleContent>
                <ContentRenderer 
                    content={content.root}
                    components={{
                        p: Paragraph,
                        em: ParagraphItalic
                    }}
                />
            </ArticleContent>
            <Separator />
            <ArticleReadAlso>
                <ArticlesList category={CATEGORY_ID_SLUG_MAP[badge.id]} showCategoryHeader={false}/>
            </ArticleReadAlso>
        </Article>
    )
}