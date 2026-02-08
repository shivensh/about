import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { Starfield } from './components/Starfield';
import { TimeDisplay } from './components/TimeDisplay';
import { ThemeToggle } from './components/ThemeToggle';
import { ProfilePicture } from './components/ProfilePicture';
import { Marquee } from './components/Marquee';
import { HeroSection } from './components/HeroSection';
import { OriginSection } from './components/OriginSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { WorksSection } from './components/WorksSection';
import { ChronoSection } from './components/ChronoSection';
import { ContactSection } from './components/ContactSection';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div
      className="relative min-h-screen transition-colors duration-700"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#f5f5f5',
        color: '#00ff66',
        fontFamily: '"JetBrains Mono", "Space Mono", monospace',
      }}
    >
      {/* Starfield background */}
      <Starfield />

      {/* Fixed UI elements */}
      <TimeDisplay />
      <ThemeToggle />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero with profile picture and marquee */}
        <div className="relative">
          <div className="pt-32">
            <ProfilePicture />
            <Marquee />
          </div>
          <HeroSection />
        </div>

        {/* Sections */}
        <OriginSection />
        <CapabilitiesSection />
        <WorksSection />
        <ChronoSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 text-center">
          <p
            className="font-mono text-xs"
            style={{
              color: '#00ff66',
              opacity: 0.4,
              letterSpacing: '0.2em',
            }}
          >
            © 2026 shivansh — crafted with obsession
          </p>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
