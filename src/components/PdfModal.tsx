import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
              <FileText className="w-5 h-5 text-slate-800" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-slate-900">
                Original Curriculum Vitae (PDF)
              </h3>
              <p className="text-xs text-slate-500">
                {cvData.personal.fullName} · Verified Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cvData.personal.cvPdfUrl}
              download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={cvData.personal.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close document viewer"
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF viewer frame */}
        <div className="flex-1 bg-slate-100 relative">
          <iframe
            src={`${cvData.personal.cvPdfUrl}#view=FitH`}
            title="Curriculum Vitae of Md. Fazlul Kabir Moin"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};
