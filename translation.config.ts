import { Locale } from "@/lib/types/locale"

type TranslationConfigType = {
    languages: {
        [locale: string]: {
            displayText: string
        }
    }
    
}
export const TranslationConfig: TranslationConfigType = {
    languages: {
        "en": {
            displayText: "English", 
        },
        "ru": {
            displayText: "Русский",
        },
        "lv": {
            displayText: "Latviešu",
        },
    }
}