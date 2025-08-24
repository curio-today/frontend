"use client"

import dynamic from "next/dynamic";

export const ArticleClient = dynamic(() => import("./article-card"), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

export { default } from "./article-card"
export type { ArticleCardProps } from "./article-card.types"

