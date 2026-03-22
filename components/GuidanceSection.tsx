const guidanceSteps = [
    {
      title: "1. Know your interest",
      desc: "Start with what you enjoy most — maths, biology, business, creativity, communication, or practical technical work.",
    },
    {
      title: "2. Explore all options",
      desc: "Use the career tree to compare degree, diploma, vocational, and government-focused paths before deciding.",
    },
    {
      title: "3. Decide with confidence",
      desc: "Check courses, entrance exams, job roles, and higher study options so your choice is informed and realistic.",
    },
  ];
  
  export default function GuidanceSection() {
    return (
      <section id="guidance-section" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Confused About What to Choose?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Many students feel stuck between popular choices, family expectations, and unclear information. This platform is designed to make that decision process easier and more transparent.
            </p>
          </div>
  
          <div className="grid gap-5">
            {guidanceSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }