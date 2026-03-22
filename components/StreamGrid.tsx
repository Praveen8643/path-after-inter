type StreamGridProps = {
    onSelectLevelAndStream: (levelOneSlug: string, streamSlug?: string) => void;
  };
  
  const streams = [
    {
      title: "MPC",
      subtitle: "Engineering & Tech",
      color: "bg-blue-50 border-blue-200",
      levelOneSlug: "intermediate",
      streamSlug: "mpc",
    },
    {
      title: "BiPC",
      subtitle: "Medical & Life Sciences",
      color: "bg-green-50 border-green-200",
      levelOneSlug: "intermediate",
      streamSlug: "bipc",
    },
    {
      title: "MEC",
      subtitle: "Finance & Business",
      color: "bg-amber-50 border-amber-200",
      levelOneSlug: "intermediate",
      streamSlug: "mec",
    },
    {
      title: "CEC",
      subtitle: "Commerce & Law",
      color: "bg-purple-50 border-purple-200",
      levelOneSlug: "intermediate",
      streamSlug: "cec",
    },
    {
      title: "HEC",
      subtitle: "Arts & Humanities",
      color: "bg-rose-50 border-rose-200",
      levelOneSlug: "intermediate",
      streamSlug: "hec",
    },
    {
      title: "Vocational",
      subtitle: "Practical & Job-Ready Skills",
      color: "bg-slate-50 border-slate-200",
      levelOneSlug: "intermediate",
      streamSlug: "vocational-courses",
    },
  ];
  
  export default function StreamGrid({
    onSelectLevelAndStream,
  }: StreamGridProps) {
    const handleStreamClick = (levelOneSlug: string, streamSlug?: string) => {
      onSelectLevelAndStream(levelOneSlug, streamSlug);
      document.getElementById("career-tree")?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <section id="stream-grid" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Explore by Stream</h2>
          <p className="mt-4 text-slate-600">
            Browse the most common academic paths and understand where each one can lead.
          </p>
        </div>
  
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {streams.map((stream) => (
            <button
              key={stream.title}
              onClick={() =>
                handleStreamClick(stream.levelOneSlug, stream.streamSlug)
              }
              className={`rounded-2xl border p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${stream.color}`}
            >
              <h3 className="text-xl font-semibold text-slate-900">{stream.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{stream.subtitle}</p>
              <span className="mt-5 inline-block text-sm font-medium text-slate-900 underline underline-offset-4">
                Open Stream
              </span>
            </button>
          ))}
        </div>
      </section>
    );
  }