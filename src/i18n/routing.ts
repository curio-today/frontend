import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    localeCookie: {
        maxAge: 2592000,
    },
    locales: ['en', 'ru', "lv"],
    defaultLocale: 'en'
});
