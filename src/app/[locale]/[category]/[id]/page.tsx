import { getArticle } from "@/data/article/get-article";
import { Separator } from "@/components/core/separator";
import { getLocale } from "next-intl/server";
import { ArticleCover } from "./_components/article-cover";
import { CategoryBadge } from "./_components/category-badge";
import { Lead } from "./_components/lead";
import { Headline } from "./_components/headline";
import { ContentRenderer } from "@/components/content/content-renderer";
import { Paragraph } from "@/components/typography/paragraph";
import { ParagraphItalic } from "@/components/typography/paragraph-italic";
import { Time } from "@/components/ui/time";
import { cache } from "react";
import { Metadata } from "next";
import { ShareButton } from "@/components/ui/share-button";

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
    const { title, subtitle, cover, createdAt, source, badge, content } = await cachedGetArticle(id, {
        locale,
        limit: 1
    });



    return (
    <section className="article flex flex-col gap-8 overflow-hidden">
            <div className="metadata flex flex-row gap-4 align-middle justify-start items-center text-center">
                    <Time 
                        className="font-thin text-xs align-middle text-center" 
                        iso={createdAt}
                        locale={locale}
                    />
                    <CategoryBadge badge={badge} />
                <div className="flex flex-1 justify-end items-center">
                    <ShareButton />
                </div>

            </div>
            <div className="container flex flex-col gap-4">
                <Headline>
                    {title}
                </Headline>
                <Lead>
                    {subtitle}
                </Lead>
            </div>
            <Separator />
            <ArticleCover cover={cover} source={source}/>
            <article className="prose prose-base md:prose-lg max-w-none [&>p:first-of-type]:text-xl [&>p:first-of-type]:md:text-2xl [&>p:first-of-type]:lg:text-3xl">
                <ContentRenderer 
                    content={content.root}
                    components={{
                        p: Paragraph,
                        em: ParagraphItalic
                    }}
                />
            </article>
        </section>
    )
}