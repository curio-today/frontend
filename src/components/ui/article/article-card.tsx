import { Button } from "@/components/core/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/card"

import Image, { ImageProps } from "next/image"

export type ArticleCardProps = {
    image: ImageProps,
    title: string,
    description: string,
    slug: string,
}


export function ArticleCard({ title, description, slug, image }: ArticleCardProps) {
  return (
    <Card className="w-full flex-column h-full" id={slug}>
      <CardHeader className="flex-1">
        <CardTitle className="text-xl line-clamp-3">{title}</CardTitle>
        <CardContent className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image {...image}/>
        </CardContent>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <CardDescription className="text-ellipsis">{description}</CardDescription>
      </CardFooter>
    </Card>
  )
}
