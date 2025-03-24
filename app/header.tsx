'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { ABOUT_ME } from './data'
import { FileDown } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-lg font-semibold text-black dark:text-white"
        >
          {ABOUT_ME.name}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {ABOUT_ME.description}
        </TextEffect>
      </div>

      <a
        download={true}
        href="/Resume - Pedro González Carretero.pdf"
        target="_blank"
        className="group text-foreground border-foreground/20 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border bg-transparent px-6 font-medium [box-shadow:5px_5px_rgb(0_0_0)] transition-all duration-100 hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(0_0_0)]"
      >
        <FileDown className="text-foreground h-6 w-6" />
        <span className="ml-2 text-sm font-medium">Download CV</span>
      </a>
    </header>
  )
}
