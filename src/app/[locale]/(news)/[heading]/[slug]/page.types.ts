export type ArticlePageProps = {
    params: Promise<{
        slug: string;
        heading: string;
        locale: string;
    }>;
}