import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/card"
import { Skeleton } from "@/components/core/skeleton"
import { Article } from "@/types/api/article"

import { ImageWithFocal } from "../image-with-focal"

export type ArticleCardProps = Pick<Article, "title" | "cover" | "slug" | "subtitle" | "id" | "badge" >

export function ArticleCard({ title, subtitle, slug, cover }: ArticleCardProps) {
  return (
    <Card className="gap-5 flex-1 h-full hover:outline-1 hover:outline-blue-400" id={slug}>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-3 min-h-15">{title}</CardTitle>
        <CardContent className="relative aspect-video overflow-hidden rounded-xl w-full">
          <ImageWithFocal src={cover.url} alt={cover.alt} focalX={cover.focalX} focalY={cover.focalY} fill />
        </CardContent>
      </CardHeader>
      <CardFooter>
        <CardDescription className="line-clamp-2 text-left font-medium">{subtitle}</CardDescription>
      </CardFooter>
    </Card>
  )
}


export function ArticleCardSkeleton() {
  return (
    <Skeleton className="w-full flex-column h-full">
      <Skeleton className="flex-1">
          <Skeleton className="text-xl line-clamp-3 w-100" />
          <Skeleton className="relative aspect-video overflow-hidden rounded-xl" />
      </Skeleton>
    </Skeleton>
  )
}