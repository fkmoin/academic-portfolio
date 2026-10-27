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
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Identity & objective */}
          <div>
            <h4 className="text-base font-bold text-slate-900 tracking-tight">
              {cvData.personal.fullName}
            </h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Applied Sciences & Mathematics graduate seeking admission to a Mechanical Engineering undergraduate program in China.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={onOpenPdfModal}
                className="text-xs text-slate-600 hover:text-slate-900 underline font-medium"
              >
                View CV PDF
              </button>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <a
                href={cvData.personal.cvPdfUrl}
                download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
                className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 underline font-medium"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-2">
            <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Sections
            </h5>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-600">
              <button
                onClick={() => {
                  setActivePage('overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-slate-900 transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setActivePage('education');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-slate-900 transition-colors"
              >
                Education & Academic Excellence
              </button>
              <button
                onClick={() => {
                  setActivePage('experience');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-slate-900 transition-colors"
              >
                Professional Experience (RSB)
              </button>
              <button
                onClick={() => {
                  setActivePage('skills');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-slate-900 transition-colors"
              >
                Skills, Languages & Interests
              </button>
              <button
                onClick={() => {
                  setActivePage('references');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left hover:text-slate-900 transition-colors"
              >
                References & Contact Details
              </button>
            </div>
          </div>

          {/* Signature and Verified Contact */}
          <div>
            <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Verification & Signature
            </h5>
            <div className="mt-2.5 p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{cvData.personal.location}</span>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-700">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${cvData.personal.email}`} className="hover:underline">
                  {cvData.personal.email}
                </a>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-700">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`tel:${cvData.personal.phone}`} className="hover:underline">
                  {cvData.personal.phone}
                </a>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Signature:</span>
                <img
                  src={cvData.personal.signatureUrl}
                  alt="Md. Fazlul Kabir Moin Signature"
                  className="h-7 object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Md. Fazlul Kabir Moin. All details from authentic Curriculum Vitae.</p>
          <div className="flex items-center gap-3">
            <span>Gazipur, Bangladesh</span>
            <span aria-hidden="true">·</span>
            <span>Radiological Solution Bangladesh (RSB)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
