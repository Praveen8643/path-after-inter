"use client";

import { useState } from "react";

type CareerPath = {
  title: string;
  description: string;
  courses: string[];
  exams: string[];
  careers: string[];
  higherStudies: string[];
};

const pathDetails: Record<string, CareerPath> = {
  MPC: {
    title: "MPC",
    description:
      "Best for students interested in mathematics, logical reasoning, engineering, and technology-driven careers.",
    courses: ["B.Tech", "BSc", "BCA", "Architecture", "Defence", "Data Science"],
    exams: ["JEE", "EAMCET", "NATA", "NDA"],
    careers: [
      "Software Engineer",
      "Civil Engineer",
      "Architect",
      "Data Analyst",
      "Defence Officer",
    ],
    higherStudies: ["M.Tech", "MS", "MBA", "Research Programs"],
  },
  BiPC: {
    title: "BiPC",
    description:
      "Best for students interested in medicine, healthcare, life sciences, and biological research.",
    courses: ["MBBS", "BDS", "B.Pharmacy", "Nursing", "BPT", "Biotechnology"],
    exams: ["NEET", "EAMCET", "AIIMS-related exams"],
    careers: [
      "Doctor",
      "Pharmacist",
      "Nurse",
      "Physiotherapist",
      "Biotech Analyst",
    ],
    higherStudies: ["MD", "MS", "M.Pharmacy", "Public Health", "Research"],
  },
  MEC: {
    title: "MEC",
    description:
      "Best for students interested in commerce, mathematics, finance, economics, and business analysis.",
    courses: ["B.Com", "BBA", "BA Economics", "BMS", "Business Analytics"],
    exams: ["CA Foundation", "CMA Foundation", "CUET"],
    careers: [
      "Financial Analyst",
      "Accountant",
      "Banking Professional",
      "Business Analyst",
      "Economist",
    ],
    higherStudies: ["MBA", "M.Com", "MA Economics", "CA", "CMA"],
  },
  CEC: {
    title: "CEC",
    description:
      "Best for students interested in commerce, civics, law, administration, and social sciences.",
    courses: ["B.Com", "BBA", "BA", "BA LLB", "BBA LLB"],
    exams: ["CLAT", "CUET", "State Law Entrances"],
    careers: [
      "Lawyer",
      "Civil Servant",
      "Journalist",
      "Public Administrator",
      "Banking Professional",
    ],
    higherStudies: ["LLB", "MBA", "MA", "UPSC Preparation"],
  },
  HEC: {
    title: "HEC",
    description:
      "Best for students interested in humanities, arts, psychology, communication, and public-service-oriented careers.",
    courses: ["BA", "Psychology", "Journalism", "Design", "Social Work"],
    exams: ["CUET", "Design Entrances", "University-specific exams"],
    careers: [
      "Psychologist",
      "Journalist",
      "Designer",
      "Social Worker",
      "Teacher",
    ],
    higherStudies: ["MA", "MSW", "MBA", "B.Ed", "Research"],
  },
  Vocational: {
    title: "Vocational",
    description:
      "Best for students who want practical, skill-based, and job-ready learning opportunities.",
    courses: [
      "Hotel Management",
      "Retail Management",
      "Healthcare Assistant",
      "Multimedia",
      "Digital Marketing",
    ],
    exams: ["Institute-specific admissions", "State-level vocational admissions"],
    careers: [
      "Technician",
      "Hospitality Executive",
      "Digital Marketer",
      "Retail Associate",
      "Healthcare Support Staff",
    ],
    higherStudies: ["Diploma", "Advanced Certification", "Degree via lateral options"],
  },
};

export default function CareerTree() {
  const roots = ["Intermediate", "Diploma", "ITI"];
  const branches = ["MPC", "BiPC", "MEC", "CEC", "HEC", "Vocational"];

  const [selectedBranch, setSelectedBranch] = useState("MPC");
  const selectedData = pathDetails[selectedBranch];

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Interactive Career Tree
          </h2>
          <p className="mt-4 text-slate-300">
            Click a stream to view courses, entrance exams, careers, and higher study options.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                10th Class
              </div>

              <div className="h-8 w-0.5 bg-white/30" />

              <div className="grid gap-4 sm:grid-cols-3">
                {roots.map((root) => (
                  <div
                    key={root}
                    className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium"
                  >
                    {root}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {branches.map((branch) => {
                  const isActive = selectedBranch === branch;

                  return (
                    <button
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-sm transition ${
                        isActive
                          ? "bg-white text-slate-950"
                          : "border border-white/10 bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {branch}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Selected path
            </p>

            <h3 className="mt-3 text-2xl font-bold">{selectedData.title}</h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {selectedData.description}
            </p>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-white">Popular courses</p>
                <p className="mt-2 text-slate-300">
                  {selectedData.courses.join(", ")}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Entrance exams</p>
                <p className="mt-2 text-slate-300">
                  {selectedData.exams.join(", ")}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Career options</p>
                <p className="mt-2 text-slate-300">
                  {selectedData.careers.join(", ")}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Higher studies</p>
                <p className="mt-2 text-slate-300">
                  {selectedData.higherStudies.join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950">
                View Details
              </button>
              <button className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white">
                Official Links
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}