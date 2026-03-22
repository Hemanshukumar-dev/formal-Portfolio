// Hero Section — Pixel-perfect 3-column layout: Text | Image | Navigation
// Uses standard Tailwind classes + arbitrary values (no @theme tokens)
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import profileImg from "../assets/dp.jpeg";

const Hero = () => {
  // Skill tags
  const heroTags = ["Java", "MERN", "DSA"];

  // Right-side navigation links (smooth scroll)
  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen bg-[#F7F5F2] flex items-center pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* 3-column grid — text 5 | image+nav 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">

          {/* ── LEFT: Text Content ── */}
          <div className="lg:col-span-5 order-2 lg:order-1">

            {/* Greeting — italic serif, smaller */}
            <p
              className="text-xl md:text-2xl text-gray-500 mb-1"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              Hey there, I'm{" "}
              <span
                className="text-[#1A1A1A] text-2xl md:text-3xl not-italic"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Hemanshu Kumar,
              </span>
            </p>

            {/* Main Title — very large serif, 3 lines */}
            <h1
              className="font-bold mt-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.05,
              }}
            >
              <span className="block text-[64px] md:text-[80px] text-[#1A1A1A]">
                Full-Stack
              </span>
              <span className="block text-[64px] md:text-[80px] text-[#1A1A1A]">
                Developer
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-500 font-semibold mt-2">
                • MERN Stack
              </span>
            </h1>

            {/* Skill Tags — pill style with border */}
            <div className="flex flex-wrap gap-3 mt-8">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 border border-gray-200 px-5 py-2 rounded-full text-sm font-medium text-[#1A1A1A]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mt-6 max-w-md text-base">
              I design and develop user-friendly websites, turning complex
              problems into scalable, high-performance solutions with a clean,
              modern experience.
            </p>

            {/* Buttons — Contact + Social icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#contact"
                className="bg-[#1A1A1A] text-white rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Contact Me <FiArrowRight size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Hemanshukumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/hemanshukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#004182] transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* ── CENTER + RIGHT: Image & Nav combined ── */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center gap-4">

            {/* Profile Image — fixed-size oval container */}
            <div
              className="w-[300px] h-[380px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px] overflow-hidden flex-shrink-0"
              style={{ borderRadius: "45% 45% 45% 45% / 40% 40% 55% 55%" }}
            >
              <img
                src={profileImg}
                alt="Hemanshu Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Card — positioned close to image */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 w-[180px] flex-shrink-0 -ml-4">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-5">
                Navigation
              </p>
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#1A1A1A] font-medium text-lg hover:text-black/70 hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile nav — shown only on small screens */}
            <div className="lg:hidden bg-white rounded-2xl shadow-lg p-5 w-full max-w-[200px]">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-4">
                Navigation
              </p>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#1A1A1A] font-medium text-base hover:text-black/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
