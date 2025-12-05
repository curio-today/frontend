import { fetchArticle } from "@/data/article/fetch-article";
import { Separator } from "@/components/core/separator";
import { getLocale } from "next-intl/server";
import { ArticleCover } from "./_components/article-cover";
import { CategoryBadge } from "./_components/category-badge";
import { Lead } from "./_components/lead";
import { Headline } from "./_components/headline";
import { ContentRenderer } from "@/components/content/content-renderer";
import { Paragraph } from "@/components/typography/paragraph";




export default async function ArticlePage({ params }: { params: Promise<{ id: string}> }) {
    const locale = await getLocale();
    const { id } = await params;
    const { title, subtitle, cover, createdAt, source, badge, content } = await fetchArticle(id, {
        locale,
        limit: 1
    });

    function formateDate(iso: string): string {
        return new Intl.DateTimeFormat(locale, {
            dateStyle: "full",
            timeStyle: "short"
        }).format(new Date(iso)).toUpperCase()
    }

    return (
        <section className="article flex flex-col gap-12">
            <div className="metadata flex flex-row gap-4 align-middle justify-start text-center">
                <time className="font-thin text-sm align-middle text-center">{formateDate(createdAt)}</time>
                <CategoryBadge badge={badge} />
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
            <ContentRenderer 
                content={content.root}
                components={{
                    p: Paragraph,
                    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>
                }}
            
            />
        </section>
    )
}