type HeroProps = {
    onSelectLevelAndStream: (levelOneSlug: string, streamSlug?: string) => void;
  };
  
  const heroBranches = [
    { label: "MPC", levelOneSlug: "intermediate", streamSlug: "mpc" },
    { label: "BiPC", levelOneSlug: "intermediate", streamSlug: "bipc" },
    { label: "MEC", levelOneSlug: "intermediate", streamSlug: "mec" },
    { label: "CEC", levelOneSlug: "intermediate", streamSlug: "cec" },
    { label: "HEC", levelOneSlug: "intermediate", streamSlug: "hec" },
    {
      label: "Vocational",
      levelOneSlug: "intermediate",
      streamSlug: "vocational-courses",
    },
  ];
  
  export default function Hero({ onSelectLevelAndStream }: HeroProps) {
    const handleExploreTree = () => {
      onSelectLevelAndStream("intermediate", "mpc");
      document.getElementById("career-tree")?.scrollIntoView({ behavior: "smooth" });
    };
  
    const handleBranchClick = (levelOneSlug: string, streamSlug?: string) => {
      onSelectLevelAndStream(levelOneSlug, streamSlug);
      document.getElementById("career-tree")?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
            Career guidance after 10th and Intermediate
          </span>
  
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Explore Career Paths After Intermediate
          </h1>
  
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Go beyond MPC and BiPC. Discover courses, colleges, entrance exams, and
            career opportunities across science, commerce, arts, diploma, and
            vocational paths.
          </p>
  
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleExploreTree}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Explore Career Tree
            </button>
  
            <button
              onClick={() =>
                document.getElementById("stream-grid")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-50"
            >
              View All Streams
            </button>
          </div>
        </div>
  
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-xl">
          <div className="grid gap-4">
            <div className="mx-auto w-fit rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              10th Class
            </div>
  
            <div className="mx-auto h-10 w-0.5 bg-slate-300" />
  
            <div className="mx-auto w-fit rounded-2xl bg-blue-100 px-5 py-3 text-sm font-semibold text-blue-900">
              Intermediate
            </div>
  
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {heroBranches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleBranchClick(item.levelOneSlug, item.streamSlug)}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
  
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <button
                onClick={() => handleBranchClick("intermediate", "mpc")}
                className="rounded-2xl bg-green-50 p-4 text-left text-sm text-green-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="font-semibold">Engineering</p>
                <p className="mt-1 text-green-800">
                  B.Tech, Architecture, AI, Data Science
                </p>
              </button>
  
              <button
                onClick={() => handleBranchClick("intermediate", "bipc")}
                className="rounded-2xl bg-purple-50 p-4 text-left text-sm text-purple-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="font-semibold">Medical & Allied Health</p>
                <p className="mt-1 text-purple-800">
                  MBBS, Nursing, Pharmacy, BPT
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }