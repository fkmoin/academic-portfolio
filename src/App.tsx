/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { PdfModal } from './components/PdfModal';
import { OverviewPage } from './pages/OverviewPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ReferencesPage } from './pages/ReferencesPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('overview');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('app-theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Keep DOM class in sync with isDark state
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('app-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('app-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Navigation Top Bar Contract with Theme Switcher */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'overview' && (
          <OverviewPage
            setActivePage={setActivePage}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
        {activePage === 'education' && (
          <EducationPage
            setActivePage={setActivePage}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
        {activePage === 'experience' && (
          <ExperiencePage
            setActivePage={setActivePage}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
        {activePage === 'skills' && (
          <SkillsPage
            setActivePage={setActivePage}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
        {activePage === 'references' && (
          <ReferencesPage
            setActivePage={setActivePage}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* Fullscreen Document Viewer Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
