import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/animated/card"
import { Skeleton } from "@/components/core/skeleton"
import { Article } from "@/types/api/article"

import { ImageWithFocal } from "./image-with-focal"
import { Time } from "./time"
import { ArticleBadge } from "./article"
import { Suspense } from "react"

export type ArticleCardProps = Pick<Article, "title" | "cover" | "slug" | "subtitle" | "id" | "badge" | "createdAt" | "badge">

export function ArticleCard({ title, subtitle, slug, cover, createdAt, badge }: ArticleCardProps) {
  return (
    <Card className="gap-5 flex-1 h-full hover:bg-accent" id={slug}>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-3 min-h-15">{title}</CardTitle>
        <Suspense fallback={<Skeleton className="w-100 h-25"/>}>
          <CardContent className="relative aspect-video overflow-hidden rounded-xl w-full">
            <ImageWithFocal src={cover.url} alt={cover.alt} focalX={cover.focalX} focalY={cover.focalY} fill />
          </CardContent>
        </Suspense>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-2">
        <CardDescription className="line-clamp-2 text-left font-medium">
          {subtitle}
        </CardDescription>
        <div className="flex flex-row w-full items-center">
          <Time 
            className="flex-1 text-muted-foreground font-thin text-xs align-middle text-left" 
            iso={createdAt}
          />
          <Suspense fallback={<Skeleton className="w-50 h-50"/>}>
            <ArticleBadge 
              name={badge.name}
              id={badge.id}
              variant="outline"
            />
          </Suspense>
        </div>
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
