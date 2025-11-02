import { Image } from "@/lib/types/content/image";
import { IconVariant } from "@/ui/components/ui/Icon";

type Icons = {
    [K in IconVariant]: Image
}

export const ICONS_SVG = {
    globe: {
        src: "/icons/globe.svg",
        alt: "globe",
    },
    clock: {
        src: "/icons/clock.svg",
        alt: "clock",
    },
    external: {
        src: "/icons/external.svg",
        alt: "external"
    },
    filter: {
        src: "/icons/filter.svg",
        alt: "filter"
    },
    flame: {
        src: "/icons/flame.svg",
        alt: "flame"
    },
    hashtag: {
        src: "/icons/hashtag.svg",
        alt: "hashtag"
    },
    magnifying_glass: {
        src: "/icons/magnifying-glass.svg",
        alt: "magnifying_glass"
    },
    megaphone: {
        src: "/icons/megaphone.svg",
        alt: "megaphone"
    },
    moon: {
        src: "/icons/moon.svg",
        alt: "moon"
    },
    question_mark: {
        src: "/icons/question-mark.svg",
        alt: "question_mark"
    },
    share: {
        src: "/icons/share.svg",
        alt: "share"
    },
    sun: {
        src: "/icons/sun.svg",
        alt: "sun"
    },
    wow: {
        src: "/icons/wow.svg",
        alt: "wow"
    },
    curio: {
        src: "/logos/curio-with-memo.webp",
        alt: "curio"
    },
    newspaper: {
        src: "/icons/newspaper.svg",
        alt: "newspaper"
    },
    lightbulb: {
        src: "/icons/lightbulb.svg",
        alt: "lightbulb"
    },
    quote: {
        src: "/icons/quote.svg",
        alt: "quote"
    }
}