import { useEffect, useRef } from "react";

/**
 * @deprecated use useInfiniteScroll hook instead.
 * @param callback 
 * @param hasMore 
 * @returns 
 */
export const useIntersectionObserver = (callback: () => void, hasMore: boolean) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current || !hasMore) return
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) callback()
        }, { threshold: 1 })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [callback, hasMore])

    return ref
}