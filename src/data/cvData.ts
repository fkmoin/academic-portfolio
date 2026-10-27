export interface CVData {
  personal: {
    fullName: string;
    location: string;
    phone: string;
    email: string;
    photoUrl: string;
    signatureUrl: string;
    cvPdfUrl: string;
    summary: string;
    academicObjective: string;
  };
  education: Array<{
    degree: string;
    year: string;
    institution: string;
    result: string;
    focus?: string;
  }>;
  englishProficiency: {
    test: string;
    score: string;
  };
  experience: Array<{
    role: string;
    company: string;
    period: string;
    bullets: Array<{
      title: string;
      description: string;
    }>;
  }>;
  skills: {
    technical: string[];
    programming: {
      language: string;
      topics: string[];
    };
    languages: Array<{
      language: string;
      proficiency: string;
    }>;
  };
  interests: Array<{
    title: string;
    description: string;
  }>;
  references: Array<{
    name: string;
    title: string;
    department?: string;
    organization: string;
    email: string;
  }>;
}

export const cvData: CVData = {
  personal: {
    fullName: "MD. FAZLUL KABIR MOIN",
    location: "Ward-6, Village: Jawadi, Gazipur, Bangladesh",
    phone: "+8801886956398",
    email: "moin14092004@gmail.com",
    photoUrl: "/assets/moin_portrait.jpg",
    signatureUrl: "/assets/moin_signature.jpg",
    cvPdfUrl: "/assets/aistudio/MD._FAZLUL_KABIR_MOIN__CV__61559e36.pdf",
    summary:
      "A high-performing Science student with a perfect academic record and a strong foundation in Applied Sciences and Mathematics. Demonstrates, exceptional analytical thinking and logistical coordination through professional experience in the healthcare operations sector. Currently seeking admission to a Mechanical Engineering undergraduate program in China to leverage technical aptitude in designing innovative mechanical systems.",
    academicObjective:
      "Currently seeking admission to a Mechanical Engineering undergraduate program in China to leverage technical aptitude in designing innovative mechanical systems.",
  },
  education: [
    {
      degree: "Higher Secondary Certificate (HSC)",
      year: "2022",
      institution: "Adamjee Cantonment College",
      result: "GPA 5.00/5.00",
      focus: "Strong focus on Advanced Mathematics, Physics, and Chemistry.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      year: "2020",
      institution: "Shaheed Ramiz Uddin Cantonment School",
      result: "GPA 5.00/5.00",
    },
  ],
  englishProficiency: {
    test: "IELTS",
    score: "Score 6.0 (Overall)",
  },
  experience: [
    {
      role: "Operations Executive",
      company: "Radiological Solution Bangladesh(RSB)",
      period: "January 2024 – September 2025",
      bullets: [
        {
          title: "Process Coordination",
          description:
            "Strategically assigned complex radiological tasks (CT Scan, MRI, X-Ray) to medical specialists, ensuring a high-precision workflow.",
        },
        {
          title: "Logistical Management",
          description:
            "Successfully synchronized operations between diagnostic centers and radiologists, maintaining strict adherence to medical reporting timelines.",
        },
        {
          title: "Efficiency Optimization",
          description:
            "Implemented scheduling improvements that reduced turnaround time for patient diagnostics.",
        },
        {
          title: "Academic Discipline",
          description:
            "Maintained a full-time professional commitment of 8 hours per day while simultaneously pursuing higher academic goals, demonstrating superior time management skills.",
        },
      ],
    },
  ],
  skills: {
    technical: [
      "Microsoft Excel",
      "PowerPoint",
      "OS diagnostics",
      "ICT troubleshooting",
      "Online research skills",
    ],
    programming: {
      language: "Python",
      topics: ["Basic Python variables", "loops", "conditional logic"],
    },
    languages: [
      {
        language: "Bangla",
        proficiency: "Native",
      },
      {
        language: "English",
        proficiency: "Fluent",
      },
    ],
  },
  interests: [
    {
      title: "Linguistic Exploration",
      description:
        "Passionate about learning new languages to bridge communication gaps and understand diverse cultures.",
    },
    {
      title: "Global Exploration",
      description:
        "Keen interest in traveling and exploring domestic and international destinations to understand geographical and industrial landscapes.",
    },
    {
      title: "Vocal Arts",
      description:
        "Enthusiastic about singing and performing, which has contributed to building public speaking confidence and creative expression.",
    },
  ],
  references: [
    {
      name: "Md Suman Talukder",
      title: "Assistant Professor",
      department: "Department of Mathematics",
      organization: "Adamjee Cantonment College",
      email: "suman@acc.edu.bd",
    },
    {
      name: "Md. Fayez Ahmed Fayem",
      title: "Chief Technology Officer",
      organization: "Radiological Solution Bangladesh(RSB)",
      email: "fayez172@gmail.com",
    },
  ],
};
