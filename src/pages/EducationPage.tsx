import React from 'react';
import {
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  Compass,
  ArrowRight,
  FileCheck,
  CheckCircle2,
  Atom,
  Binary,
  FlaskConical,
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { PageId } from '../components/Navbar';

interface EducationPageProps {
  setActivePage: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({
  setActivePage,
  onOpenPdfModal,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header zone */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-300 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
          <span>Academic Foundation · Applied Sciences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Education & Academic Excellence
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {cvData.personal.summary}
        </p>
      </div>

      {/* Prospective Undergraduate Goal Spotlight */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 font-semibold tracking-wide uppercase">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Target Undergraduate Direction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              B.Sc. in Mechanical Engineering
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-white font-medium">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Destination: China</span>
              </span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className="text-blue-200">Objective: Designing Innovative Mechanical Systems</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;Currently seeking admission to a Mechanical Engineering undergraduate program in China to leverage technical aptitude in designing innovative mechanical systems.&rdquo;
            </p>
          </div>

          <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 lg:min-w-64 space-y-3 shadow-lg">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Prerequisites & Strengths</span>
            </div>
            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Advanced Mathematics (HSC 5.00)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Physics & Mechanics Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chemistry & Material Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IELTS Overall Band 6.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formal Degrees Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Formal Academic Qualifications
          </h2>
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
            100% Unblemished Results
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HSC Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md transition-all space-y-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600" />
            <div className="flex items-start justify-between">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-800 tabular-nums">
                Year 2022
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mt-1">
                Adamjee Cantonment College
              </p>
            </div>

            <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 rounded-xl flex items-center justify-between">
              <span className="text-xs text-emerald-900 dark:text-emerald-300 font-semibold">Official Result</span>
              <span className="text-base font-extrabold text-emerald-800 dark:text-emerald-300 tabular-nums">
                GPA 5.00 / 5.00
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Strong focus on Advanced Mathematics, Physics, and Chemistry. Formed rigorous analytical thinking, calculus mastery, and problem-solving fundamentals for mechanical systems.
            </p>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="font-medium text-slate-700 dark:text-slate-300">Adamjee Cantonment, Dhaka</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">Science Division</span>
            </div>
          </div>

          {/* SSC Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all space-y-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <div className="flex items-start justify-between">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-400 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold rounded-full border border-blue-200 dark:border-blue-800 tabular-nums">
                Year 2020
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-400 mt-1">
                Shaheed Ramiz Uddin Cantonment School
              </p>
            </div>

            <div className="p-4 bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 rounded-xl flex items-center justify-between">
              <span className="text-xs text-blue-900 dark:text-blue-300 font-semibold">Official Result</span>
              <span className="text-base font-extrabold text-blue-800 dark:text-blue-300 tabular-nums">
                GPA 5.00 / 5.00
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Maintained an unblemished academic record across general sciences, fundamental physical concepts, algebra, geometry, and technical comprehension.
            </p>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="font-medium text-slate-700 dark:text-slate-300">Dhaka Cantonment, Dhaka</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-700 dark:text-blue-400 font-medium">Science Division</span>
            </div>
          </div>
        </div>
      </div>

      {/* English Proficiency Section */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-800/80 rounded-2xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Standardized Language Assessment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              English Proficiency: IELTS Score 6.0 (Overall)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Demonstrates solid English language capability for international higher education, technical textbook comprehension, and global engineering teamwork.
            </p>
          </div>

          <div className="shrink-0 p-5 bg-white dark:bg-slate-800/90 border border-indigo-200 dark:border-indigo-700 rounded-2xl text-center min-w-40 shadow-xs">
            <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">IELTS Overall</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-900 dark:text-indigo-200 tabular-nums mt-0.5">
              6.0
            </div>
            <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mt-1.5">
              Competent User
            </div>
          </div>
        </div>
      </div>

      {/* Core Scientific Disciplines Breakdown */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Core Scientific Disciplines from CV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 rounded-lg inline-block">
              <Binary className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Advanced Mathematics</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Differential & integral calculus, trigonometry, coordinate geometry, and algebraic modeling crucial for mechanical calculations.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
            <div className="p-2.5 bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 rounded-lg inline-block">
              <Atom className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Physics & Mechanics</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Newtonian mechanics, kinematics, thermodynamics, electromagnetism, and wave theory foundational to mechanical system design.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 rounded-lg inline-block">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Chemistry & Materials</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Chemical thermodynamics, bonding structures, material properties, and reactions underlying material science.
            </p>
          </div>
        </div>
      </div>

      {/* Next page navigation banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={onOpenPdfModal}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Verify on Original CV PDF</span>
        </button>

        <button
          onClick={() => {
            setActivePage('experience');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-sm transition-all"
        >
          <span>Next: Professional Experience</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
