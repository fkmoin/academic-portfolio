import React, { useState } from 'react';
import {
  Briefcase,
  Activity,
  Clock,
  CheckCircle2,
  GitBranch,
  Calendar,
  Building2,
  ArrowRight,
  ShieldCheck,
  Zap,
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
    },
    {
      id: 'mri',
      label: 'MRI',
      fullTitle: 'Magnetic Resonance Imaging (MRI)',
      notes: 'High-detail soft tissue and neurological imaging assigned to subspecialized clinical radiologists.',
    },
    {
      id: 'xray',
      label: 'X-Ray',
      fullTitle: 'Digital Radiography (X-Ray)',
      notes: 'High-throughput routine and emergency radiographs scheduled for rapid diagnostic turnaround.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header zone */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
          <span>Healthcare Operations Sector</span>
          <span aria-hidden="true">·</span>
          <span>Logistical Coordination</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Professional Experience
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Operational leadership in telemedicine and teleradiology workflow management at Radiological Solution Bangladesh (RSB).
        </p>
      </div>

      {/* Main Position Banner Card */}
      <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                Full-Time Operations
              </span>
              <span className="text-xs text-slate-500">8 Hours / Day Commitment</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {experience.role}
            </h2>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>{experience.company}</span>
              </div>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center p-4 bg-slate-50 border border-slate-200 rounded-xl min-w-56">
            <span className="text-xs font-medium text-slate-500">Service Tenure</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">21 Months</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Jan 2024 – Sep 2025</span>
          </div>
        </div>

        {/* 4 Core Pillars from CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {experience.bullets.map((bullet, idx) => {
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {bullet.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                  {bullet.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Radiological Task Workflow Visualizer */}
      <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Operational Workflow Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Precision Dispatch & Logistical Synchronization
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Demonstrating the four synchronized phases managed at Radiological Solution Bangladesh (RSB).
            </p>
          </div>

          {/* Interactive Modality Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800 rounded-lg text-xs self-start sm:self-auto">
            <button
              onClick={() => setSelectedModality('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'all'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Modalities
            </button>
            <button
              onClick={() => setSelectedModality('ct')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'ct'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CT Scan
            </button>
            <button
              onClick={() => setSelectedModality('mri')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'mri'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              MRI
            </button>
            <button
              onClick={() => setSelectedModality('xray')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                selectedModality === 'xray'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              X-Ray
            </button>
          </div>
        </div>

        {/* Modality context strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {modalities
            .filter((m) => selectedModality === 'all' || selectedModality === m.id)
            .map((m) => (
              <div
                key={m.id}
                className="p-3.5 bg-slate-800/80 border border-slate-700 rounded-lg space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{m.label}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Modality</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">{m.fullTitle}</div>
                <p className="text-[11px] text-slate-400 leading-normal">{m.notes}</p>
              </div>
            ))}
        </div>

        {/* 4 Steps Flow */}
        <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2">
            <div className="text-xs font-mono text-emerald-400">Step 01 · Intake</div>
            <h4 className="text-sm font-semibold text-white">Diagnostic Center Ingestion</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Diagnostic centers transmit incoming patient scans (CT, MRI, X-Ray) requiring urgent interpretation.
            </p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2">
            <div className="text-xs font-mono text-emerald-400">Step 02 · Allocation</div>
            <h4 className="text-sm font-semibold text-white">Strategic Task Assignment</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Assigned complex radiological tasks strategically to accredited medical radiologists based on clinical subspecialty.
            </p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2">
            <div className="text-xs font-mono text-emerald-400">Step 03 · Synchronization</div>
            <h4 className="text-sm font-semibold text-white">Logistical Tracking</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict synchronization between centers and radiologists, enforcing medical reporting timelines.
            </p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2">
            <div className="text-xs font-mono text-emerald-400">Step 04 · Optimization</div>
            <h4 className="text-sm font-semibold text-white">Turnaround Time Reduction</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Implemented scheduling improvements that expedited patient diagnosis without compromising clinical accuracy.
            </p>
          </div>
        </div>
      </div>

      {/* Academic Discipline & Dual Commitment Proof */}
      <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <Clock className="w-4 h-4 text-slate-700" />
          <span>Work Ethic & Time Management</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Academic Discipline & Professional Rigor
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          &ldquo;Maintained a full-time professional commitment of 8 hours per day while simultaneously pursuing higher academic goals, demonstrating superior time management skills.&rdquo;
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-xs text-slate-500">Daily Commitment</span>
            <div className="text-xl font-bold text-slate-900 tabular-nums">8 Hours / Day</div>
            <span className="text-[11px] text-slate-500">Operational responsibilities</span>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-xs text-slate-500">Academic Goal</span>
            <div className="text-xl font-bold text-slate-900">B.Sc. Preparation</div>
            <span className="text-[11px] text-slate-500">Undergraduate admission target</span>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-xs text-slate-500">Core Demonstration</span>
            <div className="text-xl font-bold text-slate-900">Time Management</div>
            <span className="text-[11px] text-slate-500">Superior organizational stamina</span>
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => {
            setActivePage('education');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          ← Back to Education
        </button>

        <button
          onClick={() => {
            setActivePage('skills');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <span>Next: Skills & Interests</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
