import { Separator } from "@/components/core/separator";
import { Skeleton } from "@/components/core/skeleton";

export default function Loading() {
    return (
        <section className="article flex flex-col gap-12 w-full h-full">
            <div className="metadata flex flex-row gap-4">
                <Skeleton className="w-100 h-10" />
                <Skeleton className="w-30 h-10 rounded-xl" />
            </div>
            <div className="container flex flex-col gap-4">
                <Skeleton className="w-full h-40" />
                <Skeleton className="w-full h-10 " />
            </div>
            <Separator />
            <Skeleton className="w-full h-200" />
        </section>
    )
}