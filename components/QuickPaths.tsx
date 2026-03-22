type QuickPathsProps = {
    onSelectLevelAndStream: (levelOneSlug: string, streamSlug?: string) => void;
  };
  
  const quickPaths = [
    {
      title: "Intermediate",
      desc: "Explore all streams and degree options after Intermediate.",
      levelOneSlug: "intermediate",
      streamSlug: "mpc",
      targetId: "career-tree",
    },
    {
      title: "Diploma / Polytechnic",
      desc: "Technical paths after 10th with lateral-entry opportunities.",
      levelOneSlug: "diploma-polytechnic",
      targetId: "career-tree",
    },
    {
      title: "ITI",
      desc: "Skill-based training paths leading to jobs and apprenticeships.",
      levelOneSlug: "iti",
      targetId: "career-tree",
    },
    {
      title: "Vocational",
      desc: "Job-ready programs across healthcare, retail, hospitality, and more.",
      levelOneSlug: "intermediate",
      streamSlug: "vocational-courses",
      targetId: "career-tree",
    },
    {
      title: "Government Careers",
      desc: "Explore exam-oriented paths such as SSC, Banking, and State jobs.",
      targetId: "career-tree",
    },
    {
      title: "Study Abroad",
      desc: "Learn about international education routes and entrance requirements.",
      targetId: "career-tree",
    },
  ];
  
  export default function QuickPaths({ onSelectLevelAndStream }: QuickPathsProps) {
    const handleCardClick = (
      title: string,
      levelOneSlug?: string,
      streamSlug?: string,
      targetId?: string
    ) => {
      if (levelOneSlug) {
        onSelectLevelAndStream(levelOneSlug, streamSlug);
      }
  
      if (title === "Government Careers" || title === "Study Abroad") {
        document.getElementById("career-tree")?.scrollIntoView({ behavior: "smooth" });
        return;
      }
  
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <section id="quick-paths" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Start Exploring Your Path
          </h2>
          <p className="mt-4 text-slate-600">
            Choose a starting point and discover the options available after 10th and Intermediate.
          </p>
        </div>
  
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {quickPaths.map((path) => (
            <button
              key={path.title}
              onClick={() =>
                handleCardClick(
                  path.title,
                  path.levelOneSlug,
                  path.streamSlug,
                  path.targetId
                )
              }
              className="rounded-2xl border bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{path.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{path.desc}</p>
              <span className="mt-6 inline-block text-sm font-medium text-slate-900 underline underline-offset-4">
                Explore
              </span>
            </button>
          ))}
        </div>
      </section>
    );
  }