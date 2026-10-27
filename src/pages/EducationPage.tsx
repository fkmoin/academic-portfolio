import React from 'react';
import {
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  Compass,
  ArrowRight,
  FileCheck,
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
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
          <span>Academic Foundation</span>
          <span aria-hidden="true">·</span>
          <span>Applied Sciences & Mathematics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Education & Academic Excellence
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {cvData.personal.summary}
        </p>
      </div>

      {/* Prospective Undergraduate Goal Spotlight */}
      <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide uppercase">
              <Compass className="w-4 h-4" />
              <span>Target Undergraduate Direction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              B.Sc. in Mechanical Engineering
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Globe className="w-3.5 h-3.5" />
              <span>Destination: China</span>
              <span aria-hidden="true">·</span>
              <span>Focus: Innovative Mechanical Systems</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;Currently seeking admission to a Mechanical Engineering undergraduate program in China to leverage technical aptitude in designing innovative mechanical systems.&rdquo;
            </p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/60 lg:min-w-64 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Prerequisites & Foundation
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Advanced Mathematics</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Physics & Mechanics</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Chemistry</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>IELTS Score 6.0 (Overall)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formal Degrees Grid */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Formal Academic Qualifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HSC Card */}
          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tabular-nums">
                2022
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-sm font-medium text-slate-700 mt-1">
                Adamjee Cantonment College
              </p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">Academic Result</span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">GPA 5.00 / 5.00</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Strong focus on Advanced Mathematics, Physics, and Chemistry. Established rigorous analytical thinking and laboratory foundation for mechanical engineering studies.
            </p>

            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <span>Dhaka, Bangladesh</span>
              <span aria-hidden="true">·</span>
              <span>Science Division</span>
            </div>
          </div>

          {/* SSC Card */}
          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-slate-100 rounded-xl text-slate-900">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-500 tabular-nums">
                2020
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-sm font-medium text-slate-700 mt-1">
                Shaheed Ramiz Uddin Cantonment School
              </p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">Academic Result</span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">GPA 5.00 / 5.00</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Maintained an unblemished academic record across general sciences, basic physical concepts, algebra, and geometry.
            </p>

            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <span>Dhaka, Bangladesh</span>
              <span aria-hidden="true">·</span>
              <span>Science Division</span>
            </div>
          </div>
        </div>
      </div>

      {/* English Proficiency Section */}
      <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
              <Globe className="w-4 h-4 text-slate-700" />
              <span>Standardized Language Assessment</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              English Proficiency: IELTS Score 6.0 (Overall)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Demonstrates solid English competence for international university curriculum, technical literature comprehension, and collaborative engineering environments.
            </p>
          </div>

          <div className="shrink-0 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center min-w-36">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              6.0
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">
              Overall Band
            </div>
          </div>
        </div>
      </div>

      {/* Academic Pillars Breakdown based on CV */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Core Scientific Disciplines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-slate-200 rounded-xl">
            <h4 className="text-sm font-bold text-slate-900">Advanced Mathematics</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Integral and differential calculus, trigonometry, coordinate geometry, and algebraic modeling crucial for mechanical calculations.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-xl">
            <h4 className="text-sm font-bold text-slate-900">Physics & Mechanics</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Newtonian mechanics, kinematics, thermodynamics, electromagnetism, and wave theory foundational to mechanical system design.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-xl">
            <h4 className="text-sm font-bold text-slate-900">Chemistry & Material Behavior</h4>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Chemical thermodynamics, bonding structures, material properties, and reactions underlying material science.
            </p>
          </div>
        </div>
      </div>

      {/* Next page navigation banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={onOpenPdfModal}
          className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1.5"
        >
          <BookOpen className="w-4 h-4" />
          <span>Verify on Original CV</span>
        </button>

        <button
          onClick={() => {
            setActivePage('experience');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <span>Next: Professional Experience</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
