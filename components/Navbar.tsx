export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold text-lg">Career Tree</h1>
  
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Career Tree</a>
            <a href="#">Resources</a>
          </nav>
  
          <button className="bg-black text-white px-4 py-2 rounded-xl text-sm">
            Explore
          </button>
        </div>
      </header>
    );
  }