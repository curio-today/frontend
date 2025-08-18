import styles from "./page.module.css"

import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { getPostBySlug } from "@/lib/api/feed.lib";
import Article from "@/components/ui/Article";



export default async function NewsPage({ params }) {
    const { slug } = await params;
    const postAsset = await getPostBySlug(slug);

    return (
        <Article>
            <Article.Header>
                <Article.Meta>
                    <Article.CreatedAt time={postAsset.createdAt} />
                    <Button icon={{ type: "share" }} />
                </Article.Meta>
                <Article.Headline>
                    {postAsset.title}
                </Article.Headline>
            </Article.Header>
            <Article.Hero>
                <Article.Hero.Image
                    alt={postAsset.cover.alt}
                    src={postAsset.cover.url}
                    quality={100}
                    priority
                />
                <Article.Hero.Source>
                    <Text variant="p">{postAsset.source}</Text>
                </Article.Hero.Source>
            </Article.Hero>
            <Article.Content>
                <Article.Markdown />
            </Article.Content>
            <AdBanner />
            <Article.Delimiter />
            <Article.ReadAlso>
                <PostList headingToSearch={postAsset.badge.name.toLowerCase()} />
            </Article.ReadAlso>
            <Article.Tags>
                {postAsset.tags.map(tag => <Tag {...tag}/> )}
            </Article.Tags>
        </Article>
    );
}