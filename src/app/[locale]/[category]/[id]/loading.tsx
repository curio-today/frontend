import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col gap-8 w-full h-full">
            <div className="flex flex-row justify-between">
                <Skeleton className="w-1/3 h-12" />
                <Skeleton className="w-1/8 h-12" />
            </div>
            <div className="flex flex-col gap-4">
                <Skeleton className="w-full h-20" />
                <Skeleton className="w-1/2 h-10" />
            </div>
            <Separator />
            <div className="flex w-full justify-center items-center flex-col gap-2">
                <Skeleton className="w-full h-180" />
                <Skeleton className="w-50 h-5" />
            </div>
        </div>
    )
}
