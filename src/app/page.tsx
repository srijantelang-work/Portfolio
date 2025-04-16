import Hero from '@/components/Hero'
import { Project } from '@/types/project'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { ResumeSection } from '@/components/resume/ResumeSection'
import { ContactSection } from '@/components/contact/ContactSection'
import { PageTransition } from '@/components/layout/PageTransition'
import { AnimatedSection } from '@/components/layout/AnimatedSection'

const projects: Project[] = [
  {
    id: '1',
    title: 'Hot-Foot AI',
    description: 'AI-powered travel assistant that crafts personalized, real-time itineraries by integrating with users\' calendars, emails, and preferences.',
    longDescription: 'A sophisticated travel planning platform that uses artificial intelligence to create dynamic itineraries. The system integrates with users\' calendars and email to understand their schedule and preferences, providing real-time updates and adjustments to travel plans.',
    image: '/projects/hotfoot-ai.jpeg',
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'OpenAI' },
      { name: 'MongoDB' }
    ],
    category: 'ai',
    featured: true,
    completedAt: '2024-02',
    githubUrl: 'https://github.com/Srijan272002/Hotfoot-AI'
  },
  {
    id: '2',
    title: 'SmartPlaylist',
    description: 'AI-driven app that creates personalized music playlists based on user preferences, integrating with Spotify for easy playlist management.',
    longDescription: 'SmartPlaylist leverages artificial intelligence to understand user music preferences and create tailored playlists. The app seamlessly integrates with Spotify\'s API to manage and sync playlists, providing a personalized music discovery experience.',
    image: '/projects/smartplaylist.jpeg',
    technologies: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'Spotify API' },
      { name: 'AI' }
    ],
    category: 'fullstack',
    featured: true,
    completedAt: '2024-01',
    liveUrl: 'https://smartplaylist.vercel.app/'
  },
  {
    id: '3',
    title: 'Kahani',
    description: 'AI-powered movie and TV show recommendation platform that provides personalized suggestions based on user prompts.',
    longDescription: 'Kahani uses GPT-4 Mini and TMDB API to enhance content discovery, allowing users to explore trending content, search by genre, and save favorites. The platform provides intelligent recommendations by understanding natural language user prompts and preferences.',
    image: '/projects/kahani.jpeg',
    technologies: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Supabase' },
      { name: 'OpenAI' },
      { name: 'TMDB API' }
    ],
    category: 'ai',
    featured: true,
    completedAt: '2023-12',
    githubUrl: 'https://github.com/Srijan272002/Kahani'
  },
  {
    id: '4',
    title: 'Expense Tracker',
    description: 'A cross-platform mobile app for managing daily expenses, with visual insights through charts and summaries.',
    longDescription: 'Built with React Native for cross-platform compatibility, this expense tracking application helps users manage their daily finances. It features expense categorization, visual analytics through charts, and comprehensive financial summaries. The app uses MongoDB for data persistence and Node.js for backend operations.',
    image: '/projects/expense-tracker.jpeg',
    technologies: [
      { name: 'React Native' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Express' }
    ],
    category: 'mobile',
    featured: true,
    completedAt: '2023-11',
    githubUrl: 'https://github.com/Srijan272002/Expense-Tracker'
  }
]

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <AnimatedSection id="projects" className="w-full">
          <ProjectsSection projects={projects} />
        </AnimatedSection>
        <AnimatedSection id="resume" className="w-full">
          <ResumeSection />
        </AnimatedSection>
        <AnimatedSection id="contact" className="w-full">
          <ContactSection />
        </AnimatedSection>
      </div>
    </PageTransition>
  )
}
