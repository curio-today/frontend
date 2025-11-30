import { notFound } from "next/navigation";
import { ArticlesFeed } from "../_components/articles-feed";
import { getTranslations } from "next-intl/server";

const allowed = ["inspires", "amuses", "informs", "amazes"]

type CategoryPageProps = {
    params: Promise<{ category: string }>
}

export default async function Category({ params }: CategoryPageProps) {
    const { category } = await params; 
    if (!allowed.includes(category)) {
        notFound();
    }    
    const t = await getTranslations(`Navigation.${category}`);
    const translatedTitle = t("title");

    return (
        <ArticlesFeed 
            step={4}
            start={8}
            category={translatedTitle} 
        /> 
    );
}