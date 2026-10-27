import React, { useState } from 'react';
import {
  Users,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  FileDown,
  Building2,
  GraduationCap,
  ShieldCheck,
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
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
          <span>Verification & Endorsement</span>
          <span aria-hidden="true">·</span>
          <span>Contact Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          References & Direct Contact
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Academic and professional references, verified contact information, and authentic digital signature from the curriculum vitae.
        </p>
      </div>

      {/* References Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-slate-800" />
          <h2 className="text-xl font-bold text-slate-900">Academic & Professional References</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reference 1: Md Suman Talukder */}
          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  Academic Reference
                </span>
                <GraduationCap className="w-5 h-5 text-slate-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {cvData.references[0].name}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  {cvData.references[0].title}
                </p>
                <p className="text-xs text-slate-500">
                  {cvData.references[0].department}
                </p>
                <p className="text-xs font-medium text-slate-600 mt-0.5">
                  {cvData.references[0].organization}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Supervised academic coursework in Advanced Mathematics at Adamjee Cantonment College during HSC studies (Result: GPA 5.00/5.00).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`mailto:${cvData.references[0].email}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-900 hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{cvData.references[0].email}</span>
              </a>

              <button
                onClick={() => handleCopy(cvData.references[0].email, 'ref1')}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-100 transition-colors"
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
          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  Professional Reference
                </span>
                <Building2 className="w-5 h-5 text-slate-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {cvData.references[1].name}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  {cvData.references[1].title}
                </p>
                <p className="text-xs font-medium text-slate-600 mt-0.5">
                  {cvData.references[1].organization}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Executive leadership reference verifying operational performance as Operations Executive at RSB (Jan 2024 – Sep 2025).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`mailto:${cvData.references[1].email}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-900 hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{cvData.references[1].email}</span>
              </a>

              <button
                onClick={() => handleCopy(cvData.references[1].email, 'ref2')}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-100 transition-colors"
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
      <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
              <span>Candidate Record</span>
              <span aria-hidden="true">·</span>
              <span>Direct Contact</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {cvData.personal.fullName}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Applicant for Mechanical Engineering Undergraduate Program
            </p>
          </div>

          {/* Signature block directly extracted from CV */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center min-w-56">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Applicant Signature
            </span>
            <img
              src={cvData.personal.signatureUrl}
              alt="Md. Fazlul Kabir Moin Official Signature"
              className="h-10 object-contain mix-blend-multiply"
            />
            <span className="text-[10px] text-slate-400 mt-1">Verified on CV Page 2</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <MapPin className="w-4 h-4 text-slate-600" />
                <span>Location</span>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.location, 'loc')}
                className="p-1 hover:bg-slate-200 rounded transition-colors"
                title="Copy location"
              >
                {copiedKey === 'loc' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">
              {cvData.personal.location}
            </p>
          </div>

          {/* Phone */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Phone</span>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.phone, 'phone')}
                className="p-1 hover:bg-slate-200 rounded transition-colors"
                title="Copy phone"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 tabular-nums">
              <a href={`tel:${cvData.personal.phone}`} className="hover:underline">
                {cvData.personal.phone}
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Email Address</span>
              </div>
              <button
                onClick={() => handleCopy(cvData.personal.email, 'email')}
                className="p-1 hover:bg-slate-200 rounded transition-colors"
                title="Copy email"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
              <a href={`mailto:${cvData.personal.email}`} className="hover:underline">
                {cvData.personal.email}
              </a>
            </p>
          </div>
        </div>

        {/* Action button to email */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${cvData.personal.email}?subject=Undergraduate%20Mechanical%20Engineering%20Inquiry%20-%20Md.%20Fazlul%20Kabir%20Moin`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Direct Email</span>
          </a>

          <a
            href={cvData.personal.cvPdfUrl}
            download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-slate-600" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer Section */}
      <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Official Curriculum Vitae (PDF)
            </h3>
            <p className="text-xs text-slate-600">
              Full 2-page document with academic and professional history.
            </p>
          </div>
          <button
            onClick={onOpenPdfModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open in Full-Screen Viewer</span>
          </button>
        </div>

        <div className="w-full h-96 rounded-xl overflow-hidden border border-slate-200 bg-white">
          <iframe
            src={`${cvData.personal.cvPdfUrl}#view=FitH`}
            title="CV Document Preview"
            className="w-full h-full border-none"
          />
        </div>
      </div>

      {/* Back to top / home navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button
          onClick={() => {
            setActivePage('skills');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          ← Back to Skills
        </button>

        <button
          onClick={() => {
            setActivePage('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          Return to Overview ↑
        </button>
      </div>
    </div>
  );
};
