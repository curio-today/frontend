import { CATEGORY_LIST } from '@/constants/categories'
import { LOCALES } from '@/constants/locales'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://curio.today'

  const now = new Date()

  const urls: MetadataRoute.Sitemap = []

  // Helper: build alternates.languages object
  const buildAlternates = (path: string) => {
    const obj: Record<string, string> = {}
    LOCALES.forEach(locale => {
      obj[locale] = `${base}/${locale}${path}`
    })
    return { languages: obj }
  }

  // Locale root pages (feeds)
  LOCALES.forEach(locale => {
    urls.push({
      url: `${base}/${locale}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: buildAlternates(''),
    })
  })

  // Section pages
  CATEGORY_LIST.forEach(section => {
    LOCALES.forEach(locale => {
      urls.push({
        url: `${base}/${locale}/${section}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: buildAlternates(`/${section}`),
      })
    })
  })

  return urls
}
