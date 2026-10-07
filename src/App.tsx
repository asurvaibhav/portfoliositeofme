import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Impact } from './components/sections/Impact';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Process } from './components/sections/Process';
import { ResultsBento } from './components/sections/ResultsBento';
import { Testimonials } from './components/sections/Testimonials';
import { BlogInsights } from './components/sections/BlogInsights';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { ProjectPage } from './components/ProjectPage';
import { PROJECTS, ProjectItem } from './data/portfolioData';
import { IntroGate } from '@/components/intro/IntroGate';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const projectReturnScrollY = useRef(0);

  // Handle URL changes and browser back/forward buttons
  useEffect(() => {
    const handleUrlChange = (event?: PopStateEvent) => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      let slug = '';

      if (path.startsWith('/project/')) {
        slug = path.replace('/project/', '').replace(/\/$/, '');
      } else if (hash.startsWith('#/project/')) {
        slug = hash.replace('#/project/', '').replace(/\/$/, '');
      }

      if (slug) {
        const found = PROJECTS.find(
          (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
        );
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      setSelectedProject(null);
      requestAnimationFrame(() => {
        if (typeof event?.state?.scrollY === 'number') {
          window.scrollTo({ top: event.state.scrollY, behavior: 'instant' });
          return;
        }

        const sectionId = window.location.hash.slice(1);
        const section = sectionId && document.getElementById(sectionId);
        if (section) {
          const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
          const top = sectionId === 'home'
            ? 0
            : section.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
          return;
        }

        window.scrollTo({
          top: event?.state?.scrollY ?? projectReturnScrollY.current,
          behavior: 'instant',
        });
      });
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Track active section on scroll when on home page
  useEffect(() => {
    if (selectedProject) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'blog', 'contact'];
      const activationLine = window.innerHeight * 0.35;
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (el.getBoundingClientRect().top > activationLine) break;
        currentSection = section;
      }

      setActiveSection(currentSection);
    };

    const handleHashChange = () => {
      const sectionId = window.location.hash.slice(1);
      if (sectionId && document.getElementById(sectionId)) {
        setActiveSection(sectionId);
      } else if (!sectionId) {
        setActiveSection('home');
      }
    };

    requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [selectedProject]);

  const handleSelectProject = (project: any) => {
    const projectItem = PROJECTS.find((p) => p.id === project.id || p.slug === project.slug) || project;
    projectReturnScrollY.current = window.scrollY;
    window.history.replaceState(
      { ...(window.history.state ?? {}), scrollY: projectReturnScrollY.current },
      '',
    );
    setSelectedProject(projectItem);
    window.history.pushState(
      {
        projectId: projectItem.id,
        fromHome: true,
        returnScrollY: projectReturnScrollY.current,
      },
      '',
      `/project/${projectItem.slug}`,
    );
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    if (window.history.state?.fromHome) {
      window.history.back();
      return;
    }

    setSelectedProject(null);
    window.history.pushState(null, '', '/#work');
    requestAnimationFrame(() => {
      window.scrollTo({ top: projectReturnScrollY.current, behavior: 'instant' });
    });
  };

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % PROJECTS.length
        : (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    const nextProj = PROJECTS[nextIndex];
    setSelectedProject(nextProj);
    window.history.replaceState(
      {
        ...(window.history.state ?? {}),
        projectId: nextProj.id,
        fromHome: true,
        returnScrollY: projectReturnScrollY.current,
      },
      '',
      `/project/${nextProj.slug}`,
    );
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <IntroGate>
      {selectedProject ? (
      <ProjectPage
        project={selectedProject}
        onBack={handleBackToHome}
        onNavigate={navigateProject}
      />
      ) : (
      <div className="min-h-screen bg-[#F8F8F8] text-[#0A0A0A] font-sora selection:bg-[#F63E04] selection:text-white">
        {/* 1. Header (Sticky & Transparent over Hero) */}
        <Header activeSection={activeSection} />

        {/* 2. Hero Section */}
        <Hero onSelectProject={handleSelectProject} />

        {/* 3. Trusted-By / Tech Stack Marquee Strip */}
        <TrustedBy />

        {/* 4. Impact / About Section */}
        <Impact />

        {/* 5. Services Section */}
        <Services />

        {/* 6. Projects Masonry Grid Section */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 7. Design Process Section */}
        <Process />

        {/* 8. Results Bento Section */}
        <ResultsBento />

        {/* 9. Client Testimonials Section */}
        <Testimonials />

        {/* 10. Design & Code Insights Blog Section */}
        <BlogInsights />

        {/* 11. Contact Form Section */}
        <Contact />

        {/* 12. Footer Section */}
        <Footer />
      </div>
      )}
    </IntroGate>
  );
}
