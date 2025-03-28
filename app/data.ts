import Github from '@/components/icons/github'
import LinkedIn from '@/components/icons/linked-in'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
  icon: React.ComponentType
}

export const ABOUT_ME: {
  name: string
  description: string
  image: string
} = {
  name: 'Pedro Gonzalez Carretero',
  description: 'Full-stack developer',
  image: 'https://github.com/pedrogonzalezcarr',
}

export const PROJECTS: Project[] = [
  {
    name: 'Engineering Company Form Automation App',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: '/work/engineering-form-automation',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full-stack Developer',
    start: '2022',
    end: 'Present',
    link: '',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Digital Communicator',
    start: '2020',
    end: 'Present',
    link: '',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/PedroGonzalezCarretero',
    icon: Github,
  },

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pedro-gonzalez-carretero/',
    icon: LinkedIn,
  },
]

export const EMAIL = 'pedrogonzalezcarr@gmail.com'
