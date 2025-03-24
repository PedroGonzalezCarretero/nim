'use client'
import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'

type HeroSectionProps = {
  transition: any
  variants: any
}

export function HeroSection({ transition, variants }: HeroSectionProps) {
  return (
    <motion.section
      className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-12 lg:gap-16 xl:gap-20"
      variants={variants}
      transition={transition}
    >
      <img
        src="/profile-pic.jpg"
        alt="Portrait image of Pedro González C, a software engineer and web developer from Argentina."
        className="col-span-5 max-h-[280px] w-full rounded-lg bg-zinc-100 object-cover md:col-span-2 dark:bg-zinc-900"
      />
      <div className="col-span-5 flex flex-col gap-2 md:col-span-3">
        <p className="prose text-zinc-600 dark:text-zinc-400">
          Two years of freelance experience as a developer, I specialize in
          every stage of quality app development, from system design and REST
          APIs to deployment and maintenance.
        </p>
        <p className="prose text-zinc-600 dark:text-zinc-400">
          Strong background in digital communication, which has led me to
          improve my project management skills and abilities to collaborate
          effectively with team members or clients.
        </p>
        <p className="prose text-zinc-600 dark:text-zinc-400">
          I am a native Spanish speaker with <br />
          <a
            href="https://cert.efset.org/sAYNZx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800"
          >
            C2-level English proficiency
            <ExternalLink className="ml-2 inline-block h-4 w-4" />
          </a>
          .
        </p>
      </div>
    </motion.section>
  )
}