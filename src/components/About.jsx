// About Section — Left text (3 paragraphs) + Right cards (Education & Highlights)

const About = () => {
  // About paragraphs
  const paragraphs = [
    "I'm a B.Tech Computer Science student with a strong interest in full-stack development, focused on building scalable, user-friendly applications that solve real-world problems.",
    "Currently pursuing my degree, I work with technologies like Java and the MERN stack, continuously improving my development and problem-solving skills.",
    "I enjoy breaking down complex problems into structured solutions, combining strong foundations in Data Structures and Algorithms with a focus on clean architecture and performance.",
  ];

  // Highlights data
  const highlights = [
    { emoji: "🏆", text: "1st Position — Debate Competition (LPU)" },
    { emoji: "🎖️", text: "NCC C Certificate (A Grade)" },
    { emoji: "💻", text: "Strong in Java & Data Structures" },
  ];

  return (
    <section id="about" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
          About Me
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ── Left: Text ── */}
          <div className="lg:col-span-7 space-y-5">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-secondary leading-relaxed text-lg">
                {text}
              </p>
            ))}
          </div>

          {/* ── Right: Cards ── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="bg-white rounded-2xl shadow-md border border-border p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2 mb-4">
                🎓 Education
              </h3>
              <div className="bg-beige rounded-xl p-4 border border-border">
                <p className="font-semibold text-primary">
                  B.Tech Computer Science
                </p>
                <p className="text-secondary text-sm">
                  Lovely Professional University
                </p>
                <p className="text-secondary text-sm mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 bg-secondary rounded-full inline-block" />
                  CGPA: 7.3
                </p>
              </div>
            </div>

            {/* Key Highlights Card */}
            <div className="bg-white rounded-2xl shadow-md border border-border p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2 mb-4">
                ⭐ Key Highlights
              </h3>
              <div className="space-y-3">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-beige rounded-xl px-4 py-3 border border-border"
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <p className="text-primary text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
