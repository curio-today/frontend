import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/card"
import { Article } from "@/types/api/article"

import Image from "next/image"
import Link from "next/link"

export type ArticleCardProps = Pick<Article, "title" | "cover" | "slug" | "subtitle" | "id" | "badge" >

export function ArticleCard({ title, subtitle, slug, cover }: ArticleCardProps) {
  return (
      <Card className="w-full flex-column h-full" id={slug}>
        <CardHeader className="flex-1">
          <CardTitle className="text-xl line-clamp-3">{title}</CardTitle>
          <CardContent className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src={cover.url} alt={cover.alt} fill />
          </CardContent>
        </CardHeader>
        <CardFooter className="flex-col gap-2">
          <CardDescription className="text-ellipsis">{subtitle}</CardDescription>
        </CardFooter>
      </Card>
  )
}
