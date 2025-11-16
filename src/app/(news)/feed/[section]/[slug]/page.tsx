// import { Metadata } from "next";
// import { getAuthors } from "@/helpers/authors";
// import { fetchArticleBySlug } from "@/utils/api/fetch-article-by-slug";
// import { redirect } from "next/navigation";
// import { fetchArticleById } from "@/utils/api/fetch-article-by-id";
// import { Metadata as MetadataConfig } from "@/configs";

type PageProps = {
    params: Promise<{
        slug: string;
        heading: string;
        locale: string;
    }>;
}


// export async function generateMetadata({ params }: PageProps ): Promise<Metadata> {
//     const { slug, locale } = await params;
   
//     const article = await fetchArticleBySlug(slug);

//     return {
//         title: article.title,
//         description: article.subtitle,
//         authors: getAuthors(), 
//         creator: "Alexander Shunin",
//         publisher: MetadataConfig.siteName,
//         keywords: [""],
//         openGraph: {
//             title: article.title,
//             description: article.subtitle,
//             url: `https://curio.today/feed/${article.badge.name.toLowerCase()}/${slug}`,
//             siteName: MetadataConfig.siteName,
//             images: [
//                 {
//                     url: article.cover?.url,
//                     width: 1200,
//                     height: 630,
//                     alt: article.cover?.alt
//                 }
//             ],
//             locale,
//             type: "article"
//         },
//         robots: {
//             index: true,
//             follow: true,
//             nocache: false,
//         },
//     }
// }

export default async function ArticlePage({ params }: PageProps) {
    // const { locale, slug } = await params;

    // const articleId = (await fetchArticleBySlug(slug)).id;
    // const article = await fetchArticleById(articleId, locale);
    
    // if (!article) {
    //     redirect("/not-found")
    // }

    // console.log(article);

    return (
        null
    )
}
