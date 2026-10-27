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
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
          <span>Technical Aptitude & Pursuits</span>
          <span aria-hidden="true">·</span>
          <span>Authentic CV Profile</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Skills, Programming & Interests
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Technical proficiencies, computational logic fundamentals, linguistic competencies, and personal exploratory pursuits.
        </p>
      </div>

      {/* Technical Skills Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-slate-800" />
          <h2 className="text-xl font-bold text-slate-900">Technical Proficiencies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-800">
              <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm">Microsoft Excel</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Data organization, formula modeling, operational tracking, and structured reporting.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-800">
              <Presentation className="w-5 h-5 text-orange-600" />
              <h3 className="font-bold text-sm">PowerPoint</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Technical slide composition, scientific concept structuring, and clear visual delivery.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-800">
              <Monitor className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-sm">OS Diagnostics</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              System health diagnosis, operating system performance troubleshooting, and hardware integrity.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-800">
              <Wrench className="w-5 h-5 text-slate-700" />
              <h3 className="font-bold text-sm">ICT Troubleshooting</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Resolving hardware/software malfunctions, peripheral network setups, and workstation stability.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-800">
              <Search className="w-5 h-5 text-indigo-600" />
              <h3 className="font-bold text-sm">Online Research Skills</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scientific paper retrieval, academic literature investigation, and technical data gathering.
            </p>
          </div>
        </div>
      </div>

      {/* Programming Fundamentals: Python */}
      <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold tracking-wide uppercase">
              <Code className="w-4 h-4" />
              <span>Programming Foundation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Python Programming Fundamentals
            </h3>
            <p className="text-xs text-slate-400">
              Directly aligned with CV specifications: Basic Python variables, loops, conditional logic.
            </p>
          </div>

          {/* Segmented controls for the 3 topics */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800 rounded-lg text-xs self-start sm:self-auto">
            <button
              onClick={() => setActivePythonTopic('variables')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activePythonTopic === 'variables'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Variables
            </button>
            <button
              onClick={() => setActivePythonTopic('loops')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activePythonTopic === 'loops'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Loops
            </button>
            <button
              onClick={() => setActivePythonTopic('conditional')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                activePythonTopic === 'conditional'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Conditional Logic
            </button>
          </div>
        </div>

        {/* Code terminal window */}
        <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
          <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono text-slate-300">
                {pythonSnippets[activePythonTopic].title}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">python3 script.py</span>
          </div>

          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
            <pre>{pythonSnippets[activePythonTopic].code}</pre>
          </div>

          {/* Simulated execution output */}
          <div className="border-t border-slate-800 bg-slate-900/50 p-4">
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono font-semibold mb-1">
              <Play className="w-3 h-3" />
              <span>Program Output:</span>
            </div>
            <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap">
              {pythonSnippets[activePythonTopic].output}
            </pre>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-slate-800" />
          <h2 className="text-xl font-bold text-slate-900">Language Proficiencies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Bangla</span>
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">Native</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mother tongue. Complete native mastery in reading, writing, formal spoken composition, and professional communication.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">English</span>
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">Fluent · IELTS 6.0</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fluent proficiency in academic, technical, and operational documentation, confirmed by standardized IELTS Overall Score 6.0.
            </p>
          </div>
        </div>
      </div>

      {/* Interests & Hobbies Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-slate-800" />
          <h2 className="text-xl font-bold text-slate-900">Interests & Hobbies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvData.interests.map((interest, idx) => {
            const icons = [
              <Languages className="w-5 h-5 text-indigo-600" key={0} />,
              <Compass className="w-5 h-5 text-amber-600" key={1} />,
              <Mic className="w-5 h-5 text-rose-600" key={2} />,
            ];

            return (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200 rounded-xl space-y-3"
              >
                <div className="p-2.5 bg-slate-50 rounded-lg inline-block">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {interest.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => {
            setActivePage('experience');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          ← Back to Experience
        </button>

        <button
          onClick={() => {
            setActivePage('references');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <span>Next: References & Contact</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
