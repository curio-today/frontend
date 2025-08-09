import IconType from "../types/IconType";

type IconDataType = {
  [icon in IconType]: {
    url: string;
    alt: icon;
  };
}

export const IconData: IconDataType = {
  globe: {
    url: "/icons/globe.svg",
    alt: "globe"
  },
  clock: {
    url: "/icons/clock.svg",
    alt: "clock",
  },
  external: {
    url: "/icons/external.svg",
    alt: "external"
  },
  filter: {
    url: "/icons/filter.svg",
    alt: "filter"
  },
  flame: {
    url: "/icons/flame.svg",
    alt: "flame"
  },
  hashtag: {
    url: "/icons/hashtag.svg",
    alt: "hashtag"
  },
  magnifying_glass: {
    url: "/icons/magnifying-glass.svg",
    alt: "magnifying_glass"
  },
  megaphone: {
    url: "/icons/megaphone.svg",
    alt: "megaphone"
  },
  moon: {
    url: "/icons/moon.svg",
    alt: "moon"
  },
  question_mark: {
    url: "/icons/question-mark.svg",
    alt: "question_mark"
  },
  share: {
    url: "/icons/share.svg",
    alt: "share"
  },
  sun: {
    url: "/icons/sun.svg",
    alt: "sun"
  },
  wow: {
    url: "/icons/wow.svg",
    alt: "wow"
  },
  curio: {
    url: "/logos/curio.webp",
    alt: "curio"
  }
}