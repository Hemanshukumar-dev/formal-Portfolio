// Navbar — Fixed top bar with "• PORTFOLIO" left, "CV/RESUME →" right
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5F2]/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="font-heading text-lg font-semibold tracking-wide text-primary">
          • PORTFOLIO
        </span>

        {/* CV/Resume button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          CV/RESUME →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
