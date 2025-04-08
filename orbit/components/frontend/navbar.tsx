import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Orbit Inc.</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-indigo-600">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-indigo-600">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-indigo-600">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button size="sm">Get a Demo</Button>
        </div>
      </div>
    </header>
  )
}
