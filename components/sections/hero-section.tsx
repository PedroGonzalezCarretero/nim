'use client'
import { motion } from 'motion/react'

type HeroSectionProps = {
  transition: any
  variants: any
}

export function HeroSection({ transition, variants }: HeroSectionProps) {
  return (
    <motion.section
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20"
      variants={variants}
      transition={transition}
    >
      <img
        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="aspect-square w-full rounded-lg bg-zinc-100 object-cover dark:bg-zinc-900"
      />
      <div className="flex flex-col gap-2">
        <p className="text-zinc-600 dark:text-zinc-400">
          Two years of freelance experience as a developer, I specialize in
          every stage of quality app development, from system design and REST
          APIs to deployment and maintenance.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Strong background in digital communication, which has led me to
          improve my project management skills and abilities to collaborate
          effectively with team members or clients.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          I am a native Spanish speaker with{' '}
          <a
            href="https://cert.efset.org/sAYNZx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 duration-200 hover:underline"
          >
            C2-level English proficiency
          </a>
          .
        </p>
      </div>
    </motion.section>
  )
}