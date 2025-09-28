import { getPageMetadata } from '@/utils/metadata/get-page-metadata';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations({
        locale,
        namespace: "Metadata.Pages.Home"
    })
    
    return getPageMetadata({
        pageName: t("name"),
        metadata: {
            description: t("description"),
            keywords: t("keywords"),
            locale: locale
        }
    })
}

export default async function Home() {
    redirect('/feed');
}