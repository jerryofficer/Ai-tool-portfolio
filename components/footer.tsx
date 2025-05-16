import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">
            Divya<span className="text-purple-600 dark:text-purple-400">Dev</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">MERN Stack Developer</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-6 border-t">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Divya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
