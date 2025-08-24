import { SharedPageProps } from '@/shared/page.props';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';


export default async function Home() {
    redirect('/feed');
}