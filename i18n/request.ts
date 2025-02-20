// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { redirect } from "next/navigation"; // Import redirect from Next.js

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // If no locale is provided or it's not one of the allowed locales,
  // redirect to the language selection page at "/".
  if (!locale || !routing.locales.includes(locale as any)) {
    redirect("/");
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
