import { motion } from 'motion/react'
import { PROJECTS } from '@/app/data'
import { ProjectVideo } from './project-video'
import Link from 'next/link'

type ProjectsSectionProps = {
  transition: any
  variants: any
}

export function ProjectsSection({ transition, variants }: ProjectsSectionProps) {
  return (
    <motion.section
      variants={variants}
      transition={transition}
    >
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.name} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectVideo src={project.video} />
            </div>
            <div className="px-1">
              <Link
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={project.link}
                              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
              </Link>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}