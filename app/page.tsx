import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LanguageSelection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Select Your Language / ඔබේ භාෂාව තෝරන්න / உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/en">English</Link>
        </Button>
        <Button asChild>
          <Link href="/si">සිංහල</Link>
        </Button>
        <Button asChild>
          <Link href="/ta">தமிழ்</Link>
        </Button>
      </div>
    </div>
  )
}

