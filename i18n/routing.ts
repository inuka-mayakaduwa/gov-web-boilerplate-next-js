// i18n/routing.ts
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "si", "ta"] as const;

// Removed defaultLocale since we no longer want a default language.
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

// Export an object with locales only.
export const routing = { locales };
