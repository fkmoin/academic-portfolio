import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Languages,
  Compass,
  Mic,
  Globe2,
  FileSpreadsheet,
  Monitor,
  Wrench,
  Search,
  Presentation,
  Play,
  ArrowRight,
} from 'lucide-react';
import { cvData } from '../data/cvData';
import { PageId } from '../components/Navbar';

interface SkillsPageProps {
  setActivePage: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({
  setActivePage,
  onOpenPdfModal,
}) => {
  const [activePythonTopic, setActivePythonTopic] = useState<'variables' | 'loops' | 'conditional'>('variables');

  const pythonSnippets = {
    variables: {
      title: 'Python Variables & Types',
      code: `# Variable assignment & data types
candidate_name = "MD. FAZLUL KABIR MOIN"
hsc_gpa = 5.00
target_program = "Mechanical Engineering"
target_country = "China"
is_academic_perfection = (hsc_gpa == 5.00)

print(f"Candidate: {candidate_name}")
print(f"Undergraduate Goal: {target_program} in {target_country}")
print(f"Perfect GPA Status: {is_academic_perfection}")`,
      output: `Candidate: MD. FAZLUL KABIR MOIN
Undergraduate Goal: Mechanical Engineering in China
Perfect GPA Status: True`,
    },
    loops: {
      title: 'Iterative Loops',
      code: `# Looping through radiological tasks
tasks = ["CT Scan", "MRI", "Digital X-Ray"]

print("Dispatched Clinical Tasks:")
for index, task in enumerate(tasks, start=1):
    print(f"  {index}. Processing {task} protocol...")`,
      output: `Dispatched Clinical Tasks:
  1. Processing CT Scan protocol...
  2. Processing MRI protocol...
  3. Processing Digital X-Ray protocol...`,
    },
    conditional: {
      title: 'Conditional Logic',
      code: `# Turnaround time scheduling logic
turnaround_hours = 4

if turnaround_hours <= 2:
    priority_level = "EMERGENCY - Stat Priority"
elif turnaround_hours <= 6:
    priority_level = "STANDARD - High Precision Dispatch"
else:
    priority_level = "ROUTINE - Scheduled Adherence"

print(f"Computed Priority: {priority_level}")`,
      output: `Computed Priority: STANDARD - High Precision Dispatch`,
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header zone */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/80 rounded-full text-xs font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          <span>Technical Aptitude & Pursuits</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Skills, Programming & Interests
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          Technical proficiencies, computational logic fundamentals, linguistic competencies, and personal exploratory pursuits.
        </p>
      </div>

      {/* Technical Skills Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Technical Proficiencies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Excel */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-white dark:from-emerald-950/20 dark:to-slate-900 border border-emerald-200/80 dark:border-emerald-800/60 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 rounded-lg">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Microsoft Excel</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Data organization, formula modeling, operational tracking, and structured reporting.
            </p>
          </div>

          {/* PowerPoint */}
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-white dark:from-amber-950/20 dark:to-slate-900 border border-amber-200/80 dark:border-amber-800/60 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 rounded-lg">
                <Presentation className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">PowerPoint</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Technical slide composition, scientific concept structuring, and clear visual delivery.
            </p>
          </div>

          {/* OS Diagnostics */}
          <div className="p-5 bg-gradient-to-br from-cyan-50/60 to-white dark:from-cyan-950/20 dark:to-slate-900 border border-cyan-200/80 dark:border-cyan-800/60 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-300 rounded-lg">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">OS Diagnostics</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              System health diagnosis, operating system performance troubleshooting, and hardware integrity.
            </p>
          </div>

          {/* ICT Troubleshooting */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-white dark:from-blue-950/20 dark:to-slate-900 border border-blue-200/80 dark:border-blue-800/60 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 rounded-lg">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">ICT Troubleshooting</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Resolving hardware/software malfunctions, peripheral network setups, and workstation stability.
            </p>
          </div>

          {/* Online Research */}
          <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-white dark:from-indigo-950/20 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-800/60 rounded-xl space-y-2 hover:shadow-xs transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300 rounded-lg">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Online Research Skills</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Scientific paper retrieval, academic literature investigation, and technical data gathering.
            </p>
          </div>
        </div>
      </div>

      {/* Programming Fundamentals: Python Terminal */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-2xl shadow-xl space-y-6 border border-indigo-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
              <Code className="w-4 h-4" />
              <span>Programming Foundation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Python Programming Fundamentals
            </h3>
            <p className="text-xs text-slate-300">
              Directly aligned with CV specifications: Basic Python variables, loops, conditional logic.
            </p>
          </div>

          {/* Segmented controls for the 3 topics */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800/90 rounded-lg text-xs self-start sm:self-auto border border-slate-700">
            <button
              onClick={() => setActivePythonTopic('variables')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activePythonTopic === 'variables'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Variables
            </button>
            <button
              onClick={() => setActivePythonTopic('loops')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activePythonTopic === 'loops'
                  ? 'bg-indigo-600 text-white font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Loops
            </button>
            <button
              onClick={() => setActivePythonTopic('conditional')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activePythonTopic === 'conditional'
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Conditional Logic
            </button>
          </div>
        </div>

        {/* Code terminal window */}
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-300 ml-2">
                {pythonSnippets[activePythonTopic].title}
              </span>
            </div>
            <span className="text-[11px] font-mono text-indigo-400">python3 script.py</span>
          </div>

          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-cyan-200 overflow-x-auto leading-relaxed">
            <pre>{pythonSnippets[activePythonTopic].code}</pre>
          </div>

          {/* Simulated execution output */}
          <div className="border-t border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono font-bold mb-1">
              <Play className="w-3 h-3" />
              <span>Execution Output:</span>
            </div>
            <pre className="text-xs font-mono text-emerald-300/90 whitespace-pre-wrap">
              {pythonSnippets[activePythonTopic].output}
            </pre>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Language Proficiencies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 dark:from-emerald-950/20 dark:via-slate-900 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/60 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="text-lg font-bold text-slate-900 dark:text-white">Bangla</span>
              </div>
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
                Native Language
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Mother tongue. Complete native mastery in reading, writing, formal spoken composition, and professional communication.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="text-lg font-bold text-slate-900 dark:text-white">English</span>
              </div>
              <span className="text-xs font-bold text-blue-800 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/60 px-2.5 py-1 rounded-md">
                Fluent · IELTS 6.0 Overall
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Fluent proficiency in academic, technical, and operational documentation, confirmed by standardized IELTS Overall Score 6.0.
            </p>
          </div>
        </div>
      </div>

      {/* Interests & Hobbies Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Interests & Hobbies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Linguistic Exploration */}
          <div className="p-6 bg-gradient-to-br from-purple-50/60 to-white dark:from-purple-950/20 dark:to-slate-900 border border-purple-200/80 dark:border-purple-800/60 rounded-xl space-y-3 hover:shadow-xs transition-shadow">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 rounded-xl inline-block">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {cvData.interests[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cvData.interests[0].description}
            </p>
          </div>

          {/* Global Exploration */}
          <div className="p-6 bg-gradient-to-br from-amber-50/60 to-white dark:from-amber-950/20 dark:to-slate-900 border border-amber-200/80 dark:border-amber-800/60 rounded-xl space-y-3 hover:shadow-xs transition-shadow">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 rounded-xl inline-block">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {cvData.interests[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cvData.interests[1].description}
            </p>
          </div>

          {/* Vocal Arts */}
          <div className="p-6 bg-gradient-to-br from-rose-50/60 to-white dark:from-rose-950/20 dark:to-slate-900 border border-rose-200/80 dark:border-rose-800/60 rounded-xl space-y-3 hover:shadow-xs transition-shadow">
            <div className="p-3 bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 rounded-xl inline-block">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {cvData.interests[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {cvData.interests[2].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => {
            setActivePage('experience');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          ← Back to Experience
        </button>

        <button
          onClick={() => {
            setActivePage('references');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg shadow-sm transition-all"
        >
          <span>Next: References & Contact</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
