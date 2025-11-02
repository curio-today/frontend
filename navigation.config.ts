import { NavigationConfig } from "@/lib/types/configs";

export const Navigation = {
    navigationBar: {
        links: [
            "amazes",
            "informs",
            "amuses",
            "inspires"
        ]
    },
    routes: {
        "/": {},
        playground: {},
        feed: {
            amazes: {
                icon: "wow",
            },
            informs: {
                icon: "megaphone",
            },
            amuses: {
                icon: "question_mark",
            },
            inspires: {
                icon: "lightbulb"
            }
        },
        search: {}
    }
} satisfies NavigationConfig;