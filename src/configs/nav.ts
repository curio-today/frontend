import { NavigationConfig } from "@/types/configs";

export const Navigation: NavigationConfig = {
    desktop: {
        items: [
            {
                key: "amazes",
                href: "/feed/amazes",
            },
            {
                key: "informs",
                href: "/feed/informs",
            },
            {
                key: "amuses",
                href: "/feed/amuses",
            },
            {
                key: "inspires",
                href: "/feed/inspires"
            }
        ]
    },
    mobile: {
        items: [
            {
                key: "amazes",
                href: "/feed/amazes",
                icon: "wow",
            },
            {
                key: "informs",
                href: "/feed/informs",
                icon: "megaphone",
            },
            {
                key: "feed",
                href: "/feed",
                icon: "newspaper"
            },
            {
                key: "amuses",
                href: "/feed/amuses",
                icon: "question_mark",
            },
            {
                key: "inspires",
                href: "/feed/inspires",
                icon: "lightbulb"
            }
        ]
    }
}