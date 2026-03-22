export default function Hero() {
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
            <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              Explore Career Tree
            </button>
  
            <button className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700">
              View All Streams
            </button>
          </div>
        </div>
  
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-lg">
          <div className="grid gap-4">
            <div className="mx-auto w-fit rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              10th Class
            </div>
  
            <div className="mx-auto h-10 w-0.5 bg-slate-300" />
  
            <div className="mx-auto w-fit rounded-2xl bg-blue-100 px-5 py-3 text-sm font-semibold text-blue-900">
              Intermediate
            </div>
  
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["MPC", "BiPC", "MEC", "CEC", "HEC", "Vocational"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
  
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-green-50 p-4 text-sm text-green-900 shadow-sm">
                <p className="font-semibold">Engineering</p>
                <p className="mt-1 text-green-800">B.Tech, Architecture, AI, Data Science</p>
              </div>
  
              <div className="rounded-2xl bg-purple-50 p-4 text-sm text-purple-900 shadow-sm">
                <p className="font-semibold">Medical & Allied Health</p>
                <p className="mt-1 text-purple-800">MBBS, Nursing, Pharmacy, BPT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }