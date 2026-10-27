import React, { useState } from 'react';
import {
  Users,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  FileDown,
  Building2,
  GraduationCap,
  FileText,
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { PageId } from '../components/Navbar';

interface ReferencesPageProps {
  setActivePage: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const ReferencesPage: React.FC<ReferencesPageProps> = ({
  setActivePage,
  onOpenPdfModal,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header zone */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800/80 rounded-full text-xs font-semibold text-amber-800 dark:text-amber-300 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
          <span>Verification & Endorsement · Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          References & Direct Contact
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          Academic and professional references, verified contact information, and authentic digital signature from the curriculum vitae.
        </p>
      </div>

      {/* References Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Academic & Professional References</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reference 1: Md Suman Talukder */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 rounded-2xl shadow-sm space-y-5 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/60 px-2.5 py-1 rounded-md">
                  Academic Reference
                </span>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-lg">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {cvData.references[0].name}
                </h3>
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-400 mt-0.5">
                  {cvData.references[0].title}
                </p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {cvData.references[0].department}
                </p>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                  {cvData.references[0].organization}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Supervised academic coursework in Advanced Mathematics at Adamjee Cantonment College during HSC studies (Result: GPA 5.00/5.00).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href={`mailto:${cvData.references[0].email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{cvData.references[0].email}</span>
              </a>

              <button
                onClick={() => handleCopy(cvData.references[0].email, 'ref1')}
                className="p-1.5 text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                title="Copy email address"
              >
                {copiedKey === 'ref1' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Reference 2: Md. Fayez Ahmed Fayem */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/30 dark:from-teal-950/20 dark:via-slate-900 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-800/60 rounded-2xl shadow-sm space-y-5 flex flex-col justify-between hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-950/60 px-2.5 py-1 rounded-md">
                  Professional Reference
                </span>
                <div className="p-2 bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 rounded-lg">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {cvData.references[1].name}
                </h3>
                <p className="text-sm font-semibold text-teal-800 dark:text-teal-400 mt-0.5">
                  {cvData.references[1].title}
                </p>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                  {cvData.references[1].organization}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Executive leadership reference verifying operational performance as Operations Executive at RSB (Jan 2024 – Sep 2025).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href={`mailto:${cvData.references[1].email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{cvData.references[1].email}</span>
              </a>

              <button
                onClick={() => handleCopy(cvData.references[1].email, 'ref2')}
                className="p-1.5 text-slate-500 hover:text-teal-700 dark:hover:text-teal-300 rounded-md hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                title="Copy email address"
              >
                {copiedKey === 'ref2' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Direct Contact Card with Official Signature */}
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <span>Candidate Record</span>
              <span aria-hidden="true">·</span>
              <span>Direct Contact</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {cvData.personal.fullName}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Applicant for Mechanical Engineering Undergraduate Program
            </p>
          </div>

          {/* Signature block with light container to guarantee ink legibility */}
          <div className="p-4 bg-gradient-to-br from-amber-50/70 to-orange-50/50 dark:from-slate-800 dark:to-slate-800/80 border border-amber-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center min-w-56 shadow-2xs">
            <span className="text-[11px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1.5">
              Verified Applicant Signature
            </span>
            <div className="bg-white rounded-lg px-3 py-1 shadow-2xs">
              <img
                src={cvData.personal.signatureUrl}
                alt="Md. Fazlul Kabir Moin Official Signature"
                className="h-9 object-contain"
              />
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5">Authentic from CV Page 2</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location */}
          <div className="p-4 bg-gradient-to-br from-rose-50/50 to-white dark:from-rose-950/20 dark:to-slate-800 border border-rose-200/80 dark:border-rose-900/40 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400">
                <MapPin className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Location</span>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.location, 'loc')}
                className="p-1 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded transition-colors"
                title="Copy location"
              >
                {copiedKey === 'loc' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              {cvData.personal.location}
            </p>
          </div>

          {/* Phone */}
          <div className="p-4 bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-slate-800 border border-emerald-200/80 dark:border-emerald-900/40 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Phone Number</span>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.phone, 'phone')}
                className="p-1 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded transition-colors"
                title="Copy phone"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tabular-nums">
              <a href={`tel:${cvData.personal.phone}`} className="hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline">
                {cvData.personal.phone}
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="p-4 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-slate-800 border border-blue-200/80 dark:border-blue-900/40 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Email Address</span>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.email, 'email')}
                className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded transition-colors"
                title="Copy email"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
              <a href={`mailto:${cvData.personal.email}`} className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline">
                {cvData.personal.email}
              </a>
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${cvData.personal.email}?subject=Undergraduate%20Mechanical%20Engineering%20Inquiry%20-%20Md.%20Fazlul%20Kabir%20Moin`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-sm transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Direct Email</span>
          </a>

          <a
            href={cvData.personal.cvPdfUrl}
            download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs"
          >
            <FileDown className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer Section */}
      <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Official Curriculum Vitae (PDF)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Full 2-page document with academic and professional history.
            </p>
          </div>
          <button
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Open in Full-Screen Viewer</span>
          </button>
        </div>

        <div className="w-full h-96 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white shadow-2xs">
          <iframe
            src={`${cvData.personal.cvPdfUrl}#view=FitH`}
            title="CV Document Preview"
            className="w-full h-full border-none"
          />
        </div>
      </div>

      {/* Back to top / home navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => {
            setActivePage('skills');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          ← Back to Skills
        </button>

        <button
          onClick={() => {
            setActivePage('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Return to Overview ↑
        </button>
      </div>
    </div>
  );
};
