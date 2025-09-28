import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({requestLocale}) => {
    const store = await cookies();
    const locale = store.get('locale')?.value || 'en';

    return {
        locale,
        messages: (await import(`../../localization/messages/${locale}.json`)).default
    };
});