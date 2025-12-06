import { notFound } from "next/navigation";
import { ArticlesFeed } from "../_components/articles-feed";
import { getTranslations } from "next-intl/server";
import { CATEGORY_LIST } from "@/constants/categories";
import type { Category } from "@/types/category";
import { getMetadata } from "@/data/metadata/get-metadata";
import { Metadata } from "next";


export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category } = await params;

    return getMetadata(category);
}


type CategoryPageProps = {
    params: Promise<{ category: string }>
}

export default async function Category({ params }: CategoryPageProps) {
    const { category } = await params; 
    
    if (!CATEGORY_LIST.includes(category as Category)) {
        notFound();
    }    
    
    const t = await getTranslations(`Navigation.${category}`);
    const translatedCategory = t("title");

    return (
        <div className="flex justify-start flex-col">
            <h1 className="font-bold text-sm text-secondary text-center">{translatedCategory}</h1>
            <ArticlesFeed 
                category={translatedCategory} 
                start={8}
                step={4}
            /> 
        </div>

    );
}