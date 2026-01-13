import { notFound } from "next/navigation";
import { CATEGORY_LIST } from "@/constants/categories";
import type { Category } from "@/types/category";
import { getMetadata } from "@/lib/get-metadata";
import { Metadata } from "next";
import { getCategoryTranslation } from "@/lib/get-category-translation";
import {ArticlesFeed} from "../_components/articles-feed";
import { Separator } from "@/components/core/separator";


export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category } = await params;

    return getMetadata(category);
}


type CategoryPageProps = {
    params: Promise<{ category: Category }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params; 
    
    if (!CATEGORY_LIST.includes(category as Category)) {
        notFound();
    }    
    
    const t = await getCategoryTranslation(category);
   
    return (
        <div className="flex justify-start flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <h1 className="font-bold text-xl text-start">{t("title")}</h1>
                <h2 className="">{t("description")}</h2>
            </div>
            <Separator />
            <ArticlesFeed category={category} />
        </div>
    );
}
