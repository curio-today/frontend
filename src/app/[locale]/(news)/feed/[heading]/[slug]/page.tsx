import Button from "@/components/ui/Button";
import Article from "@/components/ui/Article";
import RenderContent from "@/components/RenderContent";
import { Metadata } from "next";
import { getArticle } from "@/lib/api/feed.lib";
import { formatArticleDateWithLocale } from "@/lib/formater.lib";
import MetadataConfig from "@/configs/metadata.config";
import { getAuthors } from "@/helpers/authors";
import ShareButton from "@/components/ui/ShareButton";

export type ArticlePageProps = {
    params: Promise<{
        slug: string;
        heading: string;
        locale: string;
    }>;
}

export async function generateMetadata({ params }: ArticlePageProps ): Promise<Metadata> {
    const { slug, locale } = await params;
    const article = await getArticle({
        locale,
        slug: slug,
        limit: 1
    });

    return {
        title: article.title,
        description: article.subtitle,
        authors: getAuthors(), 
        creator: "Alexander Shunin",
        publisher: MetadataConfig.siteName,
        keywords: [""],
        openGraph: {
            title: article.title,
            description: article.subtitle,
            url: `https://curio.today/${locale}/feed/${article.badge.name.toLowerCase()}/${slug}`,
            siteName: MetadataConfig.siteName,
            images: [
                {
                    url: article.cover?.url,
                    width: 1200,
                    height: 630,
                    alt: article.cover?.alt
                }
            ],
            locale,
            type: "article"
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
        },
    }
}


export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug, locale } = await params;
    const article = await getArticle({
        locale,
        slug: slug,
        limit: 1
    });

    formatArticleDateWithLocale({ 
        article,
        locale
     })

    return (
        <Article>
            <Article.Header>
                <Article.Meta>
                    <Article.CreatedAt timeStamp={article.createdAt} />
                    <ShareButton urlToCopy={`https://curio.today/${locale}/feed/${article.badge.name.toLowerCase()}/${slug}`}/>
                </Article.Meta>
                <Article.Headline headline={article.title} />
                <Article.Subtitle subtitle={article.subtitle} />
            </Article.Header>
            <Article.Hero>
                <Article.Hero.Image
                    loading="lazy"
                    focalX={article.cover?.focalX}
                    focalY={article.cover?.focalY}
                    alt={article.cover?.alt}
                    src={article.cover?.url}
                    quality={100}

                    width={1200}
                    height={600}
                />
                <Article.Hero.Caption>
                    <Article.Hero.Image.Source source={article.source} />
                </Article.Hero.Caption>
            </Article.Hero>
            <Article.Content>
                <RenderContent content={article.content} />
            </Article.Content>
            {/*<AdBanner />*/}
            {/*<Article.Delimiter />*/}
            {/*<Article.ReadAlso>*/}
            {/*    <PostList headingToSearch={postAsset.badge.name.toLowerCase()} />*/}
            {/*</Article.ReadAlso>*/}
            {/*<Article.Tags>*/}
            {/*    {postAsset.tags.map(tag => <Tag {...tag}/> )}*/}
            {/*</Article.Tags>*/}
        </Article>
    );
}