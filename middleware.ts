// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/routing";

export default createMiddleware({
  // A list of all locales that are supported.
  locales: locales,

  // Do not provide a defaultLocale here since we want "/" to remain untouched.
  // Prefix all pathnames with the locale (for routes that are matched).
  localePrefix: "always",
});

export const config = {
  // Run the middleware only on paths that have at least one character after "/"
  // (i.e. exclude the root "/" so that the language picker page is not rewritten).
  matcher: ["/((?!api|_next|.*\\..*).+)"],
};
