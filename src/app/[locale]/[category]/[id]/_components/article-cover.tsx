import { ImageWithFocal } from "@/components/ui/image-with-focal";
import type { Article } from "@/types/api/article";

export const ArticleCover = ({ cover, source }: { cover: Article["cover"], source: Article["source"] }) => {
    return (
        <section className="hero flex flex-col justify-center gap-2">
            <figure className="relative w-full h-200">
                <ImageWithFocal
                    className="rounded-md" 
                    src={cover.url} 
                    alt={cover.alt} 
                    focalX={cover.focalX}
                    focalY={cover.focalY} 
                    fill
                />
            </figure>
            <figcaption>
                <p className="text-secondary text-center">{source}</p>
            </figcaption>
        </section>
    )
}
