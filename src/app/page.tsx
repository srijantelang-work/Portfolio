import { Project } from '@/types/project'
import { PageTransition } from '@/components/layout/PageTransition'
import { HomeContent } from '@/components/HomeContent'

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
    liveUrl: 'https://apps.apple.com/gb/app/hotfoot-ai-trip-planner-app/id6745700539'
  },
  {
    id: '2',
    title: 'SmartPlaylist',
    description: 'App that creates personalized music playlists based on user preferences, integrating with Spotify for easy playlist management.',
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
    liveUrl: 'https://smartplaylist.software/'
  },
  {
    id: '3',
    title: 'Kahani',
    description: 'Its a recommendation platform that provides personalized suggestions based on user prompts.',
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
    liveUrl: 'https://kahani.software/'
  },
  {
    id: '4',
    title: 'Expense Tracker',
    description: 'A web app for managing daily expenses, with visual insights through charts and summaries.',
    longDescription: 'Built with FastAPI for backend operations, this expense tracking application helps users manage their daily finances. It features expense categorization, visual analytics through charts, and comprehensive financial summaries. The app uses MongoDB for data persistence and React for frontend operations.',
    image: '/projects/expense-tracker.jpeg',
    technologies: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'MongoDB' },
      { name: 'React' }
    ],
    category: 'mobile',
    featured: true,
    completedAt: '2023-11',
    githubUrl: 'https://github.com/Srijan272002/Expense-Tracker'
  },
  {
    id: '5',
    title: 'Newz-AI',
    description: 'A full-stack chatbot that answers queries over a news corpus using a Retrieval-Augmented Generation (RAG) pipeline.',
    longDescription: 'An intelligent news chatbot that uses Redis for session management and Qdrant Vector Database for efficient news retrieval. The system implements a RAG pipeline with Google\'s Generative AI, providing personalized responses about current events through a real-time WebSocket interface.',
    image: '/projects/newzai.jpeg',
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Socket.io' },
      { name: 'Redis' },
      { name: 'Qdrant' },
      { name: 'Google AI' }
    ],
    category: 'fullstack',
    featured: true,
    completedAt: '2024-03',
    githubUrl: 'https://github.com/Srijan272002/newzai'
  },
  {
    id: '6',
    title: 'Charlie',
    description: 'An open-source AI assistant built for real-time interaction and seamless system integration, featuring advanced voice interface and intelligent processing capabilities.',
    longDescription: 'Charlie is a next-generation AI assistant that combines advanced voice synthesis (StyleTTS2), real-time speech recognition (faster-whisper), and local LLM processing (llama.cpp). Features include context-aware memory systems, natural language command parsing, device control capabilities, and seamless system integration. The assistant supports voice interruption, personal preference learning, and persistent memory across sessions.',
    image: '/projects/charlie.jpeg',
    technologies: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Redis' },
      { name: 'StyleTTS2' },
      { name: 'llama.cpp' },
      { name: 'gRPC' }
    ],
    category: 'ai',
    featured: true,
    completedAt: '2024-03',
    githubUrl: 'https://github.com/Srijan272002/Charlie'
  },
  {
    id: '7',
    title: 'AI-Powered Car Dealership Survey System',
    description: 'An intelligent automated voice survey platform that transforms customer feedback collection for automotive service departments.',
    longDescription: 'A sophisticated survey system that autonomously calls customers after service visits, conducts natural language conversations to gather satisfaction ratings and feedback, and provides actionable business insights through real-time analytics. Features include multi-lingual support, automated callback management, staff recognition, and a comprehensive dashboard for visualizing survey results.',
    image: '/projects/car-survey.jpeg',
    technologies: [
      { name: 'FastAPI' },
      { name: 'Python' },
      { name: 'Groq AI' },
      { name: 'Twilio' },
      { name: 'Supabase' },
      { name: 'PostgreSQL' }
    ],
    category: 'ai',
    featured: true,
    completedAt: '2024-03',
    githubUrl: 'https://github.com/Srijan272002/voice-AI-survey'
  },
  {
    id: '8',
    title: 'Callivate',
    description: 'An AI-powered platform that delivers personalized motivational calls to boost daily goal adherence and track user progress.',
    longDescription: 'Voice-Cloner is an innovative AI platform that combines voice cloning technology with motivational coaching. The system creates personalized motivational calls using AI-generated voices, helping users stay committed to their daily goals and providing comprehensive progress tracking. Features include custom voice generation, automated scheduling, goal tracking, and performance analytics.',
    image: '/projects/voice-cloner.jpeg',
    technologies: [
      { name: 'AI' },
      { name: 'Voice Cloning' },
      { name: 'Python' },
      { name: 'Machine Learning' },
      { name: 'Audio Processing' },
      { name: 'Goal Tracking' }
    ],
    category: 'ai',
    featured: true,
    completedAt: '2024-04',
    githubUrl: 'https://github.com/Srijan272002/voicecloner'
  },
  {
    id: '9',
    title: 'Interactive 3D Orb',
    description: 'A stunning interactive 3D sphere built with Three.js featuring modern rendering techniques, dynamic lighting, and customizable animations.',
    longDescription: 'An immersive 3D experience showcasing advanced Three.js capabilities with real-time rendering, interactive mouse controls, and visual effects. Features include multiple material options, dynamic lighting systems, particle effects, auto-rotation, and responsive camera controls. The orb responds to user interactions with smooth animations and offers various visual modes including helpers, shadows, bobbing, pulsing, and color transitions.',
    image: '/projects/3d-orb.jpeg',
    technologies: [
      { name: 'Three.js' },
      { name: 'JavaScript' },
      { name: 'WebGL' },
      { name: 'GLSL' },
      { name: 'HTML5' },
      { name: 'CSS3' }
    ],
    category: 'frontend',
    featured: true,
    completedAt: '2024-12',
    liveUrl: 'https://3dorb.vercel.app/'
  }
]

export default function Home() {
  return (
    <PageTransition>
      <HomeContent projects={projects} />
    </PageTransition>
  )
}
