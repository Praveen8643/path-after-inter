export default function Footer() {
    return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">Career Tree India</p>
            <p className="mt-2 max-w-xl leading-6">
              Helping students and parents discover broader education and career options after 10th and Intermediate.
            </p>
          </div>
  
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
            <a href="#" className="hover:text-slate-900">Disclaimer</a>
          </div>
        </div>
      </footer>
    );
  }