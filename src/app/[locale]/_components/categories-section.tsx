import { ArticlesList } from "@/components/core/articles-list"
import { CATEGORY_LIST } from "@/constants/categories"

export const CategoriesSection = () => {

    return (
        <section className="flex flex-col gap-8">
            {CATEGORY_LIST.map(category => (
                <ArticlesList key={category} category={category} />
            ))}
        </section>
    )

}
