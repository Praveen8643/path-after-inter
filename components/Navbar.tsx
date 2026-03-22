export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">
              Career Tree
            </h1>
          </div>
  
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#" className="transition hover:text-slate-900">
              Home
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Explore
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Career Tree
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Resources
            </a>
          </nav>
  
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800">
            Explore
          </button>
        </div>
      </header>
    );
  }