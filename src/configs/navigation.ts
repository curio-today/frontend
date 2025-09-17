import { NavigationConfig } from "@/types/configs";

export const Navigation = {
    routes: {
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
        }
    }
} satisfies NavigationConfig;