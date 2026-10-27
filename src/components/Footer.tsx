import React from 'react';
import { Mail, Phone, MapPin, FileDown } from 'lucide-react';
import { cvData } from '../data/cvData';
import { PageId } from './Navbar';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenPdfModal }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 relative transition-colors">
      <div className="h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Identity & objective */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                M
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {cvData.personal.fullName}
              </h4>
            </div>
            <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Applied Sciences & Mathematics scholar seeking admission to a Mechanical Engineering undergraduate program in China.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={onOpenPdfModal}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                View CV PDF
              </button>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
              <a
                href={cvData.personal.cvPdfUrl}
                download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
                className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Sections
            </h5>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <button
                onClick={() => {
                  setActivePage('overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setActivePage('education');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Education & Academic Excellence
              </button>
              <button
                onClick={() => {
                  setActivePage('experience');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Professional Experience (RSB)
              </button>
              <button
                onClick={() => {
                  setActivePage('skills');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills, Languages & Interests
              </button>
              <button
                onClick={() => {
                  setActivePage('references');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                References & Contact Details
              </button>
            </div>
          </div>

          {/* Signature and Verified Contact */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Verification & Signature
            </h5>
            <div className="mt-2.5 p-3.5 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl">
              <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="truncate">{cvData.personal.location}</span>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <a href={`mailto:${cvData.personal.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                  {cvData.personal.email}
                </a>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a href={`tel:${cvData.personal.phone}`} className="hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline">
                  {cvData.personal.phone}
                </a>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
                <span className="text-[11px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider">Signature:</span>
                <div className="bg-white rounded px-2 py-0.5">
                  <img
                    src={cvData.personal.signatureUrl}
                    alt="Md. Fazlul Kabir Moin Signature"
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Md. Fazlul Kabir Moin. All credentials faithfully extracted from authentic CV.</p>
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-700 dark:text-slate-300">Gazipur, Bangladesh</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="font-medium text-teal-700 dark:text-teal-400">Radiological Solution Bangladesh (RSB)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
