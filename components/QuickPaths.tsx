const quickPaths = [
    {
      title: "Intermediate",
      desc: "Explore all streams and degree options after Intermediate.",
    },
    {
      title: "Diploma / Polytechnic",
      desc: "Technical paths after 10th with lateral-entry opportunities.",
    },
    {
      title: "ITI",
      desc: "Skill-based training paths leading to jobs and apprenticeships.",
    },
    {
      title: "Vocational",
      desc: "Job-ready programs across healthcare, retail, hospitality, and more.",
    },
    {
      title: "Government Careers",
      desc: "Explore exam-oriented paths such as SSC, Banking, and State jobs.",
    },
    {
      title: "Study Abroad",
      desc: "Learn about international education routes and entrance requirements.",
    },
  ];
  
  export default function QuickPaths() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 lg:px-8">
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
            <div
              key={path.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{path.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{path.desc}</p>
              <button className="mt-6 text-sm font-medium text-slate-900 underline underline-offset-4">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }