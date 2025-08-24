import Button from "@/components/ui/Button";
import Article from "@/components/ui/Article";
import RenderContent from "@/components/RenderContent";

import { ArticlePageProps } from "./page.types";
import { getArticle } from "@/lib/api/feed.lib";


export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug, locale} = await params;
    const postAsset = await getArticle({
        locale,
        slug: slug,
        limit: 1
    });

    console.log("postAsset", postAsset);

    const date = new Date(postAsset.createdAt);

    postAsset.createdAt = date.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });



    return (
        <Article>
            <Article.Header>
                <Article.Meta>
                    <Article.CreatedAt timeStamp={postAsset.createdAt} />
                    <Button icon={{ type: "share" }} mode="noBorder"/>
                </Article.Meta>
                <Article.Headline headline={postAsset.title} />
                <Article.Subtitle subtitle={postAsset.subtitle} />
            </Article.Header>
            <Article.Hero>
                <Article.Hero.Image
                    loading="lazy"
                    focalX={postAsset.cover?.focalX}
                    focalY={postAsset.cover?.focalY}
                    alt={postAsset.cover?.alt}
                    src={postAsset.cover?.url}
                    quality={100}
                />
                <Article.Hero.Caption>
                    <Article.Hero.Image.Source source={postAsset.source} />
                </Article.Hero.Caption>
            </Article.Hero>
            <Article.Content>
                <RenderContent content={postAsset.content} />
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