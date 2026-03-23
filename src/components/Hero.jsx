// Hero Section — 3-column layout with large oval image and overlapping nav card
import { FiGithub, FiLinkedin, FiArrowRight, FiChevronDown } from "react-icons/fi";
import profileImg from "../assets/dp.png";

const Hero = () => {
  const heroTags = ["Java", "MERN", "DSA"];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">

          {/* ── LEFT: Text Content ── */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            {/* Greeting */}
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

            {/* Main Title */}
            <h1
              className="font-bold mt-2"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.05 }}
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

            {/* Skill Tags */}
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

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#contact"
                className="bg-[#1A1A1A] text-white rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide flex items-center gap-2 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Me <FiArrowRight size={18} />
              </a>
              <a
                href="https://github.com/Hemanshukumar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-gray-50 hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="http://www.linkedin.com/in/hemanshukumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#004182] hover:shadow-md hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image + Overlapping Nav Card ── */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative flex justify-center">

            {/* Profile Image — large rounded-rect / stadium shape */}
            <div
              className="w-[340px] h-[440px] md:w-[420px] md:h-[540px] lg:w-[480px] lg:h-[620px] overflow-hidden flex-shrink-0"
              style={{ borderRadius: "50% 50% 35% 35% / 40% 40% 25% 25%" }}
            >
              <img
                src={profileImg}
                alt="Hemanshu Kumar"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Navigation Card — overlapping the image from the right */}
            <div
              className="hidden lg:block absolute bg-white rounded-2xl shadow-lg p-6 w-[180px]"
              style={{
                right: "2%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
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

            {/* Mobile nav */}
            <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg p-5 w-full max-w-[200px]">
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

        {/* ── Scroll Hint ── */}
        <a
          href="#about"
          className="flex flex-col items-center gap-1 mt-12 group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400 font-medium group-hover:text-gray-600 transition-colors duration-300">
            Scroll to explore
          </span>
          <FiChevronDown
            size={20}
            className="text-gray-400 animate-bounce group-hover:text-gray-600 transition-colors duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
