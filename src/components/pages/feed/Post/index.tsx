"use client"

import dynamic from "next/dynamic";

export const PostClient = dynamic(() => import("./post"), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

export { default } from "./post"
export type { PostProps } from "./post.types"

