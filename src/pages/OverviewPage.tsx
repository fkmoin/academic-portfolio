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
    <div className="space-y-16 py-6 sm:py-10 bg-radial-gradient-hero">
      {/* Hero Split Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>Applied Sciences & Healthcare Operations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
              {cvData.personal.fullName}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {cvData.personal.summary}
            </p>

            {/* Contact quick links with colorful icon accents */}
            <div className="pt-2 flex flex-wrap gap-y-2.5 gap-x-6 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{cvData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <a href={`mailto:${cvData.personal.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  {cvData.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a href={`tel:${cvData.personal.phone}`} className="hover:text-emerald-700 dark:hover:text-emerald-400 font-medium tabular-nums transition-colors">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>Academic Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActivePage('experience');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/60 rounded-lg transition-colors"
              >
                <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Professional Experience</span>
              </button>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>View CV PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Photo & Verification Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl ring-4 ring-blue-500/10 dark:ring-blue-500/20">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
                  <img
                    src={cvData.personal.photoUrl}
                    alt={cvData.personal.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-xl pointer-events-none" />
                </div>
                <div className="mt-3 px-2 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{cvData.personal.fullName}</span>
                  <span className="text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60">
                    Verified Candidate
                  </span>
                </div>
              </div>

              {/* Floating verified academic card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-4 rounded-xl shadow-xl max-w-xs border border-indigo-500/30">
                <div className="flex items-center gap-2 text-xs text-amber-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white tracking-wide">Perfect Academic Record</span>
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  HSC GPA 5.00/5.00 · SSC GPA 5.00/5.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Highlights Row with Dark/Light Tints */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* KPI 1: HSC */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/70 to-white dark:from-emerald-950/30 dark:to-slate-900 border border-emerald-200/80 dark:border-emerald-800/60 rounded-2xl shadow-2xs hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">HSC (2022)</span>
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-emerald-950 dark:text-emerald-200 tabular-nums">5.00 / 5.00</div>
            <div className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">Adamjee Cantonment College</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Advanced Math, Physics, Chem</div>
          </div>

          {/* KPI 2: SSC */}
          <div className="p-5 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/30 dark:to-slate-900 border border-blue-200/80 dark:border-blue-800/60 rounded-2xl shadow-2xs hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">SSC (2020)</span>
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-blue-950 dark:text-blue-200 tabular-nums">5.00 / 5.00</div>
            <div className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">Shaheed Ramiz Uddin School</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Perfect Unblemished GPA</div>
          </div>

          {/* KPI 3: IELTS */}
          <div className="p-5 bg-gradient-to-br from-indigo-50/70 to-white dark:from-indigo-950/30 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-800/60 rounded-2xl shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">English Test</span>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">IELTS</span>
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-indigo-950 dark:text-indigo-200 tabular-nums">Band 6.0</div>
            <div className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">Overall Proficiency</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Standardized Language Score</div>
          </div>

          {/* KPI 4: Operations Executive */}
          <div className="p-5 bg-gradient-to-br from-teal-50/70 to-white dark:from-teal-950/30 dark:to-slate-900 border border-teal-200/80 dark:border-teal-800/60 rounded-2xl shadow-2xs hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">Healthcare Ops</span>
              <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="mt-2 text-xl sm:text-2xl font-extrabold text-teal-950 dark:text-teal-200 tabular-nums">Jan 24 – Sep 25</div>
            <div className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">Operations Executive</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Radiological Solution Bangladesh</div>
          </div>
        </div>
      </section>

      {/* Multi-Page Exploration Bento Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Curriculum Sections</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Explore Portfolio Pages
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
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
            className="group cursor-pointer p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Education & Academic Excellence
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Perfect GPA record at Adamjee Cantonment College and Shaheed Ramiz Uddin Cantonment School. Advanced Mathematics, Physics, Chemistry, and IELTS 6.0 overall proficiency.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">HSC (2022) · 5.00</span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">SSC (2020) · 5.00</span>
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">China B.Sc. Target</span>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Experience */}
          <div
            onClick={() => {
              setActivePage('experience');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500" />
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                Professional Experience at RSB
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Operations Executive at Radiological Solution Bangladesh (Jan 2024 – Sep 2025). Process coordination for CT Scan, MRI, and X-Ray, logistical synchronization, and efficiency optimization.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-medium">CT Scan, MRI, X-Ray</span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">8 Hours/Day Discipline</span>
              </div>
            </div>
          </div>

          {/* Card 3: Skills & Interests */}
          <div
            onClick={() => {
              setActivePage('skills');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Technical Skills & Programming
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Microsoft Excel, PowerPoint, OS diagnostics, ICT troubleshooting, Python programming fundamentals, Bangla, English, and personal interests in linguistics and vocal arts.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">Python Variables & Loops</span>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-medium">OS Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Card 4: References & Contact */}
          <div
            onClick={() => {
              setActivePage('references');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500" />
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                Verified References & Contact
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Academic reference from Adamjee Cantonment College (Mathematics) and professional reference from RSB (Chief Technology Officer), along with authentic signature verification.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-medium">Prof. Suman Talukder</span>
                <span className="px-2.5 py-0.5 rounded-md bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-medium">CTO Fayez Ahmed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Document Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg border border-indigo-900/50">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide uppercase">
              <BookOpen className="w-4 h-4 text-amber-400" />
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
              className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm"
            >
              Preview PDF
            </button>
            <a
              href={cvData.personal.cvPdfUrl}
              download="MD_FAZLUL_KABIR_MOIN_CV.pdf"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-medium rounded-lg transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
