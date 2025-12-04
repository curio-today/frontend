import { Separator } from "@/components/core/separator";
import { Skeleton } from "@/components/core/skeleton";

export default function Loading() {
    return (
        <section className="article flex flex-col gap-12 w-full h-full">
            <Skeleton className="w-full h-10 flex flex-row gap-4 align-middle justify-start text-center" />
            <div className="container flex flex-col gap-4">
                <Skeleton className="w-full h-40 flex flex-row gap-4 align-middle justify-start text-center" />
                <Skeleton className="w-full h-10 flex flex-row gap-4 align-middle justify-start text-center" />
            </div>
            <Separator />
            <Skeleton className="w-full h-200 flex flex-row gap-4 align-middle justify-start text-center" />
        </section>
    )
}