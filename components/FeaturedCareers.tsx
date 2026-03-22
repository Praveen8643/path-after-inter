const careers = [
    "Engineering",
    "Medicine",
    "Pharmacy",
    "Law",
    "BBA / Management",
    "CA / Finance",
    "Design / Animation",
    "Agriculture",
    "Data Science",
    "Journalism",
  ];
  
  export default function FeaturedCareers() {
    return (
      <section id="featured-careers" className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Popular Career Paths
            </h2>
            <p className="mt-4 text-slate-600">
              Explore some of the most searched and high-interest career directions after Intermediate.
            </p>
          </div>
  
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {careers.map((career) => (
              <div
                key={career}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }