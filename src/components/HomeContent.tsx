'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import { ProjectsSection } from './projects/ProjectsSection';
import { ResumeSection } from './resume/ResumeSection';
import { ConnectSection } from './connect/ConnectSection';
import CertificatesSection from './certificates/CertificatesSection';
import { AnimatedSection } from './layout/AnimatedSection';
import { Project } from '@/types/project';

interface HomeContentProps {
  projects: Project[];
}

export function HomeContent({ projects }: HomeContentProps) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <Hero onAnimationComplete={() => setShowContent(true)} />
      <AnimatePresence>
        {showContent && (
          <>
            <AnimatedSection id="projects" className="w-full">
              <ProjectsSection projects={projects} />
            </AnimatedSection>
            <AnimatedSection id="resume" className="w-full">
              <ResumeSection />
            </AnimatedSection>
            <AnimatedSection id="certificates" className="w-full">
              <CertificatesSection />
            </AnimatedSection>
            <AnimatedSection id="connect" className="w-full">
              <ConnectSection />
            </AnimatedSection>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 