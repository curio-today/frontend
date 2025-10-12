import { Article } from "@/types/content/article"

export const ArticleCard = ({ title }: Article) => {
    return <h1>{title}</h1>;
}