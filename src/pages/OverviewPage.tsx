import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Code,
  Users,
  MapPin,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  ExternalLink,
  Award,
  BookOpen,
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { PageId } from '../components/Navbar';

interface OverviewPageProps {
  setActivePage: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({
  setActivePage,
  onOpenPdfModal,
}) => {
  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Hero Split Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
              <span>Candidate Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Applied Sciences & Mathematics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
              {cvData.personal.fullName}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {cvData.personal.summary}
            </p>

            {/* Contact quick links */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{cvData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${cvData.personal.email}`} className="hover:text-slate-900 underline">
                  {cvData.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`tel:${cvData.personal.phone}`} className="hover:text-slate-900 underline">
                  {cvData.personal.phone}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setActivePage('education');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Academic Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>View CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Photo & Verification Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative bg-white p-3 rounded-2xl border border-slate-200 shadow-lg">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                  <img
                    src={cvData.personal.photoUrl}
                    alt={cvData.personal.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">{cvData.personal.fullName}</span>
                  <span>Applicant ID · CV Photo</span>
                </div>
              </div>

              {/* Floating verified academic pill-less card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900 text-white p-4 rounded-xl shadow-xl max-w-xs border border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold text-white">Perfect Academic Record</span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  HSC GPA 5.00/5.00 · SSC GPA 5.00/5.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Highlights Row below the hero split */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">5.00 / 5.00</div>
            <div className="mt-1 text-xs font-semibold text-slate-900">HSC Examination (2022)</div>
            <div className="text-xs text-slate-500">Adamjee Cantonment College</div>
          </div>

          <div className="p-3 border-l border-slate-100 md:border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">5.00 / 5.00</div>
            <div className="mt-1 text-xs font-semibold text-slate-900">SSC Examination (2020)</div>
            <div className="text-xs text-slate-500">Shaheed Ramiz Uddin School</div>
          </div>

          <div className="p-3 border-t md:border-t-0 md:border-l border-slate-100 md:border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">IELTS 6.0</div>
            <div className="mt-1 text-xs font-semibold text-slate-900">English Proficiency</div>
            <div className="text-xs text-slate-500">Overall Band Score</div>
          </div>

          <div className="p-3 border-t md:border-t-0 border-l border-slate-100 md:border-slate-200">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">Jan 24 – Sep 25</div>
            <div className="mt-1 text-xs font-semibold text-slate-900">Operations Executive</div>
            <div className="text-xs text-slate-500">Radiological Solution Bangladesh</div>
          </div>
        </div>
      </section>

      {/* Multi-Page Exploration Bento Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Curriculum Sections
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Navigate through the detailed pages compiled directly from the curriculum vitae.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Education */}
          <div
            onClick={() => {
              setActivePage('education');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-xs font-medium text-slate-400 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                  <span>View Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-slate-900">
                Education & Academic Excellence
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Perfect GPA record at Adamjee Cantonment College and Shaheed Ramiz Uddin Cantonment School. Advanced Mathematics, Physics, Chemistry, and IELTS 6.0 overall proficiency.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                <span>HSC (2022)</span>
                <span aria-hidden="true">·</span>
                <span>SSC (2020)</span>
                <span aria-hidden="true">·</span>
                <span>China Undergraduate Objective</span>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Experience */}
          <div
            onClick={() => {
              setActivePage('experience');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-xs font-medium text-slate-400 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                  <span>View Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-slate-900">
                Professional Experience at RSB
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Operations Executive at Radiological Solution Bangladesh (Jan 2024 – Sep 2025). Process coordination for CT Scan, MRI, and X-Ray, logistical synchronization, and efficiency optimization.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                <span>Healthcare Operations</span>
                <span aria-hidden="true">·</span>
                <span>8 Hours/Day Discipline</span>
                <span aria-hidden="true">·</span>
                <span>Diagnostic Coordination</span>
              </div>
            </div>
          </div>

          {/* Card 3: Skills & Interests */}
          <div
            onClick={() => {
              setActivePage('skills');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <div className="text-xs font-medium text-slate-400 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                  <span>View Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-slate-900">
                Technical Skills & Interests
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Microsoft Excel, PowerPoint, OS diagnostics, ICT troubleshooting, Python programming fundamentals, Bangla, English, and personal interests in linguistics and vocal arts.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                <span>Python Fundamentals</span>
                <span aria-hidden="true">·</span>
                <span>OS Diagnostics</span>
                <span aria-hidden="true">·</span>
                <span>Linguistic Exploration</span>
              </div>
            </div>
          </div>

          {/* Card 4: References & Contact */}
          <div
            onClick={() => {
              setActivePage('references');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-medium text-slate-400 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                  <span>View Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-slate-900">
                Verified References & Contact
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Academic reference from Adamjee Cantonment College (Mathematics) and professional reference from RSB (Chief Technology Officer), along with authentic signature verification.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
                <span>Md Suman Talukder</span>
                <span aria-hidden="true">·</span>
                <span>Md. Fayez Ahmed Fayem</span>
                <span aria-hidden="true">·</span>
                <span>Official Signature</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Document Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <BookOpen className="w-4 h-4 text-slate-300" />
              <span>Authentic Source File</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">
              Original Curriculum Vitae Document
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Inspect the official signed 2-page document submitted for academic admission to Mechanical Engineering in China.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPdfModal}
              className="px-4 py-2.5 bg-white text-slate-900 text-xs font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
            >
              Preview PDF
            </button>
            <a
              href={cvData.personal.cvPdfUrl}
              download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
              className="px-4 py-2.5 bg-slate-800 text-white border border-slate-700 text-xs font-medium rounded-lg hover:bg-slate-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
