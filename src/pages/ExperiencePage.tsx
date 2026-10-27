import React, { useState } from 'react';
import {
  Briefcase,
  Activity,
  Clock,
  Calendar,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { PageId } from '../components/Navbar';

interface ExperiencePageProps {
  setActivePage: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  setActivePage,
  onOpenPdfModal,
}) => {
  const [selectedModality, setSelectedModality] = useState<'all' | 'ct' | 'mri' | 'xray'>('all');

  const experience = cvData.experience[0];

  const modalities = [
    {
      id: 'ct',
      label: 'CT Scan',
      fullTitle: 'Computed Tomography (CT)',
      notes: 'Multi-slice cross-sectional imaging cases prioritized according to clinical urgency and diagnostic protocols.',
      colorClass: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300',
      badgeClass: 'bg-cyan-500/20 text-cyan-300',
    },
    {
      id: 'mri',
      label: 'MRI',
      fullTitle: 'Magnetic Resonance Imaging (MRI)',
      notes: 'High-detail soft tissue and neurological imaging assigned to subspecialized clinical radiologists.',
      colorClass: 'border-indigo-500/40 bg-indigo-950/40 text-indigo-300',
      badgeClass: 'bg-indigo-500/20 text-indigo-300',
    },
    {
      id: 'xray',
      label: 'X-Ray',
      fullTitle: 'Digital Radiography (X-Ray)',
      notes: 'High-throughput routine and emergency radiographs scheduled for rapid diagnostic turnaround.',
      colorClass: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
      badgeClass: 'bg-emerald-500/20 text-emerald-300',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header zone */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800/80 rounded-full text-xs font-semibold text-teal-700 dark:text-teal-300 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
          <span>Healthcare Operations · Precision Coordination</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Professional Experience
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          Operational leadership in telemedicine and teleradiology workflow management at Radiological Solution Bangladesh (RSB).
        </p>
      </div>

      {/* Main Position Banner Card */}
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-3 py-1 rounded-md">
                Full-Time Operations
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                8 Hours / Day Commitment
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {experience.role}
            </h2>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-semibold">
                <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{experience.company}</span>
              </div>
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="tabular-nums">{experience.period}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50/50 dark:from-teal-950/40 dark:to-cyan-950/30 border border-teal-200/80 dark:border-teal-800/60 rounded-xl min-w-56 shadow-2xs">
            <span className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">Service Duration</span>
            <span className="text-xl font-extrabold text-teal-950 dark:text-teal-200 tabular-nums">21 Months</span>
            <span className="text-xs text-teal-700 dark:text-teal-300 mt-0.5">January 2024 – September 2025</span>
          </div>
        </div>

        {/* 4 Core Pillars from CV with rich colored badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.bullets.map((bullet, idx) => {
            const pillarColors = [
              { border: 'border-cyan-200 dark:border-cyan-800/60', bg: 'bg-cyan-50/50 dark:bg-cyan-950/20', badge: 'bg-cyan-600 text-white', tag: 'text-cyan-800 dark:text-cyan-300' },
              { border: 'border-blue-200 dark:border-blue-800/60', bg: 'bg-blue-50/50 dark:bg-blue-950/20', badge: 'bg-blue-600 text-white', tag: 'text-blue-800 dark:text-blue-300' },
              { border: 'border-emerald-200 dark:border-emerald-800/60', bg: 'bg-emerald-50/50 dark:bg-emerald-950/20', badge: 'bg-emerald-600 text-white', tag: 'text-emerald-800 dark:text-emerald-300' },
              { border: 'border-indigo-200 dark:border-indigo-800/60', bg: 'bg-indigo-50/50 dark:bg-indigo-950/20', badge: 'bg-indigo-600 text-white', tag: 'text-indigo-800 dark:text-indigo-300' },
            ];
            const currentStyle = pillarColors[idx % pillarColors.length];

            return (
              <div
                key={idx}
                className={`p-5 rounded-xl ${currentStyle.bg} border ${currentStyle.border} space-y-2.5 transition-all hover:shadow-xs`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg ${currentStyle.badge} flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs`}>
                    0{idx + 1}
                  </div>
                  <h3 className={`text-base font-bold ${currentStyle.tag}`}>
                    {bullet.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-9">
                  {bullet.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Radiological Task Workflow Visualizer */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white rounded-2xl shadow-xl space-y-6 border border-teal-500/20 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Operational Workflow Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Precision Dispatch & Logistical Synchronization
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Demonstrating the four synchronized phases managed at Radiological Solution Bangladesh (RSB).
            </p>
          </div>

          {/* Interactive Modality Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800/90 rounded-lg text-xs self-start sm:self-auto border border-slate-700">
            <button
              onClick={() => setSelectedModality('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'all'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Modalities
            </button>
            <button
              onClick={() => setSelectedModality('ct')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'ct'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              CT Scan
            </button>
            <button
              onClick={() => setSelectedModality('mri')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'mri'
                  ? 'bg-indigo-500 text-white font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              MRI
            </button>
            <button
              onClick={() => setSelectedModality('xray')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'xray'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              X-Ray
            </button>
          </div>
        </div>

        {/* Modality context strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
          {modalities
            .filter((m) => selectedModality === 'all' || selectedModality === m.id)
            .map((m) => (
              <div
                key={m.id}
                className={`p-4 rounded-xl border ${m.colorClass} space-y-1.5 transition-all`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{m.label}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${m.badgeClass}`}>
                    Radiology
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-200">{m.fullTitle}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{m.notes}</p>
              </div>
            ))}
        </div>

        {/* 4 Steps Flow */}
        <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-800/60 rounded-xl border border-blue-500/30 space-y-2">
            <div className="text-xs font-mono font-bold text-blue-400">Step 01 · Intake</div>
            <h4 className="text-sm font-semibold text-white">Diagnostic Center Ingestion</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Diagnostic centers transmit incoming patient scans (CT, MRI, X-Ray) requiring urgent interpretation.
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-xl border border-cyan-500/30 space-y-2">
            <div className="text-xs font-mono font-bold text-cyan-400">Step 02 · Allocation</div>
            <h4 className="text-sm font-semibold text-white">Strategic Task Assignment</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Assigned complex radiological tasks strategically to accredited medical radiologists based on clinical subspecialty.
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-xl border border-teal-500/30 space-y-2">
            <div className="text-xs font-mono font-bold text-teal-400">Step 03 · Synchronization</div>
            <h4 className="text-sm font-semibold text-white">Logistical Tracking</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Strict synchronization between centers and radiologists, maintaining compliance with medical reporting timelines.
            </p>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-xl border border-emerald-500/30 space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-400">Step 04 · Optimization</div>
            <h4 className="text-sm font-semibold text-white">Turnaround Time Reduction</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Implemented scheduling improvements that expedited patient diagnosis without compromising clinical accuracy.
            </p>
          </div>
        </div>
      </div>

      {/* Academic Discipline & Dual Commitment Proof */}
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
          <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>Work Ethic & Time Management</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Academic Discipline & Professional Rigor
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
          &ldquo;Maintained a full-time professional commitment of 8 hours per day while simultaneously pursuing higher academic goals, demonstrating superior time management skills.&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/30 dark:to-slate-900 border border-teal-200 dark:border-teal-800/60 rounded-xl">
            <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">Daily Commitment</span>
            <div className="text-2xl font-extrabold text-teal-950 dark:text-teal-200 tabular-nums mt-1">8 Hours / Day</div>
            <span className="text-xs text-slate-600 dark:text-slate-400">Operations executive duty</span>
          </div>
          <div className="p-5 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-800/60 rounded-xl">
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">Academic Pursuit</span>
            <div className="text-2xl font-extrabold text-blue-950 dark:text-blue-200 mt-1">B.Sc. Objective</div>
            <span className="text-xs text-slate-600 dark:text-slate-400">China Mechanical Eng admission</span>
          </div>
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-900 border border-indigo-200 dark:border-indigo-800/60 rounded-xl">
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">Core Demonstrated Quality</span>
            <div className="text-2xl font-extrabold text-indigo-950 dark:text-indigo-200 mt-1">Time Management</div>
            <span className="text-xs text-slate-600 dark:text-slate-400">High-volume discipline</span>
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => {
            setActivePage('education');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          ← Back to Education
        </button>

        <button
          onClick={() => {
            setActivePage('skills');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 rounded-lg shadow-sm transition-all"
        >
          <span>Next: Skills & Programming</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
