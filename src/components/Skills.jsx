// Skills Section — Grid of 5 category cards with tags
import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-3">
            Skills
          </h2>
          <p className="text-secondary text-lg">
            Technologies and strengths I use to build real-world solutions
          </p>
        </div>

        {/* Skills Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-md border border-border p-6"
            >
              {/* Category Title */}
              <h3 className="font-heading text-lg font-semibold text-primary flex items-center gap-2 mb-4">
                <span>{category.icon}</span>
                {category.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      category.highlighted.includes(tag)
                        ? "bg-tag-highlight text-primary border-accent"
                        : "bg-tag-bg text-primary border-border"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
