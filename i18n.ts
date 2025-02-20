import { getRequestConfig } from "next-intl/server"
import { locales, defaultLocale } from "./i18n/routing"

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    locale = defaultLocale
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})

