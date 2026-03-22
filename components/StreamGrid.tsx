const streams = [
    { title: "MPC", subtitle: "Engineering & Tech", color: "bg-blue-50 border-blue-200" },
    { title: "BiPC", subtitle: "Medical & Life Sciences", color: "bg-green-50 border-green-200" },
    { title: "MEC", subtitle: "Finance & Business", color: "bg-amber-50 border-amber-200" },
    { title: "CEC", subtitle: "Commerce & Law", color: "bg-purple-50 border-purple-200" },
    { title: "HEC", subtitle: "Arts & Humanities", color: "bg-rose-50 border-rose-200" },
    { title: "Diploma", subtitle: "Technical Skills", color: "bg-slate-50 border-slate-200" },
  ];
  
  export default function StreamGrid() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore by Stream
          </h2>
          <p className="mt-4 text-slate-600">
            Browse the most common academic paths and understand where each one can lead.
          </p>
        </div>
  
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {streams.map((stream) => (
            <div
              key={stream.title}
              className={`rounded-2xl border p-6 shadow-sm ${stream.color}`}
            >
              <h3 className="text-xl font-semibold text-slate-900">{stream.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{stream.subtitle}</p>
              <button className="mt-5 text-sm font-medium text-slate-900 underline underline-offset-4">
                Open Stream
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }