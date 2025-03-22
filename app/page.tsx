'use client'
import { BlogSection } from '@/components/sections/blog-section'
import { ConnectSection } from '@/components/sections/connect-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <HeroSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      />
      <ProjectsSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      />
      <ExperienceSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      />
      <BlogSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      />
      <ConnectSection
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      />
    </motion.main>
  )
}
