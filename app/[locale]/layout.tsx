// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/routing";
import Header from "@/components/common/header/header";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: "si" | "en" | "ta" };
}) {
  // Await params to ensure we have the resolved value
  const { locale } = await params;

  // Validate the locale
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    // Dynamically import messages for the given locale
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    // Use a container div (or fragment) instead of <html> or <body>
    <div className={inter.className}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Header />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}


