import { TranslationKey, TranslationNamespace } from "../translation";

export type WithTranslation<T> = T | {
    translation: {
        key: TranslationKey,
        namespace: TranslationNamespace;
    },
}