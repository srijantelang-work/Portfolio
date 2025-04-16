export type Technology = {
  name: string;
  icon?: string;
  color?: string;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'ai';
  featured: boolean;
  completedAt: string;
} 