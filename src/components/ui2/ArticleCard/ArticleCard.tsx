import type { Article } from "@/types/content/article";


export default function ArticleCard({ title }: Article) {
    return (
        <div style={{ "height": "400px", width: "230px" }}>
            <h1>{title}</h1>
        </div>
    );
}