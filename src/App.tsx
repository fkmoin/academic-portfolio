/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Navigation Top Bar Contract */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
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
