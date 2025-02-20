"use client"

import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function Header() {
  const t = useTranslations("Header")
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPathname)
  }

  return (
    <header className="bg-gray-100 py-1 px-4"> {/* Reduced padding */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Sri Lanka Flag */}
          <Image 
            src="/sl-flag.svg" 
            alt="Sri Lanka Flag" 
            width={20} 
            height={20} 
            className="h-5 w-auto"
          />
          {/* Government Logo */}
          <Image 
            src="/gov-logo.png" 
            alt="Government Logo" 
            width={20} 
            height={20} 
            className="h-5 w-auto"
          />
          <span className="text-sm">{t("notice")}</span> {/* Keep text size normal */}
        </div>
        <div className="flex items-center space-x-2">
          {/* Language Switch Buttons with Bold Text */}
          <Button variant="ghost" size="sm" className="px-2 py-1 font-bold" onClick={() => switchLanguage("si")}>
            සිංහල
          </Button>
          <Button variant="ghost" size="sm" className="px-2 py-1 font-bold" onClick={() => switchLanguage("en")}>
            English
          </Button>
          <Button variant="ghost" size="sm" className="px-2 py-1 font-bold" onClick={() => switchLanguage("ta")}>
            தமிழ்
          </Button>
        </div>
      </div>
    </header>
  )
}
