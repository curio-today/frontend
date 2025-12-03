import { fetchArticle } from "@/data/article/fetch-article";
import { Separator } from "@/components/core/separator";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import { ImageWithFocal } from "@/components/ui/image-with-focal";
import { RenderText } from "./_components/render-text";

export default async function Article({ params }: { params: Promise<{ id: string}> }) {
    const locale = await getLocale();
    const { id } = await params;
    const { title, subtitle, cover, createdAt, source } = await fetchArticle(id, {
        locale,
        limit: 1
    });

    function formateDate(iso: string): string {
        return new Intl.DateTimeFormat(locale, {
            dateStyle: "full",
            timeStyle: "short"
        }).format(new Date(iso)).toUpperCase()
    }

    return (
        <section className="article flex flex-col gap-12">
            <div className="metadata flex flex-row gap-4 align-middle justify-start text-center">
                <time className="font-thin text-sm align-middle text-center">{formateDate(createdAt)}</time>
                
            </div>
            <div className="container flex flex-col gap-4">
                <h1 className="title font-bold text-6xl ">{title}</h1>
                <h3 className="description text-xl text-blue-400">{subtitle}</h3>
            </div>
            <Separator />
            <section className="hero flex flex-col justify-center gap-2">
                <figure className="relative w-full h-200">
                    <ImageWithFocal 
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
            <section>
            </section>
        </section>

    )
}