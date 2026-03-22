export default function Purpose() {
    const items = [
      {
        title: "Limited Awareness",
        desc: "Students often know only MPC and BiPC as the main options after Intermediate.",
      },
      {
        title: "Peer Pressure Choices",
        desc: "Many career decisions are influenced by others instead of genuine interest.",
      },
      {
        title: "Hidden Career Paths",
        desc: "Several valuable degree, diploma, and skill-based options never get explored.",
      },
      {
        title: "Guided Exploration",
        desc: "This platform presents paths visually so students and parents can compare clearly.",
      },
    ];
  
    return (
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Why This Platform Matters
            </h2>
            <p className="mt-4 text-slate-600">
              Students deserve to see more than just the usual career paths.
            </p>
          </div>
  
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }